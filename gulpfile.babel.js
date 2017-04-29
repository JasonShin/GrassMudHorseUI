import gulp from 'gulp';
import BrowserSync from 'browser-sync';
import babel from 'gulp-babel'
// import sass from 'gulp-sass';
import eslint from 'gulp-eslint';

const browserSync = BrowserSync.create();

gulp.task('serve', ['babel'], () => {
  browserSync.init({
    server: './dist'
  });
  gulp.watch('dist/index.html').on('change', browserSync.reload);
});

gulp.task('babel', () => {
  gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', () => {
});

gulp.task('lint', () => {
  gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint('./.eslintrc'))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
