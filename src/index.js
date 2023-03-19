const chalk = require("chalk");
const fs = require("fs-extra"); //文件夹处理
const path = require("path");
const { prompt } = require("inquirer");
const { asyncCatchErrorHof, asyncErrorHof, catchErrorHof } = require("./error");
const { logErrors, logWarnings, dim } = require("./logger");
const validateNpmPackageName = require("validate-npm-package-name"); //npm包文件名合法校验

function handleInvalidName(result, name) {
  logErrors([`Invalid project name ${name}`]);
  logErrors(result.errors, dim.error);
  logWarnings(result.warnings, dim.warn);
  process.exit(1);
}

function createProject(targetDir) {
  //执行真正的项目创建+模板拉取逻辑
  // console.log("---gogogo", fs);
  fs.mkdirSync(targetDir); //创建目录文件
}

const create = async (projectName, options) => {
  const cwd = options.cwd || process.cwd(); //获取当前执行node命令时的文件夹路径
  // const inCurrent = projectName === "."; // 如果项目名称为 '.' 表示要在当前目录下直接创建项目不支持
  let name = projectName;

  if (!name) {
    const { projectName } = await prompt([
      {
        type: "input",
        name: "projectName",
        message: "请输入项目名",
        default: "vite-ke-template",
      },
    ]);
    name = projectName;
  }

  const result = validateNpmPackageName(name);
  const targetDir = path.resolve(cwd, name);

  //校验项目名合法性
  if (!result.validForNewPackages) {
    return handleInvalidName(result, name);
  }

  if (fs.existsSync(targetDir)) {
    const { force } = options;
    if (force) {
      await fs.remove(targetDir);
      createProject(targetDir);
    } else {
      const { isRemovePre } = await prompt([
        {
          type: "confirm",
          message: `项目${name}已经存在，是否覆盖文件？选择 n 则退出创建`,
          name: "isRemovePre",
        },
      ]);
      if (isRemovePre) {
        //...创建项目逻辑
        await fs.remove(targetDir);
        createProject(targetDir);
      } else {
        return logWarnings(["退出创建"], dim.warn);
      }
    }
  } else {
    createProject(name, targetDir);
  }

  console.log(chalk.green(`Successfully init project: ${name}!`));
};
module.exports = {
  create,
};
