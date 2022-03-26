import gulp from 'gulp';

import { clear } from './gulp/tasks/clear.js';
import { htmlDev, htmlBuild } from './gulp/tasks/html.js';
import { cssDev, cssBuild } from './gulp/tasks/css.js';
import { jsDev, jsBuild } from './gulp/tasks/js.js';
import { imgDev, imgBuild, sprite } from './gulp/tasks/img.js';
import { fonts } from './gulp/tasks/fonts.js';
import { assets } from './gulp/tasks/assets.js';
import { serve } from './gulp/tasks/serve.js';
import { watch } from './gulp/tasks/watch.js';

const dev = gulp.series(
  clear,
  gulp.parallel(htmlDev, cssDev, jsDev, imgDev, sprite, fonts, assets)
);

const build = gulp.series(
  clear,
  gulp.parallel(htmlBuild, cssBuild, jsBuild, imgBuild, sprite, fonts, assets)
);

export {
  dev,
  build,
  clear,
  htmlBuild,
  cssDev,
  cssBuild,
  jsDev,
  jsBuild,
  imgDev,
  imgBuild,
  sprite,
  fonts,
  assets,
  serve,
  watch,
};

export default gulp.series(dev, gulp.parallel(serve, watch));
