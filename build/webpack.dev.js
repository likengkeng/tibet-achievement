const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  cache: {
    type: 'filesystem',
  },
  output: {
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: '../dist',
    overlay: true,
    hot: true,
    stats: 'errors-only',
    compress: true, // 为每个静态文件开启 gzip compression
    port: 8000,
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|cur)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new FriendlyErrorsWebpackPlugin()],
  mode: 'development',
})
