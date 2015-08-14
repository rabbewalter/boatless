'use strict';

/* Gulp settings */
// Define used tools
var gulp =         require('gulp');
var jeet =         require('jeet');
var stylus =       require('gulp-stylus');
var rename =       require('gulp-rename');
var concat =       require('gulp-concat');
var minifyCss =    require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var webserver =    require('gulp-webserver');



/* Local settings */
var $autoprefixVersion = 'last 2 versions';
var $autoprefixCascade = true; // false
var $minifyCssCompability = 'ie10'; // 'ie8'
var $stylusCompress = true; // false
var $serverBasePath = './'; // base folder from where your app is run



// CSS prefixed and minified
gulp.task('css', function () {
  gulp.src('./stylus/_main.styl')
    .pipe(stylus({
        compress: $stylusCompress,
        //use: [jeet()],
        //paths: ['source/stylus']
      }))
    .pipe(autoprefixer({
        browsers: [$autoprefixVersion],
        cascade: $autoprefixCascade
      }))
    .pipe(minifyCss({
        compatibility: $minifyCssCompability
      }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./css'))
});



// Print styles prefixed and minified
gulp.task('print', function () {
  gulp.src('./stylus/_print.styl')
    .pipe(stylus({
        compress: $stylusCompress,
        //paths: ['source/stylus']
      }))
    .pipe(autoprefixer({
        browsers: [$autoprefixVersion],
        cascade: $autoprefixCascade
      }))
    .pipe(minifyCss({
        compatibility: $minifyCssCompability
      }))
    .pipe(rename('print.css'))
    .pipe(gulp.dest('./css'))
});



// Server settings
gulp.task('server', function() {
  gulp.src($serverBasePath)
    .pipe(webserver({
      livereload: {
        enable: true,
        filter: function(fileName) {
          // exclude all source maps from livereload 
          if (fileName.match(/.map$/)) {
            return false;
          } else {
            return true;
          }
        }
      },
      directoryListing: false, // open fallback page
      fallback: './index.html',
      open: true,
    }));
});



// Gulp watch
gulp.task('watch', function () {
   gulp.watch(['./stylus/*.styl', './stylus/**/*.styl'], ['css']);
});



// Initiate default
gulp.task('default', ['css', 'print', 'server', 'watch']);

