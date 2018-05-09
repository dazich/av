'use strict'

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

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
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
