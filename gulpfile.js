/*
 * Retro Game Night
 * Copyright (c) 2015 Sasha Fahrenkopf, Cameron White
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
 
'use strict';

// Include Gulp and other build automation tools and utilities
// See: https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var argv = require('minimist')(process.argv.slice(2));
var webpackConfig = require('./webpack.config.js');
var spawn = require('child_process').spawn;

// Settings
var RELEASE = !!argv.release;                 // Minimize and optimize during a build?
var AUTOPREFIXER_BROWSERS = [                 // https://github.com/ai/autoprefixer
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];
var DEST_BASE = "build/"

var src = {};
var watch = false;
var browserSync = require('browser-sync');

// The default task
gulp.task('default', ['watch']);

// Clean output directory
gulp.task('clean', del.bind(
  null, ['.tmp', 'build/*', '!build/.git'], {dot: true}
));

// HTML
gulp.task("html", function() {
    src.html = [
      "src/*.html"
    ]
    var dest = DEST_BASE
    return gulp.src(src.html)
      .pipe($.changed(dest))
      .pipe(gulp.dest(dest))
      .pipe($.size({title: 'html'}));
});

// Static files
gulp.task('assets', function() {
  src.assets = [
    'src/assets/**'
  ];
  var dest = DEST_BASE + '/assets'
  return gulp.src(src.assets)
    .pipe($.changed(dest))
    .pipe(gulp.dest(dest))
    .pipe($.size({title: 'assets'}));
});

// Fonts
gulp.task('fonts', function() {
  src.fonts = [
    'node_modules/bootstrap/dist/fonts/**'
  ]
  var dest = DEST_BASE + 'fonts/'
  return gulp.src(src.fonts)
    .pipe(gulp.dest(dest))
    .pipe($.size({title: 'fonts'}));
});

// CSS style sheets
gulp.task('styles', function() {
  src.styles = [
    'src/styles/**/*.{css,less}',
    'src/components/**/*.{css,less}',
  ];
  var dest = DEST_BASE + 'css/'
  return gulp.src('src/styles/bootstrap.less')
    .pipe($.plumber())
    .pipe($.less({
      sourceMap: !RELEASE,
      sourceMapBasepath: __dirname
    }))
    .on('error', console.error.bind(console))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.csscomb())
    .pipe($.if(RELEASE, $.minifyCss()))
    .pipe(gulp.dest(dest))
    .pipe($.size({title: 'styles'}));
});

// Bundle
gulp.task('bundle', function(done) {
  var started = false;
  var bundler = webpack([
    webpackConfig.appConfig,
    webpackConfig.serverConfig
  ]);
  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }
    if (argv.verbose) {
      $.util.log('[webpack]', stats.toString({colors: true}));
    }
    if (!started) {
      started = true;
      return done();
    }
  }
  if (watch) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});

gulp.task("webpack-dev-server", function(done) {
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfig.appDevConfig);
    var WebpackDevServer = require("webpack-dev-server");
    var server = new WebpackDevServer(compiler, {
      contentBase: './build',
      hot: true,
      historyApiFallback: true,
      stats: { colors: true }
    })
    server.listen(8081, "localhost", function(err) {
        if(err) throw new $.util.PluginError("webpack-dev-server", err);
        // Server listening
        $.util.log("[webpack-dev-server]", "http://localhost:8081/webpack-dev-server/index.html");
        done()
    });
});


// Build the app from source code
gulp.task('build:static', function(done) {
  runSequence(['fonts', 'assets', 'styles', 'html'], done);
});

// Build the app from source code
gulp.task('build', function(done) {
  runSequence('clean', 'build:static', 'bundle')
})

gulp.task('watch', function() {
  // Store current process if any
  var gulpProcess;
  
  gulp.watch('gulpfile.js', spawnChildren);
  gulp.watch('webpack.config.js', spawnChildren);
  gulp.watch('package.json', spawnChildren);
  gulp.watch('babelrc', spawnChildren);
  gulp.watch('.eslintrc', spawnChildren);
  gulp.watch('preprocessor.js', spawnChildren);

  // Comment the line below if you start your server by yourslef anywhere else
  spawnChildren();

  function spawnChildren(e) {
    if(gulpProcess) {
        gulpProcess.kill(); 
    }

    gulpProcess = spawn('gulp', ['watch:server'], {stdio: 'inherit'});
  }
});

// Build and start watching for modifications
gulp.task('watch:server', function(done) {
  runSequence('build:static', 'webpack-dev-server', function() {
    gulp.watch(src.fonts, ['fonts']);
    gulp.watch(src.assets, ['assets']);
    gulp.watch(src.styles, ['styles']);
    gulp.watch(src.html, ['html']);
    done();
  });
});
