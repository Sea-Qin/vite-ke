const inquirer = require("inquirer");

const questions = [
  {
    type: "confirm",
    name: "isPig",
    message: "你是猪吗？",
    default: true,
  },
  {
    type: "checkbox",
    name: "sexType",
    message: "请选择你的性别，点击空格键选中",
    choices: ["male", "female"],
    filter: (val) => {
      return `你的回答是${val}`;
    },
  },
  {
    type: "list",
    message: "请选择一个版本1",
    name: "versionPick",
    choices: ["vue2.x", "vue3.x"],
  },
  {
    type: "expand",
    message: "请选择一个版本2",
    name: "versionPick2",
    choices: [
      {
        key: "1",
        value: "vue2.x",
      },
      {
        key: "2",
        value: "vue3.x",
      },
    ],
  },
  // {
  //   type: "number",
  //   name: "age",
  //   message: "please input ur age",
  // },
  // {
  //   type: "password",
  //   name: "password",
  //   message: "please input ur password",
  // },
  // {
  //   type: "confirm",
  //   message: "当前回答是否满意？选择n就结束了哦",
  //   name: "isSatified",
  //   // default: true,没有必要
  // },
  {
    type: "checkbox",
    message: "选择水果",
    name: "Fruits",
    choices: [
      { name: "苹果" },
      new inquirer.Separator(), // 可以添加分隔符
      { name: "香蕉" },
      { name: "栗子" },
      { name: "梨子" },
    ],
    pageSize: 2, // 此处可以添加分页,一页展示多少条
  },
  {
    type: "confirm",
    message: "养猪赚钱吗",
    name: "isPigRich",
    when: (answersObj) => {
      return answersObj.isPig;
    },
  },
];

inquirer.prompt(questions).then((answersObj) => {
  console.log("===你是猪吗：", answersObj);
});
