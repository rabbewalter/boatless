'use strict';

/* Gulp settings */
var gulp =    require('gulp');
var plugins = require('gulp-load-plugins')();


/* Local settings */
var $autoprefixVersion = 'last 2 versions';
var $autoprefixCascade = true; // false
var $minifyCssCompability = 'ie10'; // 'ie8'
var $stylusCompress = true; // false
var $serverBasePath = './'; // base folder from where your app is run eg. ./app



// CSS prefixed and minified
gulp.task('css', function () {
  gulp.src('stylus/_main.styl')
    .pipe(plugins.stylus({
        compress: $stylusCompress,
        //use: [jeet()], // use if you plan on using Jeet in your project
        //paths: ['source/stylus'] // use if you plan on using Jeet in your project
      }))
    .pipe(plugins.autoprefixer({
        browsers: [$autoprefixVersion],
        cascade: $autoprefixCascade
      }))
    .pipe(plugins.minifyCss({
        compatibility: $minifyCssCompability
      }))
    .pipe(plugins.rename('main.css'))
    .pipe(gulp.dest('css'))
});



// Print styles prefixed and minified
gulp.task('print', function () {
  gulp.src('stylus/_print.styl')
    .pipe(plugins.stylus({
        compress: $stylusCompress,
        //paths: ['source/stylus']
      }))
    .pipe(plugins.autoprefixer({
        browsers: [$autoprefixVersion],
        cascade: $autoprefixCascade
      }))
    .pipe(plugins.minifyCss({
        compatibility: $minifyCssCompability
      }))
    .pipe(plugins.rename('print.css'))
    .pipe(gulp.dest('css'))
});



// JS
gulp.task('js', function() {
  return gulp.src(['js/*.js', '!./node_modules/**'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.uglify()/*.on('error', plugins.util.log)*/)
    .pipe(plugins.concat('main.min.js'))
    .pipe(gulp.dest($serverBasePath + 'js_agg'));
});


// Server settings
gulp.task('server', function() {
  gulp.src($serverBasePath)
    .pipe(plugins.webserver({
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



// Gulp watch styles changes
gulp.task('styles', function () {
   gulp.watch(['stylus/*.styl', 'stylus/**/*.styl', 'stylus/**/**/*.styl'], ['css']);
});

// Gulp watch scripts changes
gulp.task('scripts', function () {
   gulp.watch(['js/*.js', 'js/**/*.js','!**/modernizr**'], ['js']);
});


// Initiate default
gulp.task('default', ['scripts', 'css', 'print', 'server', 'styles']);
