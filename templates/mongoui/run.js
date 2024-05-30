import { startServer, stopService } from "./main.js";
import path from "node:path";
const serviceName = "mongoui";

async function run({ config, rootPath },tBus) {
    await startServer(rootPath, config);
    tBus.resolve(
        { host: `http://localhost:${config.port}`, serviceName, log: "" },
        [
            {
                type: "link",
                label: "web",
                value: `http://localhost:${config.port}`,
            },
        ]
    );
}

/**
 * stop
 */
async function stop() {
    await stopService();
}
