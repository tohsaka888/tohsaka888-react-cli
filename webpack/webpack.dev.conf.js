const { baseConfig, resolvePath } = require("./webpack.base.conf");

const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 3000,
    host: 'localhost',
    open: true,
    allowedHosts: 'auto',
    client: {
      progress: true,
    },
    host: 'local-ip',
  },
})