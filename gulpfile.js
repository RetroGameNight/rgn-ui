"use strict";

var gulp = require("gulp");
var gutil = require("gulp-util");
var del = require("del");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

// Load plugins
var $ = require("gulp-load-plugins")();

var buildConfig = require("./webpack.config");

// HTML
gulp.task("html", function() {
    return gulp.src("app/*.html")
        .pipe($.useref())
        .pipe(gulp.dest("dist"))
        .pipe($.size());
});


// Clean
gulp.task("clean", function(cb) {
    $.cache.clearAll();
    cb(del.sync(["dist/styles", "dist/scripts", "dist/images"]));
});

gulp.task("json", function() {
    gulp.src("app/scripts/json/**/*.json", {
            base: "app/scripts"
        })
        .pipe(gulp.dest("dist/scripts/"));
});

// Robots.txt and favicon.ico
gulp.task("extras", function() {
    return gulp.src(["app/*.txt", "app/*.ico"])
        .pipe(gulp.dest("dist/"))
        .pipe($.size());
});

gulp.task("webpack:build", ["html", "json", "extras"], function(done) {
    // run webpack
    webpack(buildConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        done();
    });
});

gulp.task("webpack:watch", ["webpack:build"], function(done) {
    // Start a webpack-dev-server
    var compiler = webpack(buildConfig);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/dist");

        // keep the server alive or continue?
        // callback();
    });
});

// Default task
gulp.task("default", ["clean", "build", "jest"  ]);
