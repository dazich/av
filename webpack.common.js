'use strict'

/**
 * 公共配置
 */

const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rootPath = path.resolve( __dirname )
const srcPath = path.join( rootPath, 'src' )

const common = {
    rootPath: rootPath,
    srcPath: srcPath,
    dist: path.join( rootPath, 'dist' ),
    indexHtml: path.join( srcPath, 'index.html' ),
    staticDir: path.join( rootPath, 'static' ),
    entry:{ app: path.join( srcPath, 'index.js' ) }
}

module.exports = {
    entry: common.entry,
    output: {
        filename: 'public/js/[name]-[hash:5].js',
        path: common.dist,
        publicPath: '/',    // 如果为./开发环境会异常，但生产环境。。
    },

    resolve: {
        // Allow absolute paths in imports, e.g. import Button from 'components/Button'
        // Keep in sync with .flowconfig and .eslintrc
        modules: ['node_modules', 'src'],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            title: 'Dazi'
        }),
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('css/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
}

