// 定义依赖项
var gulp = require('gulp'), // 引入Gulp
    minifycss = require('gulp-minify-css'), // css压缩
    uglify = require('gulp-uglify'), // js压缩
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    connect = require('gulp-connect'), //webserver
    less = require('gulp-less'); //less2css

// webserver
gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});
// less2css
gulp.task('less2css', function() {
    gulp.src('less/index.less')
        .pipe(less())
        .pipe(gulp.dest('less'));
});
// css
gulp.task('minifycss', function() {
    return gulp.src('less/index.css') //压缩的文件
        .pipe(gulp.dest('less')) //输出文件夹
        .pipe(rename({ suffix: '.min' })) //rename压缩后的文件名
        .pipe(minifycss()) //执行压缩
        .pipe(gulp.dest('minified/css')); //输出
});
// js
gulp.task('minifyjs', function() {
    return gulp.src('js/*.js')
        .pipe(concat('main.js')) //合并所有js到main.js
        .pipe(gulp.dest('js')) //输出main.js到文件夹
        .pipe(rename({ suffix: '.min' })) //rename压缩后的文件名
        .pipe(uglify()) //压缩
        .pipe(gulp.dest('minified/js')); //输出
});
gulp.task('clean', function(cb) {
    del(['minified/css', 'minified/js'], cb)
});
// 定义 watch 任务
gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less2css']);
    gulp.watch('less/*.css', ['minifycss']);
    gulp.watch('js/*.js', ['minifyjs']);
});
// 定义默认任务
gulp.task('default', function() {
    gulp.run('less2css', 'minifycss', 'minifyjs', 'webserver', 'watch')
});
