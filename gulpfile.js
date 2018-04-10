'use strict';

var gulp         = require('gulp'),
    watch        = require('gulp-watch'),
    sass         = require('gulp-sass'),
    concat       = require('gulp-concat'),
    csso         = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync'),
    gcmq         = require('gulp-group-css-media-queries'),
    sourcemaps   = require('gulp-sourcemaps'),
    rimraf       = require('rimraf');

var path = {

    build: {
        html:  'build/',
        js:    'build/js/',
        css:   'build/css/',
        img:   'build/img/',
        fonts: 'build/fonts/'
    },

    src: {
        html:  'src/*.html',
        js:    'src/js/index.js',
        style: 'src/scss/main.scss',
        img:   'src/img/**/*.*',
        fonts: 'src/fonts/*.*'
    },

    watch: {
        html:  'src/*.html',
        js:    'src/js/*.js',
        style:   'src/scss/**/*.scss',
        img:   'src/img/**/*.*',
        fonts: 'src/fonts/*.*'
    },

    clean:     'build/'
};

var config = {
    server: {
        baseDir: 'build'
    },
    notify: false
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
    gulp.src('src/js/slick.js')
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('slick:build', function () {
    gulp.src('node_modules/slick-carousel/slick/**/*.*')
        .pipe(gulp.dest('build/slick'));
});

gulp.task('style:build', function () {
    gulp.src(['node_modules/normalize.css/normalize.css',path.src.style])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(autoprefixer())
        .pipe(gcmq())
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build',
    'slick:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);