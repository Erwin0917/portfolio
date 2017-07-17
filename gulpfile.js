'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

  
 

gulp.task('sass', function () {
  return gulp.src('./css/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('comp', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('./js/min/')
    ],
    cb
  );
});
 
gulp.task('watch', function () {
  gulp.watch('./css/sass/**/*.scss', ['sass']);
});



