'use strict';




//////////////////////////////////
//
// Gulp settings
//
// - Settings
// - Main tasks
// - Gulp tasks
//
//////////////////////////////
/* Init Gulp */
var gulp = require('gulp');
/* Init Gulp plugins */
var plugins = require('gulp-load-plugins')();
/* Set Distribution folder  */
var $dist = './dist/';
/* Set Source folder  */
var $src = './src/';
/* Browser-sync will be declared separately */
var browserSync = require('browser-sync').create();




//////////////////////////////////
//
// Local compile settings for the project
//
//////////////////////////////
/* Which prefixes to use @default: last 2 versions */
var $autoprefixVersion = 'last 2 versions';
/* CleanCSS minimum browser support */
var $minimumCssCompability = 'ie10';
/* Compress files? @default: false */
var $stylusCompress = true;
/* Base folder from where your app/site is run eg. ./dist */
var $serverBasePath = $dist;
/* Clean CSS: Enables unsafe mode by assuming BEM-like semantic stylesheets (warning, this may break your styling!) */
var $isBEM = false;
var inlinesource = require('gulp-inline-source');
/* Minimize HTML files */
var minHTML = true;




//////////////////////////////////
//
// Main Gulp tasks
//
//////////////////////////////
/*
 * Prefixed and minify the main styles
 */
gulp.task('css', function () {
  gulp.src($src + 'stylus/sources/*.styl')
    .pipe(plugins.stylus({
        compress: $stylusCompress,
        paths: [$src + 'stylus']
      }))
    .pipe(plugins.autoprefixer({
        browsers: [$autoprefixVersion],
      }))
    .pipe(plugins.cleanCss({
      compatibility: $minimumCssCompability,
      semanticmerging: $isBEM
    }))
    .pipe(gulp.dest($dist + 'css'))
});



/*
 * Include inline CSS(OR scipts) files, tags with `inline` attributes
 * dependencies: 'twig' function
 */
gulp.task('inline', ['twig'], function () {
  var options = {
        compress: false
    };

    return gulp.src([
                     $dist + '*.html',
                     $dist + '**/*.html'
                    ], { base: $dist })
        .pipe(inlinesource(options))
        .pipe(gulp.dest($dist));
});



/*
 * Minimize images
 * - consider using `pngquant` if you are using PNG -files
 */
 gulp.task('imagemin', function () {
   return gulp.src([$src + 'img/*', $src + 'img/**/*'])
       .pipe(plugins.imagemin({
           progressive: true
       }))
       .pipe(gulp.dest($dist + 'img'));
 });



 /*
  * Copy used files over
  * - please add the additional files OR exclude the ones that are not supposed
  *   to be moved; like README.md or similar
  */
gulp.task('move_static_files', function () {
  return gulp.src([
                   $src + 'browserconfig.xml',
                   $src + 'crossdomain.xml',
                   $src + 'favicon.ico',
                   $src + 'humans.txt',
                   $src + 'robots.txt'
                  ])
      .pipe(gulp.dest($dist));
});



/*
 * Compile and minimize JavaScript files
 * NOTE: vendor scripts are assumend to be minimized (these will be moved automatically)
 */
gulp.task('js', function() {
  return gulp.src([
                   $src + 'js/*.js',
                   $src + 'js/**/*.js',
                   '!./node_modules/**',
                   '!' + $src + 'js/**/modernizr**'
                  ])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.uglify().on('error', plugins.util.log))
    .pipe(gulp.dest($dist + 'js'));
});

/* Move files, dependencies: 'js' -function */
gulp.task('move_vendor_js', ['js'], function() {
  return gulp.src([$src + 'js/vendor/**'], { base: $src + 'js' })
    .pipe(gulp.dest($dist + 'js'));
});



/*
 * Compile template files (Twig)
 */
gulp.task('twig', function () {
    return gulp.src([
                     $src + 'twig/**',
                     '!' + $src + '/twig/_layouts',
                     '!' + $src + '/twig/_layouts/**',
                     '!' + $src + '/twig/**/_layouts/**',
                     '!' + $src + '/twig/_components',
                     '!' + $src + '/twig/_components/**',
                     '!' + $src + '/twig/**/_components/**'
                   ], { base: $src + 'twig' })
      .pipe(plugins.twig({
        //namespaces: { 'twig-layouts': $src + 'twig/_layouts' }
      }))
      .pipe(gulp.dest($dist));
});



/*
 * Minify HTML files
 * dependencies: 'twig' function, 'inline' function
 */
 gulp.task('HTMLMin', ['twig', 'inline'], function() {
   return gulp.src([
                    $dist + '/*.html',
                    $dist + '/**/*.html'
                   ])
     .pipe(plugins.htmlmin({
                    collapseWhitespace: minHTML
                  }))
     .pipe(gulp.dest($dist));
 });



/*
 * Server
 * Wait for the files to generate before launching the server
 */
gulp.task('browser-sync', ['HTMLMin'], function() {
   browserSync.init({
       server: {
           baseDir: $dist
       }
   });
});




//////////////////////////////////
//
// Gulp tasks
//
//////////////////////////////
/* Watch for CSS changes */
gulp.task('styles', function () {
   gulp.watch([
               $src + 'stylus/*.styl',
               $src + 'stylus/**/*.styl'
             ], ['css', 'HTMLMin']);
});

/* Watch for script changes */
gulp.task('scripts', function () {
   gulp.watch([
               $src + 'js/*.js',
               $src + 'js/**/*.js',
               '!' + $src  + '**/modernizr**',
               '!' + $src  + '**/vendor**'
              ], ['js']);
});

/* Watch for template changes */
gulp.task('template', function () {
   gulp.watch([$src + 'twig/**'],
              { base: $src + 'twig' },
              ['twig', 'inline', 'HTMLMin']);
});

/* Initiate default tasks */
gulp.task('default', [
                      'twig',
                      'css',
                      'js',
                      'move_vendor_js',
                      'move_static_files',
                      'inline',
                      'imagemin',
                      'styles',
                      'scripts',
                      'template',
                      'HTMLMin',
                      'browser-sync'
                     ]);



/* FIN */
