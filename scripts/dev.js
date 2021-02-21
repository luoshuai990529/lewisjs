const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer');
const express = require('express');
const middleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod');
const packageWebpackConfig = require('./base');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'package',
            message: '请选择package',
            choices: function () {
                const packageDir = path.join(__dirname, '../packages/@lewisjs');
                // 过滤掉以.开头的文件
                return fs.readdirSync(packageDir).filter(item => !item.startsWith('.'))
            }
        }
    ])
    .then(answers => {
        // console.log('选择的dev包：------',packageWebpackConfig[answers.package]);
        // console.log('webpackConfig-----',webpackConfig(packageWebpackConfig[answers.package]));
        const compiler = webpack(webpackConfig(packageWebpackConfig[answers.package]))
        const PORT = 7777;
        const app = express();
        // 告知 express 使用 webpack-dev-middleware，
        // 以及将 webpack.prod.js 配置文件作为基础配置。
        // writeToDisk :告诉 devServer 将产生的文件写入硬盘。 写入位置为 output.path 配置的目录。
        app.use(
            middleware(compiler, {
                writeToDisk: true,
            })
        );
        app.listen(PORT, () => console.log(`lewisjs dev server listening on port ${PORT}!`));
    })
    .catch(error => {
        console.error(error);
    });