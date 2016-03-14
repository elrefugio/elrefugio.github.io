// the choir director
var gulp = require('gulp')

// compile sass
var sass = require('gulp-sass')

// don't die on syntax errors
var plumber = require('gulp-plumber')

// concatenate separate src files
var concat = require('gulp-concat')

// add sourcemaps to files
var sourcemaps = require('gulp-sourcemaps')

// test task
gulp.task('hello', function() {
  console.log('hello from gulp')
})


// compile css
gulp.task('css', function() {
  gulp.src('./src/css/styles.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
})

// default actions
gulp.task('default', ['css'])

// watch files for updates
gulp.task('watch', function() {
  gulp.watch('src/css/**/*.css', ['css'])
})
