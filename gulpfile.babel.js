import gulp from 'gulp';
import BrowserSync from 'browser-sync';
// import sass from 'gulp-sass';
import eslint from 'gulp-eslint';

const browserSync = BrowserSync.create();

gulp.task('serve', [], () => {
  browserSync.init({
    server: './dist'
  });
  gulp.watch('dist/index.html').on('change', browserSync.reload);
});

gulp.task('babel', () => {
});

gulp.task('sass', () => {
});

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint('./.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
