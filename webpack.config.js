const src = __dirname + "/src";
const dist = __dirname + "/public"

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: src,
  entry: "./js/index.tsx",
  output: {
    path: dist,
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
              importLoaders: 2
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css'
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    historyApiFallback: true,
    contentBase: dist,
    watchContentBase: true,
    open: true,
    openPage: "index.html",
    host: "0.0.0.0",
    port: 3000,
  }
};
