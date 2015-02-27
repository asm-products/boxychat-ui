var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var open = require('gulp-open');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var port = process.env.port || 3000;
var src = './app';
var dist = './dist'

gulp.task('sass', function() {
    gulp.src(src + '/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(dist));
});

gulp.task('assets', function() {
    gulp.src(src + '/assets/**/*').pipe(gulp.dest(dist));
});
gulp.task('html', function() {
    gulp.src(src + '/index.html').pipe(gulp.dest(dist));
})
gulp.task('browserify', function() {
    browserify(src + '/js/app.jsx')
    .transform('reactify', { 'es6': true })
    .bundle()
    .pipe(source('app.jsx'))
    .pipe(rename({extname: '.js'}))
    .pipe(gulp.dest(dist))
    .pipe(buffer())
    .pipe(rename({suffix: '.min', extname: '.js'}))
    .pipe(uglify())
    .pipe(gulp.dest(dist));
});

gulp.task('connect', function() {
    connect.server({
        root: dist,
        port: port,
        livereload: true,
        middleware: function() {
            return [
              require('connect-gzip').gzip()
            ];
          }
    });
});

gulp.task('open', function(){
    setTimeout(function() {
        var options = {
            url: 'http://localhost:' + port,
        };
        gulp.src(dist + '/index.html').pipe(open('', options));
    }, 4000);
});

gulp.task('html-reload', function () {
    gulp.src(dist + '/*.html').pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src(dist + '/**/*.js').pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(dist + '/**/*.css').pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(src + '/index.html', ['html'])
    gulp.watch(dist + 'index.html', ['html-reload']);
    gulp.watch(dist + '/**/*.js', ['js']);
    gulp.watch(dist + '/**/*.css', ['css']);
    gulp.watch(src + '/**/*.scss', ['sass']);
    gulp.watch(src + '/src/**/*.js', ['browserify']);
    gulp.watch(src + '/src/**/*.jsx', ['browserify']);
    gulp.watch(src + '/src/assets/**/*', ['assets']);
});

gulp.task('default', ['html', 'browserify', 'sass', 'assets']);
gulp.task('serve', ['html', 'browserify', 'sass', 'assets', 'connect', 'watch', 'open']);
