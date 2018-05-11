/**
 * 练习
 * js执行webpack打包
 * @type {webpack}
 */

const webpack = require('webpack')
const webpackConfig = require('./tools/webpack.config')


async function start() {
    const multiCompiler = webpack(webpackConfig);

    const r = await multiCompiler.run();

    console.log('打包完成::', r)
}

start().then();