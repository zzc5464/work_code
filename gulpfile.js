/**
 * Created by alan on 2017/10/26.
 */
var gulp = require('gulp');                                  //- 主文件
var concat = require('gulp-concat');                         //- 多个文件合并为一个文件
var rev = require('gulp-rev');                               //- 对文件名加md5后缀
var clean = require('gulp-clean');                           //- 清除文件
var uglify = require('gulp-uglify');                         //- 压缩js文件
var rename = require('gulp-rename');                         //- 重命名

//目标目录清理
gulp.task('clean', function () {
	gulp.src(['./dist/js'], {read: false})
		.pipe(clean());
});

//合并ordertrack所需的js
gulp.task('cityHotMap', function () {
	gulp.src([
		'./src/js/cityHotMap/cityHotMapDraw/cityHotMapDraw.js',
		'./src/js/cityHotMap/cityHotMapService/cityHotMapService.js',
		'./src/js/cityHotMap/cityHotMapCtrl/cityHotMapCtrl.js'
	])
	
	.pipe(concat('cityHotMapCtrl.js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(rev())
	.pipe(gulp.dest('./dist/js'))
});

//合并ordertrack所需的js
gulp.task('trackMap', function () {
	gulp.src([
		'./src/js/trackMap/trackMapDraw/trackMapDraw.js',
		'./src/js/trackMap/trackMapService/trackMapService.js',
		'./src/js/trackMap/trackMapCtrl/trackMapCtrl.js'
	])
		
		.pipe(concat('trackMapCtrl.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest('./dist/js'))
});

//合并queryqty所需的js
gulp.task('queueqty', function () {
	gulp.src([
		'./page/queueqty.js'
	])
		
		.pipe(concat('queueqty.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest('./dist/js'))
});

gulp.task('default', function() {
	gulp.start('clean');
	// 将你的默认的任务代码放在这
	gulp.start('cityHotMap');
	gulp.start('trackMap');
	gulp.start('queueqty');
});
