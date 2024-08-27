import devcert from "devcert";
import https from "https";
import http from "http";
import httpProxy from "http-proxy";
import net from "net";
import os from "os";
import fs from "fs/promises";
import { execSync } from "child_process";
import wcmatch from "wildcard-match";

class SSLProxyServer {
  constructor(config) {
    this.config = config;
    this.proxy = httpProxy.createProxyServer({});
    this.ssl = null;
    this.server = null;
    this.matchDomains = {};
  }

  async start() {
    await this.checkPortAvailability();
    await this.setupSSL();
    this.configureDomains();
    await this.updateHostsFile();
    this.logRegisteredDomains();
    this.setupErrorHandling();
    this.createServers();
  }

  logRegisteredDomains() {
    console.log("\n=== Proxy Server Configuration ===");
    console.log(`Port: ${this.config.port}`);
    console.log("Registered Domains:");
    this.config.hosts.forEach((host) => {
      console.log(`  ${host.domain}:`);
      console.log(`    → HTTP(S): ${host.target}`);
      if (host.ws) {
        console.log(`    → WebSocket: ${host.ws}`);
      }
    });
    console.log("===================================\n");
  }

  async checkPortAvailability() {
    return new Promise((resolve, reject) => {
      const server = net.createServer();
      server.once("error", (err) => {
        if (err.code === "EADDRINUSE") {
          console.error(
            `Port ${this.config.port} is already in use. Please choose a different port or free up this port.`
          );
          process.exit(1);
        }
        reject(err);
      });
      server.once("listening", () => {
        server.close();
        resolve();
      });
      server.listen(this.config.port);
    });
  }

  async setupSSL() {
    try {
      this.ssl = await devcert.certificateFor(
        this.config.hosts.map((h) => h.domain)
      );
      console.log("SSL certificates have been set up successfully.");
    } catch (err) {
      console.error("Failed to set up SSL certificates:", err);
      process.exit(1);
    }
  }

  configureDomains() {
    this.config.hosts.forEach((h) => {
      const match = wcmatch(h.domain, { separator: "." });
      this.matchDomains[h.domain] = { match, target: h.target, ws: h.ws };
    });
  }

  async updateHostsFile() {
    const hostsPath =
      os.platform() === "win32"
        ? "C:\\Windows\\System32\\drivers\\etc\\hosts"
        : "/etc/hosts";

    let hostsContent = await fs.readFile(hostsPath, "utf8");

    console.log("\nUpdating hosts file...");
    for (const host of this.config.hosts) {
      const hostLine = `127.0.0.1 ${host.domain}`;
      if (!hostsContent.includes(hostLine)) {
        hostsContent += `\n${hostLine}`;
        console.log(`  Added: ${hostLine}`);
      } else {
        console.log(`  Already exists: ${hostLine}`);
      }
    }

    try {
      if (os.platform() === "win32") {
        await fs.writeFile(hostsPath, hostsContent, { flag: "w" });
      } else {
        await fs.writeFile("/tmp/hosts.new", hostsContent);
        execSync(`sudo cp /tmp/hosts.new ${hostsPath}`);
        await fs.unlink("/tmp/hosts.new");
      }
      console.log("Hosts file updated successfully.");
    } catch (error) {
      console.error(
        "Failed to update hosts file. You may need to run this script with administrator privileges."
      );
      console.error(error);
    }
  }

  setupErrorHandling() {
    this.proxy.on("error", (err, req, res) => {
      console.error("Proxy error:", err);
      res.writeHead(502, { "Content-Type": "text/plain" });
      res.end(`Proxy server error - ${err.message}`);
    });

    process.on("uncaughtException", (err) => {
      console.error("Uncaught exception:", err);
      this.restart();
    });
  }

  createServers() {
    const createProxyHandler = (req, res) => {
      if (!req.headers.host) {
        console.warn("The `req.headers.host` was empty.");
        res.writeHead(502, { "Content-Type": "text/plain" });
        res.end("Proxy server error - No host in request headers");
        return;
      }

      // Extract the domain from the request
      const domain = this.getDomain(req.headers.host);
      console.log(`Incoming request for domain: ${domain}`);

      const hostConfig = this.matchDomains[domain];
      if (hostConfig) {
        console.log(
          `Matching domain found for ${domain}: forwarding to ${hostConfig.target}`
        );

        // Forward the request to the correct target
        this.proxy.web(
          req,
          res,
          {
            target: hostConfig.target,
            ssl: req.connection.encrypted ? this.ssl : undefined,
          },
          (err) => {
            if (err.code === "ECONNREFUSED") {
              console.error(
                `Failed to connect to ${hostConfig.target}. Connection refused.`
              );
              res.writeHead(502, { "Content-Type": "text/plain" });
              res.end(
                `Proxy server error - could not connect to ${hostConfig.target}`
              );
            } else {
              console.error(`Proxy error: ${err.message}`);
              res.writeHead(502, { "Content-Type": "text/plain" });
              res.end(`Proxy server error - ${err.message}`);
            }
          }
        );
      } else {
        console.warn(`No matching domain found for: ${domain}`);
        res.writeHead(502, { "Content-Type": "text/plain" });
        res.end("Proxy server error - no matching domain");
      }
    };

    const httpsServer = https.createServer(this.ssl, createProxyHandler);
    const httpServer = http.createServer(createProxyHandler);

    const handleUpgrade = (req, socket, head) => {
      const domain = this.getDomain(req.headers.host);
      const hostConfig = this.matchDomains[domain];
      if (hostConfig && hostConfig.ws) {
        this.proxy.ws(req, socket, head, {
          ssl: req.connection.encrypted ? this.ssl : undefined,
          target: hostConfig.ws,
        });
      } else {
        console.warn("No matching WebSocket domain for:", domain);
      }
    };

    httpsServer.on("upgrade", handleUpgrade);
    httpServer.on("upgrade", handleUpgrade);

    httpsServer.listen(this.config.port, () => {
      console.log(
        `HTTPS Proxy server is listening on https://0.0.0.0:${this.config.port}`
      );
    });

    httpServer.listen(this.config.httpPort || 80, () => {
      console.log(
        `HTTP Proxy server is listening on http://0.0.0.0:${
          this.config.httpPort || 80
        }`
      );
    });

    this.server = { httpsServer, httpServer };
  }

  getDomain(domain) {
    const url = new URL("https://" + domain);
    return url.hostname;
  }

  restart() {
    console.log("Restarting proxy server...");
    this.stop(() => this.start());
  }

  stop(callback) {
    console.log("Stopping proxy server...");
    if (this.server) {
      this.server.httpsServer.close();
      this.server.httpServer.close(callback);
      console.log("Proxy server stopped.");
    } else {
      console.log("No active server to stop.");
      if (callback) callback();
    }
  }

  //   getDomain(domain) {
  //     var url = new URL("https://" + domain);
  //     url.port = "";
  //     const newURL = url.toString().slice(8);
  //     return newURL.endsWith("/") ? newURL.slice(0, -1) : newURL;
  //   }
}

export default SSLProxyServer;
