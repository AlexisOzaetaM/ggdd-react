const { merge } = require('webpack-merge');
const common = require('./webpack.common');

prodConfig = {
    mode: "production",
}

module.exports = merge(common, prodConfig);