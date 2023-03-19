const chalk = require("chalk");

//log相关api
const dim = {
  error: "❌",
  warn: "⚠️",
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

module.exports = {
  logErrors,
  logWarnings,
  dim,
};
