/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
'use strict';

var _ = require('lodash');
var webpack = require('webpack');
var argv = require('minimist')(process.argv.slice(2));

var DEBUG = !argv.release;

var GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  'process.env.API_LOCATION_HOST': "'" + process.env.API_LOCATION_HOST + "'",
  'process.env.API_LOCATION_SCHEME': "'" + process.env.API_LOCATION_HOST + "'",
  'process.env.API_LOCATION_PORT': "'" + process.env.API_LOCATION_HOST + "'",
  'process.env.SERVER_LOCATION_HOST': "'" + process.env.SERVER_LOCATION_HOST + "'",
  'process.env.SERVER_LOCATION_SCHEME': "'" + process.env.SERVER_LOCATION_SCHEME + "'",
  'process.env.SERVER_LOCATION_PORT': "'" + process.env.SERVER_LOCATION_PORT + "'",
  '__DEV__': DEBUG
};

//
// Common configuration chunk to be used for both
// client-side (app.js) and server-side (server.js) bundles
// -----------------------------------------------------------------------------

var config = {
  output: {
    path: './build/',
    publicPath: './',
    sourcePrefix: '  '
  },

  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? '#inline-source-map' : false,

  stats: {
    colors: true,
    reasons: DEBUG
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],

    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.gif/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
      },
      {
        test: /\.jpg/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
      },
      {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      },
      {
        test: /\.svg/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

//
// Configuration for the client-side bundle (app.js)
// -----------------------------------------------------------------------------

var appConfig = _.merge({}, config, {
  entry: [
    './src/app.js'
  ],
  output: {
    filename: 'app.js'
  },
  plugins: config.plugins.concat([
      new webpack.DefinePlugin(_.merge(GLOBALS, {'__SERVER__': false}))
    ].concat(DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ])
  )
});

var appDevConfig = _.merge({}, config, {
  entry: [
    'webpack/hot/dev-server', 
    './src/app.js'
  ],
  output: {
    path: '/build/',
    filename: 'app.js'
  },
  plugins: config.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(_.merge(GLOBALS, {'__SERVER__': false}))
    ].concat(DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ])
  )
});

var serverConfig = _.merge({}, config, {
  entry: './src/server.js',
  target: 'node',
  output: {
    filename: 'server.js'
  },
  plugins: config.plugins.concat([
      new webpack.DefinePlugin(_.merge(GLOBALS, {'__SERVER__': true}))
    ]
  )
});

module.exports = {
  appConfig: appConfig, 
  appDevConfig: appDevConfig,
  serverConfig: serverConfig
};
