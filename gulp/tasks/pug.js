const plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    frontMatter = require('gulp-front-matter'),
    cached = require('gulp-cached');

module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./src/pug/*.pug')
            .pipe(plumber())
            .pipe(frontMatter({ property: 'data' }))
            .pipe(pug({
                pretty: true
            }))
            .pipe(plumber.stop())
            .pipe(cached('pug'))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
