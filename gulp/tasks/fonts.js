const gulp = require('gulp');

const path = require('../path');

function fonts() {
  return gulp.src(path.input + 'fonts/*.*')
    .pipe(gulp.dest(path.output + 'fonts'));
}

exports.fonts = fonts;