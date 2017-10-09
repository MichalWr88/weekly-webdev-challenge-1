var gulp = require('gulp');
var browserSync = require('browser-sync');

/*-------------------------------------------------------*/
var config = {
    app: './',
    cssin: './css/**/*.css',
    jsin: './js/**/*.js',
    htmlin: './*.html',

};

/*--------------------------------------------------------*/
gulp.task('reload', function() {
    browserSync.reload();
});


/*odpalenie gulpa*/
gulp.task('serve', function() {
    browserSync({
        server: config.app
    })
});


/*-----------------------------------------------------------------*/
gulp.watch([config.htmlin,config.cssin],['reload']);





gulp.task('default', ['serve'], function() {});