const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const sourceMaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');

/*const imagemin = require('gulp-image');
const cache = require('gulp-cache');
const cleanCSS = require('clean-css');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const del = require('del');*/

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./app/sass/**/*.sass')
  .pipe(sourceMaps.init())
  	.pipe(sass().on('error', sass.logError))
  	.pipe(autoprefixer(['last 15 versions', '> 1%'], { cascade: true }))
    .pipe(gcmq())
  .pipe(sourceMaps.write('./maps'))
  .pipe(gulp.dest('./app/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() { 
  browserSync({ 
    server: { 
      baseDir: 'app'
    },
      notify: false
  });
});

gulp.task('scripts', function() {
	return gulp.src(['./app/js/*.js', './app/libs/**/*.js'])
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('code', function() {
	return gulp.src('./app/*.html')
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function() {
  gulp.watch('./app/sass/**/*.sass', gulp.parallel('sass'));
  gulp.watch('./app/*.html', gulp.parallel('code'));
  gulp.watch(['./app/js/*.js', './app/libs/**/*.js'], gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));




