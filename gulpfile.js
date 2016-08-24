/**
 * Created by hyb on 16/8/24.
 */
var gulp = require('gulp');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower');
var connect = require('gulp-connect');
var notify = require('gulp-notify');
var paths={
    html:'./view/**/*.html',
    script:'./app/**/*.js'
};

gulp.task('bower',function(){
    return bower('./bower_components')
        .pipe(gulp.dest('./assets/lib/'))
});

gulp.task('gulp-webpack', function () {
    return gulp.src(['app/**/*.js'])
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'))
        .pipe(notify('webpack is finished!'))
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./view/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch(paths.html,['html']);
    gulp.watch(paths.script,['gulp-webpack','html']);
});

gulp.task('default', ['connect', 'watch']);