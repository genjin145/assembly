import gulp from 'gulp';
import browserSync from 'browser-sync';
import pug from 'gulp-pug';

import path from '../path.js';

function htmlDev() {
  return gulp
    .src(path.input + 'pages/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.stream({ once: true }));
}

function htmlBuild() {
  return gulp
    .src(path.input + 'pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest(path.output))
    .pipe(browserSync.stream({ once: true }));
}

export { htmlDev, htmlBuild };
