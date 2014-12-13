var gulp = require('gulp');
var livereload = require('gulp-livereload');
var awatch = require('gulp-autowatch');
var cached = require('gulp-cached');
var header = require('gulp-header');
var footer = require('gulp-footer');
var nodemon = require('nodemon');

var paths = {
  amdify: 'client/**/*.js'
};

gulp.task('bower', function () {
  gulp.src('bower_components/**')
  .pipe(cached())
  .pipe(gulp.dest('public/vendor'));
});

gulp.task('amdify', function () {
  gulp.src(paths.amdify)
  .pipe(cached('.js'))
  .pipe(header('define(function (require, exports, module) {\n'))
  .pipe(footer('})'))
  .pipe(gulp.dest('public/amd'))
  .pipe(livereload());
});

gulp.task('watch', Object.keys(paths), function () {
  awatch(gulp, paths);
});

gulp.task('server', ['amdify', 'bower'], function (cb) {
  reloader = livereload();
  nodemon({
    script: './server.js',
    watch: './server.js',
    ext: 'js'
  });

  nodemon.once('start', cb);
  nodemon.on('start', function () {
    console.log('Server has started');
    setTimeout(function () {
      reloader.write({path: '*'});
    }, 750);
  });
  nodemon.on('quit', function () {
    console.log('Server has quit');
  });
  nodemon.on('restart', function (files) {
    console.log('Server restarted due to:', files);
  });
  return;
});

gulp.task('default', ['server', 'watch']);
