'use strict'
/**
 * 开发时的配置
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // mode: 'development' 会将 process.env.NODE_ENV 的值设为 development。
    // 启用 NamedChunksPlugin 和 NamedModulesPlugin。
    mode: 'development',
    devtool: 'inline-source-map',   // 错误提示
    devServer: {
        contentBase: [path.resolve(__dirname, "src")],
        compress: true,
        port: 9000,
        hot: true,  // 模块热加载，不刷新页面
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
});
