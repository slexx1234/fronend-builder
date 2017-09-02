const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = () => gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
