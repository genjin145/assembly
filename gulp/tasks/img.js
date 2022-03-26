import gulp from 'gulp';
import browserSync from 'browser-sync';
import svgSprite from 'gulp-svg-sprite';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';

import path from '../path.js';

function imgDev() {
  return gulp
    .src([
      `${path.input}${path.imgFolder}**/*.*`,
      `!${path.input}${path.imgFolder}sprite/*.svg`,
    ])
    .pipe(gulp.dest(path.output + path.imgFolder))
    .pipe(browserSync.stream({ once: true }));
}

function imgBuild() {
  return gulp
    .src([
      `${path.input}${path.imgFolder}**/*.*`,
      `!${path.input}${path.imgFolder}sprite/*.svg`,
    ])
    .pipe(
      imagemin(
        [
          gifsicle({ interlaced: true }),
          mozjpeg({ quality: 85, progressive: true }),
          optipng({ optimizationLevel: 5 }),
          svgo({
            plugins: [
              { name: 'removeViewBox', active: true },
              { name: 'cleanupIDs', active: false },
            ],
          }),
        ],
        { verbose: true }
      )
    )
    .pipe(gulp.dest(path.output + path.imgFolder));
}

function sprite() {
  return gulp
    .src(`${path.input}${path.imgFolder}sprite/*.svg`)
    .pipe(
      imagemin([
        svgo({
          plugins: [
            { name: 'removeViewBox', active: true },
            { name: 'cleanupIDs', active: false },
            { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
          ],
        }),
      ])
    )
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg',
          },
        },
      })
    )
    .pipe(gulp.dest(`${path.output}${path.imgFolder}sprite`))
    .pipe(browserSync.stream({ once: true }));
}

export { imgDev, imgBuild, sprite };
