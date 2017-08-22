var gulp = require('gulp');
var handleErrors = require('../lib/handleErrors');
var scriptsConfig = require('../config/scripts');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
  return gulp.src(scriptsConfig.src)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(scriptsConfig.dest));
});
