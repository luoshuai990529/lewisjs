const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (opt) => {
    return {
        mode: 'production',
        entry: opt.path,
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                '~/core': path.resolve(__dirname, '../packages/@lewisjs')
            }
        },
        output: {
            path: path.resolve(opt.packagePath, './build'),
            filename: "index.js",
            library: opt.name, //object 从 webpack 3.1.0 开始应用。用于 libraryTarget: 'umd'
            globalObject: 'this',
            libraryTarget: 'umd', 
            umdNamedDefine: true //当使用 libraryTarget: "umd" 时，设置 output.umdNamedDefine 为 true 将命名由 UMD 构建的 AMD 模块。否则将使用一个匿名的 define。
        },
        externals: opt.externals,
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'index.css',  // 分离后的文件名
                ignoreOrder: false
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.ts(x)$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: path.resolve(opt.packagePath, './tsconfig.json')
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                    }, 
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: 'local', //需要 local 模式时可以忽略该值。
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                getLocalIdent: (context, localIdentName, localName, options) => {
                                    // console.log(`context------`,JSON.stringify(context));
                                    // console.log(`localIdentName------`,localIdentName);
                                    // // 可以指定自定义 getLocalIdent 函数的绝对路径，以基于不同的架构生成类名。
                                    const ar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
                                    let hs = '';
                                    let al = ar.length;
                                    for (let i = 0; i < 5; i ++) {
                                        hs+=ar[Math.floor(Math.random() * al)];
                                    }
                                    return `lewisjs_${hs}_${localName}`;
                                },
                            },
                        }
                    },
                    {
                        loader: "less-loader"
                    }]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                        },
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: {
                        loader: 'url-loader'
                    }
                }
            ]
        },
        optimization: {
            minimize: true //压缩js代码 prod默认为true
        }
    }
}