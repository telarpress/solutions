import SSLProxyServer from "./proxy.js";

const serviceName = "ssl-proxy";
let proxyServer;

/**
 * Run proxy server
 * @param {*} param0
 * @param {*} tBus
 */
async function run({ config }, tBus) {
  if (!config.port) {
    throw Error("The port is required.");
  }

  // run proxy server
  if (!proxyServer) {
    proxyServer = new SSLProxyServer(config);
    await proxyServer.start();
  }

  tBus.resolve(
    { port: config.port, host: "localhost", serviceName, log: `` },
    []
  );
}

/**
 * Stop proxy
 */
async function stop() {
  if (proxyServer) {
    proxyServer.stop(() => {
      proxyServer = null;
    });
  }
}

/**
 * Restart proxy server
 */
async function restart() {
  if (proxyServer) {
    proxyServer.restart();
  }
}
