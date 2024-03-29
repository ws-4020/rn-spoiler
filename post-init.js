#!/usr/bin/env node

const fs = require("fs");
const fsp = require("fs").promises;
const { spawn } = require("child_process");

const generateAndroidDebugKeystore = async () => {
  const file = "android/app/debug.keystore";
  if (fs.existsSync(file)) {
    await fsp.unlink(file);
  }
  const command = {
    command: "keytool",
    args: [
      "-genkey",
      "-v",
      "-keystore",
      "android/app/debug.keystore",
      "-storepass",
      "android",
      "-alias",
      "androiddebugkey",
      "-keypass",
      "android",
      "-dname",
      '"CN=Android Debug,O=Android,C=US"',
    ],
  };
  return new Promise((resolve, reject) => {
    let stdout = "";
    const process = spawn(command.command, command.args, { shell: true });
    process.stdout.on("data", (chunk) => (stdout += chunk));
    process.stderr.on("data", (chunk) => (stdout += chunk));
    process
      .on("error", () => reject(stdout))
      .on("close", (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(stdout);
        }
      });
  })
    .then(() => console.log("  ✔ Generate debug.keystore file"))
    .catch(() =>
      console.log("  ⏭️ Failed to generate debug.keystore file. You need to generate debug.keystore manually.")
    );
};

const main = async () => {
  await Promise.all([generateAndroidDebugKeystore()]);
};

main().catch((reason) => {
  console.log(); // 標準出力上でログを見やすくするために、一行改行しています。
  console.error(reason);
  process.exit(1);
});
