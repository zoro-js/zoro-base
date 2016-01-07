var gulp = require('gulp');

require('./build/gulp/webpack');
// require('./build/gulp/karma');

gulp.task('watch', ['webpack'], function() {
    gulp.watch(['./*.js'], ['webpack']);
});

gulp.task('default', ['watch']);