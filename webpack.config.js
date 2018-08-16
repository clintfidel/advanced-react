const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/client/index.js', 'babel-polyfill'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  }
};
