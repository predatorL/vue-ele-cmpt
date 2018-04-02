'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = require('../config/prod.env')
// 移除base定义的entry和output
baseWebpackConfig.entry = {}
baseWebpackConfig.output = {}
const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    lib: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: 'ele-cmpt.js',
    library: 'eleCmpt',
    libraryTarget: 'umd'
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    })
  ]
})
console.log(webpackConfig)
module.exports = webpackConfig
