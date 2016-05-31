var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function(){
	console.log('Louise is a mushroom princess!');
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }

  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js', 'images/**/*.png'], {cwd: 'app'}, reload);
});

