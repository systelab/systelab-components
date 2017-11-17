const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');
const sass = require('node-sass');
const sass2 = require('gulp-sass');

const styleProcessor = (stylePath, ext, styleFile, callback) => {
	if (ext[0] === '.scss') {
		let sassObj = sass.renderSync({ file: stylePath });
		if (sassObj && sassObj['css']){
			styleFile = sassObj.css.toString('utf8');
		}
	}
	return callback(null, styleFile);
};

const OPTIONS = {
	target:           'es5',
	useRelativePaths: true,
	styleProcessor:   styleProcessor
};

gulp.task('inline-build-templates', () => {
	return gulp.src(['./src/app/systelab-components/**/*.ts', '!./src/app/systelab-components/**/**.spec.ts'])
			   .pipe(inlineNg2Template(OPTIONS))
			   .pipe(gulp.dest('./build'));

});

gulp.task('copystyles', function() {
	gulp.src('./src/app/systelab-components/styles/default-theme/sass/systelab-components.scss')
		.pipe(sass2())
		.pipe(gulp.dest('css'));
});

gulp.task('copytemplates', function() {
	gulp.src('./src/app/systelab-components/grid/abstract-grid.component.html')
		.pipe(gulp.dest('./html'));
});

gulp.task('copysass', function() {
	gulp.src([
		'./src/app/systelab-components/styles/default-theme/sass/_variables.scss',
		'./src/app/systelab-components/styles/default-theme/sass/_styleColor.scss',
		'./src/app/systelab-components/styles/default-theme/sass/_styleSheet.scss',
		'./src/app/systelab-components/styles/default-theme/sass/_mixins.scss'])
		.pipe(gulp.dest('./sass'));
});