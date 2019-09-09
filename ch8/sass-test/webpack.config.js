const HtmlWebPackPlugin = require('html-webpack-plugin')
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //       options: { minimize: true }
      //     }
      //   ]
      // },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          // loader: 'file-loader',
          options: {
            limit: 8192,
            name: './public/image1.jpg'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      // filename: './index.html'
    })
  ]
}
