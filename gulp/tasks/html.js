const gulp = require('gulp');
const pug = require('gulp-pug'); 

const path = require('../path');

function html() {
  return gulp.src(path.input + 'pug/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.output));
}

exports.html = html;