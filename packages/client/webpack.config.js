const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: 'index_bundle.js'
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true, // this prevents the default browser full page refresh on form submission and link change
    port: 4000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};