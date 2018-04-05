/* 
  Note: this simple webpack configuration is for a development
  environment - don't use this directly for production. 
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.jsx',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  devtool: 'cheap-module-source-map',
  
  devServer: {
    historyApiFallback: true // enables reloads of routed pages
  },
  
  module: {
    rules: [
      {
        enforce: 'pre', // lint files before they are transformed, config in .eslintrc.json
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader' // config in .babelrc
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000' // will insert a data URI if filesize < 10kb otherwise uses file-loader
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    })
  ],
  
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  }
};

module.exports = config;