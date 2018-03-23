var gulp = require('gulp');
var debug = require('gulp-debug');
var eslint = require('gulp-eslint');

// Exclude node_modules
var self = '!node_modules/**/*';

gulp.task('eslint', (done) => {
  gulp.src(['./*.js', self])
    .pipe(debug({title: 'eslint:'}))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

  done();
});

// Tasks
gulp.task('lint', gulp.series('eslint', (done) => {
  done();
}));
