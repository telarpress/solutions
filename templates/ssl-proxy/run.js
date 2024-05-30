import devcert from "devcert";
import https from "https";
import httpProxy from "http-proxy";
import wcmatch from "wildcard-match";

const serviceName = "ssl-proxy";

async function run({ config }, tBus) {
  if (!config.port) {
    throw Error("The port is required.");
  }
  let ssl = await devcert.certificateFor(config.hosts.map((h) => h.domain));
  var proxy = httpProxy.createProxyServer({});
  const matchDomains = {};
  config.hosts.forEach((h) => {
    console.log(
      "Registered domain=" + h.domain + " target=" + h.target + " ws=" + h.ws
    );
    const match = wcmatch(h.domain, {
      separator: ".",
    });
    matchDomains[h.domain] = { match, target: h.target, ws: h.ws };
  });
  const proxyServer = https.createServer(ssl, (req, res) => {
    if (req.headers.host) {
      const domain = getDomain(req.headers.host);
      for (let index = 0; index < config.hosts.length; index++) {
        const host = config.hosts[index];
        if (
          matchDomains[host.domain] &&
          matchDomains[host.domain].match(domain)
        ) {
          proxy.web(req, res, {
            ssl,
            target: matchDomains[host.domain].target,
          });
          return;
        }
      }
      console.warn("Could not find a match for ", domain);
    } else {
      console.warn("The `req.headers.host` was empty.");
    }
  });
  //
  // Listen to the `upgrade` event and proxy the
  // WebSocket requests as well.
  //
  proxyServer.on("upgrade", function (req, socket, head) {
    if (req.headers.host) {
      const domain = getDomain(req.headers.host);
      if (matchDomains[domain] && matchDomains[domain].ws) {
        proxy.ws(req, socket, head, { ssl, target: matchDomains[domain].ws });
      }
    }
  });

  proxyServer.listen(config.port);
  console.log(`Proxy server is listening on http://0.0.0.0:${config.port}`);
  tBus.resolve(
    { port: config.port, host: "localhost", serviceName, log: `` },
    []
  );
}

/**
 * Get domain without port and trailing slash
 * @param {String} domain
 * @returns
 */
function getDomain(domain) {
  var url = new URL("https://" + domain);
  url.port = "";
  const newURL = url.toString().slice(8);
  return newURL.endsWith("/") ? newURL.slice(0, -1) : newURL;
}

/**
 * stop smtp
 */
async function stop() {}
