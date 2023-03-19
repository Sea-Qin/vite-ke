#!/usr/bin/env node
const chalk = require("chalk");
const { Command } = require("commander");
const { create } = require("../src/index");
const { version } = require("../package.json");
// const minimist = require("minimist");

const program = new Command();

program.version(
  `pri: ${version}`,
  "-v, --version",
  "output the current pri version"
);

program
  .command("create [my-app]")
  .description("create a vite project")
  .option("-f, --force", "Overwrite target directory if it exists")
  .alias("c")
  .action((name, opt) => {
    if (process.argv.slice(3).length > 2) {
      const info =
        "Info: You provided more than two argument. the rest are ignored. ";
      console.log(chalk.yellow(info));
    }
    create(name, opt);
  });

program.parse(program.argv);
