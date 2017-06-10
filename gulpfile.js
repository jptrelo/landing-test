const gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function() {
  gulp.src('./scss/*.scss')
    .pipe(compass({
      css: './css',
      sass: './scss'
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ()=>{
	gulp.watch('./scss/*.scss', ['compass']);
});