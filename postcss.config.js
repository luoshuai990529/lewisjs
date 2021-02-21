
'use strict';

module.exports = {
  plugins: [
    // autoprefixer:用来自动处理浏览器前缀的一个插件。
    require('autoprefixer')({ overrideBrowserslist: ['iOS >= 7', 'Android >= 4.0', 'ie >= 9'] }),
    // css文件顶部添加 /*px2rem-disabled*/，会跳过px到rem的转换
    //  /*no*/让px不转rem
    require('@plutojs/postcss-px2rem')({ remUnit: 75 })
  ]
};