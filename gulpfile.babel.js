import gulp from 'gulp';
import BrowserSync from 'browser-sync';
import rollup from 'gulp-rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import rucksack from 'rucksack-css';
import sourcemaps from 'gulp-sourcemaps';
import eslint from 'gulp-eslint';
import jest from'gulp-jest';

const browserSync = BrowserSync.create();

gulp.task('serve', ['core', 'sass'], () => {
  browserSync.init({
    server: './dist'
  });
  gulp.watch('./core/**/*.js', ['core']);
  gulp.watch('./core/**/*.scss', ['sass']);
  gulp.watch('dist/index.html').on('change', browserSync.reload);
});

gulp.task('core', (sync = true) => {
  gulp.src('./core/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(rollup({
      sourceMap: 'inline',
      entry: './core/index.js',
      allowRealFiles: true,
      plugins: [
        nodeResolve({ module: true }),
        commonjs({
          // non-CommonJS modules will be ignored, but you can also
          // specifically include/exclude files
          include: ['node_modules/**'],  // Default: undefined
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
          namedExports: undefined,

          // sometimes you have to leave require statements
          // unconverted. Pass an array containing the IDs
          // or a `id => boolean` function. Only use this
          // option if you know what you're doing!
          ignore: undefined
        }),
        babel({
          presets: ['es2016'],
          babelrc: false,
          plugins: ['transform-react-jsx']
        })
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
    .pipe(sync ? browserSync.stream() : null);
});

gulp.task('sass', (sync = true) => {
  const processors = [
    rucksack({
      autoprefixer: true
    })
  ];
  gulp.src('./core/css/**/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(sync ? browserSync.stream() : null);
});

gulp.task('lint:js', () => {
  gulp.src(['core/**/*.js', '!core/polyfills/**'])
    .pipe(eslint({
      configFile: './.eslintrc',
      fix: false
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('jest', function () {
  return gulp.src('core').pipe(jest({
    config: {
      "transformIgnorePatterns": [
        "<rootDir>/dist/", "<rootDir>/node_modules/"
      ],
      "automock": false
    }
  }));
});
