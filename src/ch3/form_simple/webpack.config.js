﻿module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/out',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      },
      {
        test: /.css$/,
        loader: 'css-loader',
      }
    ],
  }
}
