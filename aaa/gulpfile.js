// 引入 gulp及组件
var gulp=require('gulp'),  
    minifycss=require('gulp-minify-css'),  
    uglify=require('gulp-uglify'),   
    html=require('gulp-htmlmin'),   
 gulp.task('css', function() {
    gulp.src('src/css/*.css')
         .pipe(minifycss())
         .pipe(gulp.dest('dist/css'))
 });
 gulp.task('js', function() {
    gulp.src('src/css/*.js')
         .pipe(uglify())
         .pipe(gulp.dest('dist/js'))
 });
 gulp.task('html', function() {
    gulp.src('src/css/*.css')
         .pipe(html())
         .pipe(gulp.dest('dist/html'))
 });


48 gulp.task('default', ['css','html','js']);