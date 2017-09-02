const gulp = require('gulp');
const rename = require("gulp-rename");
const uglify = require('gulp-uglifyjs');
const plumber = require('gulp-plumber');

module.exports = () => {
    gulp.src(['./dist/js/**/*.js', '!./dist/js/**/*.min.js'])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(gulp.dest('./dist/js'));
};

