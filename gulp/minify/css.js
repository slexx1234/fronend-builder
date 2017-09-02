const gulp = require('gulp');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const plumber = require('gulp-plumber');

module.exports = () => {
    gulp.src(['./dist/css/**/*.css', '!./dist/css/**/*.min.css'])
        .pipe(plumber())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(gulp.dest('./dist/css'));
};
