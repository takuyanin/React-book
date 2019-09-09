const path = require('path')

const publicDir = path.join(__dirname, '/public')
module.exports = {
  entry: './src/index.js',
  output: {
    path: publicDir,
    publicPath: '/',
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
        loader: 'css-loader'
      }
    ]
  },
  devServer: {
    contentBase: publicDir
  }
}
