module.exports = {
  // Tab字符的空格宽度
  tabWidth: 2,
  //在JSX中使用单引号而不是双引号
  jsxSingleQuote: false,
  printWidth: 100,
  //使用单引号而不是双引号
  singleQuote: true,
  //在语句的末尾打印分号
  semi: true,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  //在一个单独的箭头函数参数周围包含括号
  arrowParens: 'avoid',
}
