const gulp = require('gulp');

const path = require('./gulp/path');

const { clear } = require('./gulp/tasks/clear');
const { html } = require('./gulp/tasks/html');
const { cssDev, cssBuild } = require('./gulp/tasks/css');
const { jsDev, jsBuild } = require('./gulp/tasks/js');
const { imgDev, imgBuild, svg } = require('./gulp/tasks/img');
const { fonts } = require('./gulp/tasks/fonts');
const { watch } = require('./gulp/tasks/watch');


module.exports = {
  clear,
  html,
  cssDev,
  cssBuild,
  jsDev,
  jsBuild,
  imgDev,
  imgBuild,
  svg,
  fonts,
  watch,
  dev: gulp.series(clear, gulp.parallel(
    html,
    cssDev,
    jsDev,
    imgDev,
    svg,
    fonts
  )),
  build: gulp.series(clear, gulp.parallel(
    html,
    cssBuild,
    jsBuild,
    imgBuild,
    svg,
    fonts
  )),
};