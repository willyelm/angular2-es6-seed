const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

var outputPath = path.resolve(__dirname, 'dist')
var sourcePath = path.resolve(__dirname, 'src')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProduction ? 'source-map' : 'eval',
  cache: true,
  context: sourcePath,
  entry: {
    'polyfills': path.join(sourcePath, 'polyfills.browser.js'),
    'vendor': path.join(sourcePath, 'vendor.browser.js'),
    'main': path.join(sourcePath, 'main.browser.js')
  },
  output: {
    path: outputPath,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map'
    // chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-decorators-legacy']
      }
    }, {
      test: /\.(html|css)$/,
      loader: 'raw'
    }]
  },
  resolve: {
    root: [sourcePath],
    modules: [
      'node_modules',
      sourcePath
    ]
  },
  devServer: {
    contentBase: outputPath,
    outputPath: outputPath
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills'],
      minChunks: Infinity
    }),
    new CopyWebpackPlugin([{
      from: 'index.html'
    }, {
      from: 'main.css'
    }]),
    new webpack.NoErrorsPlugin()
  ]
}
