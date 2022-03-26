import gulp from 'gulp';

import { htmlDev } from './html.js';
import { cssDev } from './css.js';
import { jsDev } from './js.js';
import { imgDev, sprite } from './img.js';
import { fonts } from './fonts.js';

import path from '../path.js';

function watch() {
  gulp.watch(
    [
      path.input + 'pug/**/*.pug',
      path.input + 'blocks/**/*.pug',
      path.input + 'pages/**/*.pug',
      path.input + 'layouts/**/*.pug',
    ],
    gulp.series(htmlDev)
  );

  gulp.watch(
    [path.input + 'sass/**/*.scss', path.input + 'blocks/**/*.scss'],
    gulp.series(cssDev)
  );

  gulp.watch(
    [path.input + 'js/**/*.js', path.input + 'blocks/**/*.js'],
    gulp.series(jsDev)
  );

  gulp.watch(path.input + 'img/**/*.*', gulp.parallel(imgDev, sprite));

  gulp.watch(path.input + 'fonts/**/*.*', gulp.series(fonts));
}

export { watch };
