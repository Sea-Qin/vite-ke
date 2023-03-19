const chalk = require('chalk');
const { downloadTemplate } = require('./download');

const createProject = async (name, targetDir) => {
  // const pkg = getPackageJson(name);
  // const features = await featuresPrompt();
  console.log(chalk.blueBright(`🌟 start creating project ${name} in ${targetDir}`));
  downloadTemplate(name);
};

module.exports = {
  createProject,
};
