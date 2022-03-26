import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
import pathSrc from 'path';
import { fileURLToPath } from 'url';

import path from '../path.js';

const __dirname = pathSrc.dirname(fileURLToPath(import.meta.url));

function jsDev() {
  return gulp
    .src(path.input + 'js/*.js')
    .pipe(
      webpack({
        mode: 'development',
        devtool: 'inline-source-map',
        context: pathSrc.resolve(__dirname, '../../src/js/'),
        entry: {
          script: './main.js',
        },
        output: {
          filename: '[name].js',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(path.output + 'js'))
    .pipe(browserSync.stream({ once: true }));
}

function jsBuild() {
  return gulp
    .src(path.input + 'js/*.js')
    .pipe(
      webpack({
        mode: 'production',
        context: pathSrc.resolve(__dirname, '../../src/js/'),
        entry: {
          script: './main.js',
        },
        output: {
          filename: '[name].js',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(path.output + 'js'));
}

export { jsDev, jsBuild };
