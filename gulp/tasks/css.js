import gulp from 'gulp';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

import path from '../path.js';

const sass = gulpSass(dartSass);

function cssDev() {
  return gulp
    .src(path.input + 'sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.output + 'css'))
    .pipe(browserSync.stream());
}

function cssBuild() {
  return gulp
    .src(path.input + 'sass/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(path.output + 'css'));
}

export { cssDev, cssBuild };
