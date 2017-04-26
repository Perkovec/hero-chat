const babelify = require('babelify');
const browserify = require('browserify');
const gulp = require('gulp');
const batch = require('gulp-batch');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');
const watch = require('gulp-watch');
const source = require('vinyl-source-stream');
const vueify = require('vueify');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('gulp-buffer');

gulp.task('lint', () => gulp.src(['./src/**/*.{js,vue}'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('build:dev', ['lint'], () => browserify({ entries: './src/index.js', debug: true })
  .transform(babelify)
  .transform(vueify)
  .plugin('vueify/plugins/extract-css', {
    out: 'public/bundle.css',
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public/')));

gulp.task('run:dev', () => {
  nodemon({
    script: 'server.js',
    watch: 'server.js',
  });
});

gulp.task('default:dev', ['build:dev', 'run:dev'], () => {
  watch('src/**/*.{js,vue}', batch((events, done) => {
    runSequence(['build:dev'], done);
  }));
});
