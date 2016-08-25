var gulp = require("gulp");
var typescript = require('gulp-typescript');
var tslint = require('gulp-tslint');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var webserver = require("gulp-webserver");

var SRC = './src';
var TMP = "./.tmp/"
var APP = "main.js";
var DEST = "./dist";
var BUNDLE = "bundle.js"
var PORT = 8000;


gulp.task("copy-html", function () {
    return gulp.src(SRC + '/*.html')
        .pipe(gulp.dest(DEST));
});

gulp.task('lint-ts', function () {
    return gulp.src(SRC + '/*.ts')
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report());
});


gulp.task('browserify', ['lint-ts'], function(){
    browserify({
        basedir: '.',
        debug: false,
        entries: [SRC + '/main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)

        .bundle()

        .pipe(source(BUNDLE))

        .pipe(buffer())
        .pipe(uglify())

        .pipe(gulp.dest(DEST))
});

gulp.task('browserify:debug', ['lint-ts'], function(){
    browserify({
        basedir: '.',
        debug: true,
        entries: [SRC + '/main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)

        .bundle()

        .pipe(source(BUNDLE))

        .pipe(buffer())

        .pipe(gulp.dest(DEST))
});

gulp.task('build', ['copy-html', 'browserify'], function(){

});

gulp.task('build:debug', ['copy-html', 'browserify:debug'], function(){

});

gulp.task('watch:html', function () {
    gulp.watch('src/**/*.html', ['copy-html']);
});

gulp.task('watch:source', ['build'], function () {
    gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('watch:source:debug', ['build:debug'], function () {
    gulp.watch('src/**/*.ts', ['build:debug']);
});


var runServer = function(){
    gulp.src('./dist/')
        .pipe(webserver({
            livereload: true,
            // port: PORT,
            open: true
        }));
};

gulp.task('webserver', ['build', 'watch:html', 'watch:source'], function() {
    runServer();
});

gulp.task('webserver:debug', ['build:debug', 'watch:html', 'watch:source:debug'], function() {
    runServer();
});