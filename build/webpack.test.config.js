var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './test/unit/specs/index.js',
    output: {
        path: path.resolve(__dirname, '../test/unit'),
        filename: 'specs.js'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../')
        }
    },
    devServer: {
        contentBase: './test/unit',
        noInfo: true
    },
    devtool: '#source-map'
};