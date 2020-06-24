const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const { clear } = require('./clear');
const { html } = require('./html');
const { cssDev } = require('./css');
const { jsDev } = require('./js');
const { imgDev, svg } = require('./img');
const { fonts } = require('./fonts');

const path = require('../path');

const reload = browserSync.reload;

function watch() {
  browserSync.init({
    server: {
        baseDir: path.output
    }
  });

  gulp.series(clear, gulp.parallel(
    html,
    cssDev,
    jsDev,
    imgDev,
    svg,
    fonts
  ))();

  gulp.watch([
    path.input + 'pug/**/*.pug',
    path.input + 'blocks/**/*.pug'
  ], gulp.parallel(html)).on('change', reload);

  gulp.watch([
    path.input + 'sass/**/*.scss',
    path.input + 'blocks/**/*.scss'
  ], gulp.parallel(cssDev)).on('change', reload);

  gulp.watch(path.input + 'js/**/*.js', gulp.parallel(jsDev)).on('change', reload);
}

exports.watch = watch;