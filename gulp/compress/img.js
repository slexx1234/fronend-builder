const gulp = require('gulp');
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');

module.exports = () => {
    gulp.src(['./dist/img/**/*.png', './dist/img/**/*.gif', './dist/img/**/*.jpg', './dist/img/**/*.jpeg'])
        .pipe(plumber())
        .pipe(webp())
        .pipe(gulp.dest('./dist/img'));
};
