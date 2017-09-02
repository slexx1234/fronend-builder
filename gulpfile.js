const gulp = require('gulp');

gulp.task('build:css', require('./gulp/build/css'));
gulp.task('build:js', require('./gulp/build/js'));
gulp.task('build', ['build:css', 'build:js']);

gulp.task('minify:css', require('./gulp/minify/css'));
gulp.task('minify:js', require('./gulp/minify/js'));
gulp.task('minify:img', require('./gulp/minify/img'));
gulp.task('minify', ['minify:css', 'minify:js', 'minify:img']);

gulp.task('compress:css', require('./gulp/compress/css'));
gulp.task('compress:js', require('./gulp/compress/js'));
gulp.task('compress:img', require('./gulp/compress/img'));
gulp.task('compress', ['compress:css', 'compress:js', 'compress:img']);

gulp.task('watch:css', () => gulp.watch('./src/sass/**/*', ['build:css']));
gulp.task('watch:js', () => gulp.watch('./src/js/**/*', ['build:js']));
gulp.task('watch', ['watch:css', 'watch:js']);

gulp.task('run', ['build', 'minify', 'compress', 'watch']);

gulp.task('default', () => {
    console.log([
        '',
        '  \x1b[32;1mdefault\x1b[0m - Получение помощи',
        '',
        '  \x1b[32;1mbuild\x1b[0m - Компиляция js и css',
        '  ├───\x1b[32;1mbuild:css\x1b[0m - Компиляция css',
        '  └───\x1b[32;1mbuild:js\x1b[0m - Компиляция js',
        '',
        '  \x1b[32;1mwatch\x1b[0m - Слежение за css и js файлами',
        '  ├───\x1b[32;1mwatch:css\x1b[0m - Слежение за css файлами',
        '  └───\x1b[32;1mwatch:js\x1b[0m - Слежение за js файлами',
        '',
        '  \x1b[32;1mminify\x1b[0m - Минимизация css, js и картинок',
        '  ├───\x1b[32;1mminify:css\x1b[0m - Минимизация css',
        '  ├───\x1b[32;1mminify:js\x1b[0m - Минимизация js',
        '  └───\x1b[32;1mminify:img\x1b[0m - Минимизация картинок',
        '',
        '  \x1b[32;1mcompress\x1b[0m - Сжатие css, js и картинок',
        '  ├───\x1b[32;1mcompress:css\x1b[0m - Gzip сжатие css',
        '  ├───\x1b[32;1mcompress:js\x1b[0m - Gzip сжатие js',
        '  └───\x1b[32;1mcompress:img\x1b[0m - Webp сжатие картинок',
        '',
        '  \x1b[32;1mdev\x1b[0m - Запуск всех комманд выше',
        '',
    ].join("\n"));
});
