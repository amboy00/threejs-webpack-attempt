const path = require('path');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'build/scripts'),
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
