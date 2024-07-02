import path from "node:path";

const serviceName = "ts-ui";
async function run({ config, rootPath, projectPath }, tBus) {
  await yarnStart(path.join(projectPath, "ts-ui"), tBus);
  tBus.resolve({ serviceName, log: "" });
}

async function yarnStart(uiPath, tBus) {
  return new Promise(async (resolve, reject) => {
    const worker = await tBus.exec("yarn dev", { cwd: uiPath });
    worker.on("exit", (code, signal) => {
      if (Number(code) === 0 && signal === null) {
        resolve(code);
      } else {
        reject();
      }
    });
    if (worker.stdout) {
      worker.stdout.on("data", (data) => {
        if (data && data.indexOf("Local:")) {
          resolve(data);
        }
      });
    }
  });
}

function stop() {}
