var gulp = require('gulp');
var handleErrors = require('../lib/handleErrors');
var stylesConfig = require('../config/styles');
var autoprefixer = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');

gulp.task('styles', function () {
  return gulp.src(stylesConfig.src)
    .pipe(stylus(stylesConfig.stylus))
    .pipe(autoprefixer(stylesConfig.autoprefixer))
    .on('error', handleErrors)
    .pipe(gulp.dest(stylesConfig.dest));
});
