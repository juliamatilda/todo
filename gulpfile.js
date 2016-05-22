'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('normalize', function(){
  gulp.src(['bower_components/normalize-css/normalize.css'])
  .pipe(gulp.dest('stylesheets/lib/'));
});

gulp.task('bootstrap-css', function(){
  gulp.src(['bower_components/bootstrap-css/css/bootstrap.min.css'])
  .pipe(gulp.dest('stylesheets/lib/'));
});



gulp.task('sass', function(){
   gulp.src(['stylesheets/main.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('stylesheets/'))
  });

gulp.task('jquery', function(){
  gulp.src(['bower_components/jquery/dist/jquery.min.js'])
  .pipe(gulp.dest('js/lib/'));
});


gulp.task('watch', function() {
  gulp.watch('stylesheets/**/*.scss', ['sass']);
});


gulp.task('default', ['normalize', 'bootstrap-css', 'sass', 'jquery','watch']);
