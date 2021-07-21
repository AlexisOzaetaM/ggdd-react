const { merge } = require('webpack-merge');
const common = require('./webpack.common');

devConfig = {
    mode: "development",
    devServer: {
        contentBase: '../dist',
        port: 3000,
        open: true,
    }
}

module.exports = merge(common, devConfig);