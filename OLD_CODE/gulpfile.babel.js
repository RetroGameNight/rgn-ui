/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
 
'use strict'

// Include Gulp and other build automation tools and utilities
// See: https://github.com/gulpjs/gulp/blob/master/docs/API.md
import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import del from 'del'
import runSequence from 'run-sequence'
import webpack from 'webpack'
import minimist from 'minimist'
import webpackConfig from './webpack.config.js'
import { spawn } from 'child_process'

const plugins = gulpLoadPlugins()
const argv = minimist(process.argv.slice(2))

// Settings
const RELEASE = !!argv.release   // Minimize and optimize during a build?
const AUTOPREFIXER_BROWSERS = [  // https://github.com/ai/autoprefixer
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10',
]
const DEST_BASE = "build/"

const src = {}
let watch = false

// The default task
gulp.task('default', ['watch'])

// Clean output directory
gulp.task('clean', del.bind(
  null, ['.tmp', 'build/*', '!build/.git'], {dot: true}
))

// HTML
gulp.task("html", () => {
    src.html = [
      "src/*.html",
    ]
    var dest = DEST_BASE
    return gulp.src(src.html)
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest))
      .pipe(plugins.size({title: 'html'}))
})

// Static files
gulp.task('assets', () => {
  src.assets = [
    'src/assets/**',
  ]
  const dest = `${DEST_BASE}assets`
  return gulp.src(src.assets)
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest))
    .pipe(plugins.size({title: 'assets'}))
})

// Fonts
gulp.task('fonts', () => {
  src.fonts = [
    'node_modules/bootstrap/dist/fonts/**',
  ]
  const dest = `${DEST_BASE}fonts`
  return gulp.src(src.fonts)
    .pipe(gulp.dest(dest))
    .pipe(plugins.size({title: 'fonts'}))
})
// 
// CSS style sheets
gulp.task('styles', () => {
  src.styles = [
    'src/styles/**/*.{css,less}',
    'src/components/**/*.{css,less}',
  ]
  const dest = `${DEST_BASE}css/`
  return gulp.src('src/styles/bootstrap.less')
    .pipe(plugins.plumber())
    .pipe(plugins.less({
      sourceMap: !RELEASE,
      sourceMapBasepath: __dirname
    }))
    .on('error', console.error.bind(console))
    .pipe(plugins.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(plugins.csscomb())
    .pipe(plugins.if(RELEASE, plugins.minifyCss()))
    .pipe(gulp.dest(dest))
    .pipe(plugins.size({title: 'styles'}))
})

// Bundle
gulp.task('bundle', done => {
  let started = false
  const bundler = webpack([
    webpackConfig.appConfig,
    webpackConfig.serverConfig,
  ])
  function bundle(err, stats) {
    if (err) {
      throw new plugins.util.PluginError('webpack', err)
    }
    if (argv.verbose) {
      plugins.util.log('[webpack]', stats.toString({colors: true}))
    }
    if (!started) {
      started = true
      return done()
    }
  }
  if (watch) {
    bundler.watch(200, bundle)
  } else {
    bundler.run(bundle)
  }
})

gulp.task("webpack-dev-server", done => {
    // Start a webpack-dev-server
    const compiler = webpack(webpackConfig.appDevConfig)
    const WebpackDevServer = require("webpack-dev-server")
    const server = new WebpackDevServer(compiler, {
      contentBase: './build',
      hot: true,
      historyApiFallback: true,
      stats: { colors: true },
    })
    server.listen(8081, "localhost", err => {
        if(err) throw new plugins.util.PluginError("webpack-dev-server", err)
        // Server listening
        plugins.util.log("[webpack-dev-server]", "http://localhost:8081/webpack-dev-server/index.html")
        done()
    })
})

// Build the app from source code
gulp.task('build:static', done => {
  runSequence(['fonts', 'assets', 'styles', 'html'], done)
})

// Build the app from source code
gulp.task('build', done => {
  runSequence('clean', 'build:static', 'bundle')
})

gulp.task('watch', () => {
  // Store current process if any
  var gulpProcess
  
  gulp.watch('gulpfile.babel.js', spawnChildren)
  gulp.watch('webpack.config.js', spawnChildren)
  gulp.watch('package.json', spawnChildren)
  gulp.watch('babelrc', spawnChildren)
  gulp.watch('.eslintrc', spawnChildren)
  gulp.watch('preprocessor.js', spawnChildren)

  // Comment the line below if you start your server by yourslef anywhere else
  spawnChildren()

  function spawnChildren(e) {
    if(gulpProcess) {
        gulpProcess.kill()
    }

    gulpProcess = spawn('gulp', ['watch:server'], {stdio: 'inherit'})
  }
})

// Build and start watching for modifications
gulp.task('watch:server', done => {
  runSequence('build:static', 'webpack-dev-server', () => {
    gulp.watch(src.fonts, ['fonts'])
    gulp.watch(src.assets, ['assets'])
    gulp.watch(src.styles, ['styles'])
    gulp.watch(src.html, ['html'])
    done()
  })
})
