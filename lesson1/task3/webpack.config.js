const HtmlWebpackPlugins = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"]
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugins({
      template: './src/index.html'
    })
  ]
};