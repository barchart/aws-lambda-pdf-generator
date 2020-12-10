const fs = require('fs');

const gulp = require('gulp'),
	replace = require('gulp-replace');

function getVersionFromPackage() {
	return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

const rootPath = './../../';

gulp.task('embed-version', () => {
	const version = getVersionFromPackage();

	const coverpage = gulp.src([rootPath + 'docs/_coverpage.md'])
		.pipe(replace(/(>)([0-9]+\.[0-9]+\.[0-9]+.*)(<)/g, '$1' + version + '$3'))
		.pipe(gulp.dest(rootPath + 'docs/'));

	return coverpage;
});
