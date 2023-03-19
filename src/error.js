//报错处理api
// const { logErrors } = require("./logger")

const asyncCatchErrorHof = (fn) => {
  console.log("err:", new Error(888));
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      // logErrors(error.message)
    }
  };
};

const catchErrorHof = (fn) => {
  console.log("----not async err:", new Error(999));
  return (...args) => {
    try {
      return fn(...args);
    } catch (error) {
      // logError(error.message)
    }
  };
};

module.exports = {
  asyncCatchErrorHof,
  catchErrorHof,
};
