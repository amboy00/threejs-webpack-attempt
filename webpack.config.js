const path = require('path');
const SRC_PATH = path.resolve(__dirname, 'build/scripts');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: SRC_PATH,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/scripts')
        ],
        loader: 'babel-loader',
        query: {
          compact: true,
          presets: [
            ['es2015', {modules: false}]
          ]
        }
      }
    ]
  }
};
