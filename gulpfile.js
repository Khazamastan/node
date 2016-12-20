var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');


var paths = {
  scripts: ['app/*.js']
};

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  return del(['build/src']);
});


gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with sourcemaps all the way down 
  return gulp.src(paths.scripts)
	.pipe(uglify().on('error', function(e){
            console.log(e);
     }))
	.pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/src/'));
});

gulp.task('watch',['clean','scripts'], function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch']);
