const webpack = require('webpack');
const path = require('path');

// entryが複数ある場合の共通部分を抽出する
const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'common',
  filename: 'common.js'
});

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader?modules'}
        ]
      }
    ]
  },
  plugins: [
    extractCommons
  ]
};
