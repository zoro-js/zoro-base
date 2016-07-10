/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 13:34:64
*/

var env = require('./env')
var path = require('path')

var config = {
  entry: './test/unit/specs/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'specs.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.yaml$/, loader: 'json!yaml' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: true,
          plugins: [
            'transform-es3-property-literals',
            'transform-es3-member-expression-literals',
            ["transform-es2015-modules-commonjs", {
              "loose": true
            }]
          ]
        }
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname, '../src')
    ]
  },
  devServer: {
    contentBase: './test/unit',
    noInfo: true
  }
}

var isProduction = env.isProduction()
if (!isProduction) {
  // sourceMap 相关
  config.output.pathinfo = true
  // config.devtool = 'eval'
}

module.exports = config
