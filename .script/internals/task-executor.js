const {spawn} = require('child_process');

const elapsedTime = (startTime) => {
  const precision = 0;
  const elapsed = process.hrtime(startTime)[1] / 1000000;
  const secondCount = process.hrtime(startTime)[0];
  const millisecondCount = elapsed.toFixed(precision);

  if (secondCount > 0) return `${secondCount}s`;
  return `${millisecondCount}ms`;
};

const runCommand = (task, command) => {
  return new Promise((resolve, reject) => {
    const spawnedTask = spawn(command.command, command.args, {shell: true, cwd: command.cwd});

    spawnedTask.stderr.on('data', (data) => {
      console.log()
      console.log(`\tstdout: ${data}`);
    });

    spawnedTask.on('error', (error) => {
      console.log(`❌  Command '${task.name}' failed with error: ${error.message}`);
      reject(error);
    });

    spawnedTask.on('exit', (code) => {
      if (code !== 0) {
        console.log(`❌  Command '${task.name}' failed with code: ${code}`);
        reject(code);
      } else {
        resolve(code);
      }
    });
  });
};

const execute = async (task) => {
  const startTime = process.hrtime();

  console.log(`🚀 ${task.name} has started.`);
  for (let command of task.commands) {
    try {
      process.stdout.write(`\t${command.command} ${command.args.join(' ')} @[${command.cwd || './'}]...`);
      await runCommand(task, command);
      console.log(`✔️`);
    } catch (e) {
      console.log(`❌ ${task.name} has failed in ${elapsedTime(startTime)}.`);
      return;
    }
  }
  console.log(`✅ ${task.name} has finished running in ${elapsedTime(startTime)}.`);
};

module.exports = {
  execute,
};
