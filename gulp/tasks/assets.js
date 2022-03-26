import gulp from 'gulp';
import browserSync from 'browser-sync';

import path from '../path.js';

function assets() {
  return gulp
    .src([`${path.input}assets/**/*.*`, `!${path.input}${path.imgFolder}**/*.*`])
    .pipe(gulp.dest(path.output + 'assets'))
    .pipe(browserSync.stream({ once: true }));
}

export { assets };
