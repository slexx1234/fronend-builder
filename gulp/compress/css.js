const gulp = require('gulp');
const gzip = require('gulp-gzip');
const plumber = require('gulp-plumber');

module.exports = () => gulp.src('./dist/css/**/*.css')
    .pipe(plumber())
    .pipe(gzip())
    .pipe(gulp.dest('./dist/css'));

