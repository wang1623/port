const path = require('path');

module.exports = {
  // where it starts
  entry: './js/main.js',
  // the output
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // how does it bundle the code
  module: {
    rules: [{
      // /\.js$/ : anything that ends with a literal dot, and the letters js, $ means the end of the file name.
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        // loader is a webpack plugin that tells it how to build our code
        loader: 'babel-loader',
        // tells loader what presets it will use.
        options: {
          presets: ['react']
        }
      }
    }]
  }
}
