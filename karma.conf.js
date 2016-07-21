'use strict'

module.exports = function (config) {
  var sourcePath = './src'
  config.set({
    basePath: sourcePath,
    files: [
      'polyfills.browser.js',
      'vendor.browser.js',
      '../karma.shim.js'
    ],
    preprocessors: {
      '*.browser.js': ['webpack'],
      '../karma.shim.js': ['webpack']
    },
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      entry: {},
      output: {},
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
      }
    },
    webpackMiddleware: {
      stats: {
        progress: true,
        colors: true
      }
    },
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-webpack'
    ]
  })
}
