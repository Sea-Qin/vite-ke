const ora = require('ora');
const download = require('download-git-repo');
const chalk = require('chalk');

const installDependencies = () => {
  //下载依赖
  const command = 'npm';
  const args = ['install', '--loglevel', 'error'];
};

const downloadTemplate = (targetDir) => {
  console.log('---come spin');
  const gitOrigin = 'https://github.com/Sea-Qin/vite-ke.git';
  const spinner = ora(`正在下载项目模板，源地址：${gitOrigin}`);
  spinner.start();
  download(`direct:${gitOrigin}`, targetDir, { clone: true }, async (err) => {
    if (err) {
      spinner.fail();
      console.log(chalk.red('---下载失败！'));
    } else {
      // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
      spinner.succeed();
      console.log(chalk.green('---下载成功！'));
      const { execa } = await import('execa');

      try {
        const command = 'npm';
        const args = ['install', '--loglevel', 'error'];
        const { stdout, stderr } = await execa(command, args, {
          cwd: targetDir,
          stdio: ['inherit', 'inherit', 'inherit'],
        });

        child.on('close', (code) => {
          const msg = `${command} ${args.join(' ')}`;
          //处理resolve、reject
          // if (code !== 0) reject(new Error(`Command failed: ${msg}`));
          // resolve(`Command success: ${msg}`);
        });

        console.log({ stdout, stderr });
      } catch (error) {
        console.error(`ERROR: The command failed. stderr: ${error.stderr} (${error.exitCode})`);
      }
      // res(target);
    }
  });
};

module.exports = {
  downloadTemplate,
};
