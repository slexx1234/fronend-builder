const gulp = require('gulp');
const fs = require('fs');
const browserify = require('browserify');
const babelify = require('babelify');

module.exports = () => {
    browserify('./src/js/main.js')
        .transform(babelify.configure({
            presets: ['es2015'],
            plugins: ['transform-runtime']
        }))
        .bundle()
        .pipe(fs.createWriteStream('./dist/js/main.js'));
};
