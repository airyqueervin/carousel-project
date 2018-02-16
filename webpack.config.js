var path = require('path');
var SRC_DIR = path.join(__dirname, '/src/client');
var DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};