const gulp = require('gulp');
const webpack = require('webpack-stream');

const path = require('../path');

function jsDev() {
  return gulp.src(path.input + 'js/script.js')
    .pipe(webpack({
      mode: 'development',
      devtool: 'inline-source-map',
      output: {
        filename: 'script.js'
      },  
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(path.output + 'js'));
}

function jsBuild() {
  return gulp.src(path.input + 'js/script.js')
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(path.output + 'js'));
}

exports.jsDev = jsDev;
exports.jsBuild = jsBuild;