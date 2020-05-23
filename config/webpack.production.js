const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
    ],
  },
})