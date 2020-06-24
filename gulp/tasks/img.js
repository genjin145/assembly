const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const imagemin = require('gulp-imagemin');

const path = require('../path');

function imgDev() {
  return gulp.src([
      path.input + 'img/**/*.*',
      '!' + path.input + 'img/svg/*.svg'
    ])
    .pipe(gulp.dest(path.output + 'img'));
}

function imgBuild() {
  return gulp.src([
      path.input + 'img/**/*.*',
      '!' + path.input + 'img/svg/*.svg'
    ])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 85, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(path.output + 'img'));
}

function svg() {
  return gulp.src(path.input + 'img/svg/*.svg')
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false},
          {removeAttrs: {attrs: '(stroke|fill)'}}
        ]
      })
    ]))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "sprite.svg"
        }
      }
    }))
    .pipe(gulp.dest(path.output + 'img/svg'));
}

exports.imgDev = imgDev;
exports.imgBuild = imgBuild;
exports.svg = svg;