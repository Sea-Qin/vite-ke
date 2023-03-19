const chalk = require('chalk');

//log相关api
const dim = {
  error: '❌',
  warn: '⚠️',
  start: '🌟',
};
function logErrors(errors, dim) {
  if (!errors) return;

  errors.forEach((msg) => {
    const str = dim ? chalk.red.dim(dim, msg) : chalk.red(msg);
    console.error(str);
  });
}

function logWarnings(warnings, dim) {
  if (!warnings) return;

  warnings.forEach((msg) => {
    const str = dim ? chalk.yellow.dim(dim, msg) : chalk.yellow(msg);
    console.warn(str);
  });
}

function logInfos(infos, dim) {
  if (!infos) return;

  infos.forEach((msg) => {
    const str = dim ? chalk.cyan.dim(dim, msg) : chalk.cyan(msg);
    console.log(str);
  });
}

module.exports = {
  logErrors,
  logWarnings,
  dim,
};
