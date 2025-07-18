import gulp from 'gulp';

gulp.task('copytemplates', function (done) {
	gulp.src([
		'./projects/systelab-components/src/lib/grid/abstract-grid.component.html',
		'./projects/systelab-components/src/lib/combobox/abstract-combobox.component.html',
		'./projects/systelab-components/src/lib/combobox/autocomplete/autocomplete-combobox.component.html',
		'./projects/systelab-components/src/lib/listbox/abstract-listbox.component.html',
		'./projects/systelab-components/src/lib/tree/abstract-tree.component.html',
		'./projects/systelab-components/src/lib/searcher/abstract-searcher.component.html',
		'./projects/systelab-components/src/lib/searcher/searcher.dialog.component.html',
		'./projects/systelab-components/src/lib/sortable-list/abstract-sortable-list.component.html',
		'./projects/systelab-components/src/lib/add-remove-list/abstract-add-remove-list.component.html',
		'./projects/systelab-components/src/lib/datepicker/datepicker.component.html',
		'./projects/systelab-components/src/lib/datepicker/datepicker-time.component.html',
		'./projects/systelab-components/src/lib/searcher/abstract-generic-searcher.component.html'
	])
		.pipe(gulp.dest('./dist/systelab-components/html'));
	done();


});

gulp.task('copysass', function(done) {
	gulp.src([
		'./projects/systelab-components/src/lib/sass/**/*.scss'])
		.pipe(gulp.dest('./dist/systelab-components/sass'));
	done();
});

gulp.task('copyicons', function(done) {
	gulp.src([
		'./icons/*'])
		.pipe(gulp.dest('./dist/systelab-components/icons'));
	done();
});

