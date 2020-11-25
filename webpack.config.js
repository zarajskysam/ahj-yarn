const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader, 'css-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
            },
        },
        {
            test: /\.ico$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.ico',
      }),
      new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    ],
  };