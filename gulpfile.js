const gulp    = require('gulp')
const connect = require('gulp-connect')

gulp.task('serve', async () => {
	connect.server({
		root: './',
		livereload: true
	})
})