import del from 'del';

import path from '../path.js';

function clear() {
  return del(path.output);
}

export { clear };
