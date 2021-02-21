// 主要配置文件是main.js。该文件控制了Storybook服务器的行为，因此更改它时必须重新启动Storybook的过程
const path = require('path');

module.exports = {
  stories: ['../story/**/*.jsx'], // 表示story文件的位置，相对于main.js 
  //   扩展插件
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-queryparams',
    '@storybook/addon-knobs',
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.story\.jsx$/,
          include: [path.resolve(__dirname, '../packages/')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
};



