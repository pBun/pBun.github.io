// Include gulp
var gulp = require('gulp');

// Include Plugins
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();

// Options
var autoprefixerSupport = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];
var paths = {
  js: [
    '_source/scripts/vendor/jquery.js',
    '_source/scripts/vendor/**/*.js',
    '_source/scripts/**/*.js'
  ],
  images: '_source/images/**/*',
  sass: '_source/sass/**/*.scss'
};

// Prepare SASS
gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(autoprefixer(autoprefixerSupport))
    .pipe(livereload(server))
    .pipe(gulp.dest('styles'));
});

// Prepare JS
gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest('scripts'));
});

// Prepare Images
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(livereload(server))
    .pipe(gulp.dest('images'));
});

// Run app (nodemon/jekyll needs to be tweaked so we can use this)
gulp.task('app', function() {
  nodemon({
    script: 'app.js'
  });
});

// Watch Files For Changes
gulp.task('watch', function() {
  server.listen(35729, function (err) {
    if (err) return console.log(err);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.sass, ['sass']);
  });
});

// Default Task
gulp.task('default', ['sass', 'js', 'images', 'watch']);
