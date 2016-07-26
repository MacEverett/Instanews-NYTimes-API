// GULPFILE.JS MAC EVERETT INSTANEWS
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('default', ['uglify'], function());
      // Watch Tasks
      gulp.watch('./src/**/*.js',['uglify']);
      gulp.watch('./src/**/*.scss',['sass']);

      gulp.watch(['./build/**/*.*', 'index.html', 'style.scss', 'main.js']).on('change');

gulp.task('sass', function(){
  return gulp.src('./src/**/*.scss')
     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
     .pipe(gulp.dest('./build'));
});

gulp.task('uglify', function(){
 gulp.src('./src/**/*.js') // What files do we want gulp to consume?
     .pipe(uglify()) // Call the uglify function on these files
     .pipe(gulp.dest('./build')); // Where do we put the result?
});
