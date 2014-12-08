'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    merge = require('merge-stream'),
    runSequence = require('run-sequence'),
    p = {
      vendor: {
        css: [
          './node_modules/bootstrap/dist/css/bootstrap.min.css',
          './node_modules/bootstrap/dist/css/bootstrap.css.map'
        ],
        fonts: './node_modules/bootstrap/dist/fonts/*'
      },
      src: './src',
      jsx: './src/scripts/app.jsx',
      less: './src/styles/main.less',
      html: './src/index.html',
      bundle: 'app.js',
      dist: 'dist',
      distJs: 'dist/js',
      distCss: 'dist/css',
      distFonts: 'dist/fonts'
    };

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './dist'
    }
  })
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify(p.jsx, watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(p.bundle))
      .pipe(gulp.dest(p.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(reactify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  browserify(p.jsx)
    .transform(reactify)
    .bundle()
    .pipe(source(p.bundle))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(p.distJs));
});

gulp.task('statics', function() {
  return merge(
    gulp.src(p.html)
    .pipe(gulp.dest(p.dist)),
    gulp.src(p.vendor.css)
      .pipe(gulp.dest(p.distCss)),
    gulp.src(p.vendor.fonts)
      .pipe(gulp.dest(p.distFonts))
  )
  .pipe(reload({stream: true}));
});

gulp.task('styles', function() {
  return gulp.src(p.less)
    .pipe(changed(p.distCss))
    .pipe(less({errLogToConsole: true}))
    .on('error', notify.onError())
    .pipe(autoprefixer('last 1 version'))
    .pipe(csso())
    .pipe(gulp.dest(p.distCss))
    .pipe(reload({stream: true}));
});

gulp.task('watchTask', function() {
  gulp.watch(p.less, ['styles']);
  gulp.watch(p.html, ['statics']);
});

gulp.task('watch', function(callback) {
  runSequence('clean', 'watchTask', 'statics', 'styles', 'browserSync', 'watchify', callback);
});

gulp.task('build', function(callback) {
  process.env.NODE_ENV = 'production';
  runSequence('clean', ['browserify', 'statics', 'styles'], callback);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});
