import browserSync from 'browser-sync';

import path from '../path.js';

function serve() {
  browserSync.init({
    server: {
      baseDir: path.output,
    },
  });
}

export { serve };
