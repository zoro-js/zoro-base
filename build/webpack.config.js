var path = require('path');

module.exports = {
    entry: {
        util: './util'
    },
    output: {
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    }
};