var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/built'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/tech.handlebars',
    })
  ],
  resolve:{
    extensions:['.js','.jsx']
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:['babel-loader'],
        exclude:/node_modules/
      },
      {
        test:/\.handlebars$/,
        use:'handlebars-loader'
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
         test: /\.(png|svg|jpg|gif|jpeg)$/,
         use: [
           'file-loader',
         ],
      }

    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'built'),
    compress: true,
    port: 3000
  },
 
};