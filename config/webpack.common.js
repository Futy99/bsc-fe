const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('./env')
const babelConf = require('../babel.config')

const resolve = name => `${config.build.DIR_NAME}${config.build.SOURCE}${name}`

const babelLoader = {
  loader: 'babel-loader',
  options: babelConf,
}

module.exports = {
  context: path.resolve(config.build.DIR_NAME, config.build.SOURCE),
  entry:  process.env.NODE_ENV === 'production' ? ['babel-polyfill', config.build.MAIN] : [config.build.MAIN],
  output: {
    filename: '[name].js',
    path: path.resolve(config.build.DIR_NAME, config.build.OUTPUT),
    publicPath: config.build.PUBLIC_PATH,
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      store: resolve('/store'),
      utils: resolve('/utils'),
      components: resolve('/components'),
      constants: resolve('/constants'),
      screens: resolve('/screens'),
      routes: resolve('/routes'),
      locale: resolve('/locale'),
    },
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(config.build.HTML_MAIN),
      chunksSortMode: 'none',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          useBabel: true,
          babelrc: false,
          babelCore: '@babel/core',
          babelOptions: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-syntax-dynamic-import',
              'styled-components',
            ],
          },
        },
      },
      {
        test: /.(ico|jpg|jpeg|png|woff(2)?|eot|ttf|otf|svg|gif)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
