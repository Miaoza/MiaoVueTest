// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    // off:0 warn:1 error:2
    // allow async-await
    "generator-star-spacing": "off", // 生成器函数*的前后空格
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    eqeqeq: 2 // 强制使用全等
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
