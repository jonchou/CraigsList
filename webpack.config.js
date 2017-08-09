const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: ['./client/js/index.jsx'],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, '/client/public'),
    filename: 'bundle.js',
    publicPath: '/client/public'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
