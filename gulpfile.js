const gulp = require('gulp');

const path = require('./gulp/path');

const { clear } = require('./gulp/tasks/clear');
const { html } = require('./gulp/tasks/html');
const { cssDev, cssBuild } = require('./gulp/tasks/css');
const { jsDev, jsBuild } = require('./gulp/tasks/js');
const { imgDev, imgBuild, svg } = require('./gulp/tasks/img');
const { fonts } = require('./gulp/tasks/fonts');
const { serve } = require('./gulp/tasks/serve');
const { watch } = require('./gulp/tasks/watch');

function dev() {
  return new Promise(gulp.series(
    clear,
    gulp.parallel(
      html,
      cssDev,
      jsDev,
      imgDev,
      svg,
      fonts
    )
  ));
}

function build() {
  return new Promise(gulp.series(
    clear,
    gulp.parallel(
      html,
      cssBuild,
      jsBuild,
      imgBuild,
      svg,
      fonts
    )
  ));
}

exports.clear = clear;
exports.html = html;
exports.cssDev = cssDev;
exports.cssBuild = cssBuild;
exports.jsDev = jsDev;
exports.jsBuild = jsBuild;
exports.imgDev = imgDev;
exports.imgBuild = imgBuild;
exports.svg = svg;
exports.fonts = fonts;
exports.serve = serve;
exports.watch = watch;

exports.dev = dev;
exports.build = build;

exports.default = gulp.series(
  dev,
  gulp.parallel(serve, watch)
);