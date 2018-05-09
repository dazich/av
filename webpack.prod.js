'use strict'

const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    // mode: 'production' 会将 process.env.NODE_ENV 的值设为 production。
    // 启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
    mode: 'production',
    plugins: [
        // new UglifyJSPlugin()
    ]
});
