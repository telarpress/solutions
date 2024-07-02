import path from "node:path";

const serviceName = "ts-js";
async function run({ config, rootPath, projectPath }, tBus) {
  await startService(projectPath, tBus);
  tBus.resolve({ serviceName, log: "" });
}

async function startService(projectPath, tBus) {
  return new Promise(async (resolve, reject) => {
    const telarWebPath = path.join(projectPath, "telar-web-js");
    const telarSocialPath = path.join(projectPath, "telar-social-js", "micros");
    const worker = await tBus.exec(
      `telar run -d ${telarSocialPath}`,
      {
        cwd: telarWebPath,
      }
    );
    worker.on("exit", (code, signal) => {
      if (Number(code) === 0 && signal === null) {
        resolve(code);
      } else {
        reject();
      }
    });
    if (worker.stdout) {
      worker.stdout.on("data", (data) => {
        if (data && data.indexOf("Server listening at")) {
          resolve(data);
        }
      });
    }
  });
}

function stop() {}
