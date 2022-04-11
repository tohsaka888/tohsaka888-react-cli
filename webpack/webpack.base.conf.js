// 引入path,后续需要使用它将路径转换成绝对路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css单独文件


const devMode = process.env.NODE_ENV !== "production";


// 相对路径转换成绝对路径
const resolvePath = (dir) => {
  return path.resolve(__dirname, dir);
}

const baseConfig = {
  entry: resolvePath('../src/index.tsx'),
  output: {
    path: resolvePath('../dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    // 加载css, less
    rules: [
      {
        test: /\.css$/,
        // 顺序不能错, css-loader 必须在 less-loader 和 less-loader 之前
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      }, {
        test: /\.less$/,
        // 顺序不能错, css-loader 必须在 less-loader 和 less-loader 之前
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      }, {
        test: /\.jsx$/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('../public/index.html'),
      filename: 'index.html',
      title: 'react-app'
    }), new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
    })
  ],
}

module.exports = {
  resolvePath,
  baseConfig
}
