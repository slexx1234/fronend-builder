const gulp = require('gulp');
const gzip = require('gulp-gzip');
const plumber = require('gulp-plumber');

module.exports = () => gulp.src('./dist/js/**/*.js')
    .pipe(plumber())
    .pipe(gzip())
    .pipe(gulp.dest('./dist/js'));
