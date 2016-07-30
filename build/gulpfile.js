// GULPFILE.JS MAC EVERETT INSTANEWS
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// Every gulp task requires MINIMUM three requirements, 
// FIRST it's needs a source, this is where the dev version of the file is located(in your dev)
//SECOND the arguments or actions you want this task to take
// THIRD the Destination you want your file to go, this is usually in your Build folder
// for example, in your 'sass' task, you would want to put your .scss file into your dev folder
// and on the return gulp.src line have the file location for it.
// then you put in the action you want the sass task to run, so compress & rename (can break out into two pipes)
// Then you want to state the destination of this new minified & css file, which will live in your build folder

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
