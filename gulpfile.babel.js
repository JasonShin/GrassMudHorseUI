import gulp from 'gulp';
import BrowserSync from 'browser-sync';
import rollup from 'gulp-rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sourcemaps from 'gulp-sourcemaps';
import eslint from 'gulp-eslint';
import browserify from 'gulp-browserify';

const browserSync = BrowserSync.create();

gulp.task('serve', ['core'], () => {
  browserSync.init({
    server: './dist'
  });
  gulp.watch('dist/index.html').on('change', browserSync.reload);
});

gulp.task('core', () => {
  gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(rollup({
      sourceMap: 'inline',
      entry: './src/setup.js',
      plugins: [
        nodeResolve(),
        commonjs({
          // non-CommonJS modules will be ignored, but you can also
          // specifically include/exclude files
          include: 'node_modules/**',  // Default: undefined
          exclude: undefined,  // Default: undefined

          // search for files other than .js files (must already
          // be transpiled by a previous plugin!)
          extensions: [ '.js' ],  // Default: [ '.js' ]

          // if true then uses of `global` won't be dealt with by this plugin
          ignoreGlobal: false,  // Default: false

          // if false then skip sourceMap generation for CommonJS modules
          sourceMap: true,  // Default: true

          // explicitly specify unresolvable named exports
          // (see below for more details)
          namedExports: undefined,  // Default: undefined

          // sometimes you have to leave require statements
          // unconverted. Pass an array containing the IDs
          // or a `id => boolean` function. Only use this
          // option if you know what you're doing!
          ignore: undefined
        }),
        babel({
          presets: ['es2016'],
          babelrc: false
        })
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

gulp.task('babel', () => {
  gulp.src('./src/**/*.js')
    .pipe(browserify({
      transform: ['babelify']
    }))
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
