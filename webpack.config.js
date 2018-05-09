'use strict'

const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const rootPath = path.resolve( __dirname )
const srcPath = path.join( rootPath, 'src' )

console.log(process.env.NODE_ENV)
const env = process.env.NODE_ENV
const isDev = (env === 'development')

const common = {
    rootPath: rootPath,
    srcPath: srcPath,
    dist: path.join( rootPath, 'dist' ),
    indexHtml: path.join( srcPath, 'index.html' ),
    staticDir: path.join( rootPath, 'static' ),
    entry:{ app: path.join( srcPath, 'index.js' ) }
}

var webpackConfig = {
    entry: common.entry,
    output: {
        filename: 'public/js/[name]-[hash:5].js',
        // chunkFilename: '[name].bundle.js',
        path: common.dist,
        publicPath: '/'
    },

    mode: 'development',
    devtool: 'inline-source-map',   // 错误提示
    devServer: {
        contentBase: [path.join(__dirname, "src")],
        compress: true,
        port: 9000,
        hot: true,  // 模块热加载，不刷新页面
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Dazi'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}


//开发模式下添加devServer字段
//devServer候选字段参考https://webpack.js.org/configuration/dev-server/
if ( isDev ) {
    webpackConfig.devServer = {
        historyApiFallback:true,
        hot: true,
        contentBase: path.resolve( __dirname, 'dist' ),
        publicPath: '/',
        clientLogLevel: 'none', //日志
        compress: true, //压缩
        port:3000,
        stats: {
            colors: true
        },
        proxy:{
            '/api/*':{
                target: 'http://localhost',
                changeOrigin: true,
                secure: false,
            }
        }
    }
}

module.exports = webpackConfig
