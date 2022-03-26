import gulp from 'gulp';
import browserSync from 'browser-sync';

import path from '../path.js';

function fonts() {
  return gulp
    .src(path.input + 'fonts/**/*.*')
    .pipe(gulp.dest(path.output + 'fonts'))
    .pipe(browserSync.stream({ once: true }));
}

export { fonts };
