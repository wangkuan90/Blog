var gulp = require('gulp');

// 引入组件
var minifycss = require('gulp-minify-css'), // CSS压缩
	uglify = require('gulp-uglify'), // js压缩
	cache = require('gulp-cache'), // js压缩
	autoprefixer = require('gulp-autoprefixer'), // 浏览器兼容
	spriter = require('gulp-css-spriter'), // 雪碧图
	less = require('gulp-less'), // less
	sass = require('gulp-sass'), // sass
	imagemin = require('gulp-imagemin'), // 图片压缩
	concat = require('gulp-concat'), // 合并文件
	rename = require('gulp-rename'), // 重命名
	livereload = require('gulp-livereload'), //实时更新
	plumber = require('gulp-plumber'), // 捕获错误	
	header = require("gulp-header"),
	notify = require("gulp-notify"),
	util = require("gulp-util"),
	moment = require("moment"),
	config = require("./config.json"),
	es6transpiler = require('gulp-es6-transpiler'), // es6 To es5 编译工具
	clean = require('gulp-clean'), //清空文件夹
	banner = '/*! <%= pkg.name %> - <%= moment().format("YYYY-MM-DD HH:mm:ss") %> */\r\n';

/**
 * 在文件头部添加时间戳等信息
 */
var addHeader = function() {
	return header(banner, {
		pkg: config,
		moment: moment
	});
};
// gulp watch 日常开发执行的任务
gulp.task('watch', function() {

	livereload.listen();

	gulp.watch(['less/*.less', 'less/*/*.less'], function(file) {

		gulp.run('build-less');
	});

	//监听css, js ,html页面，如果有改动，则自动刷新
	gulp.watch(['css/*.css', 'html/*.html', 'html/*/*.html', 'index.html']).on('change', livereload.changed);
});

// 手机端使用的gulp指令
gulp.task('pack-pc', ['pc-imagemin'], function() {

	gulp.run('pc-compress-jsdev', 'build-less');
});

// Image-min  图片压缩
gulp.task('pc-imagemin', function() {
	gulp.src(['pc/material/img/*.{png,jpg,gif,ico,jpeg}', 'pc/material/img/*/*.{png,jpg,gif,ico,jpeg}'])
		.pipe(imagemin({
			optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
			progressive: false, //类型：Boolean 默认：false 无损压缩jpg图片
			interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
			multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
		}))
		.pipe(gulp.dest('pc/material/img-min'));
});

// 合并，压缩js文件 并不会压缩main.js
gulp.task('pc-compress-jsdev', function() {
	gulp.src(['pc/jsdev/*.js', 'pc/jsdev/*/*.js', '!pc/jsdev/main.js'])
		.pipe(uglify({
			mangle: false
		}))
		.pipe(addHeader())
		.pipe(gulp.dest('pc/js'));
});
// 清空图片、样式、js
gulp.task('cleanImgSprite', function() {
	return gulp.src(['pc/material/img-css-sprite/*.png'], {
			read: false
		})
		.pipe(clean({
			force: true
		}));
});

// less解析
gulp.task('build-less', ['cleanImgSprite'], function() {

	var timestamp = +new Date();

	gulp.src('pc/less/h5.less')
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(less())
		.pipe(spriter({
			// 生成的spriter的位置
			'spriteSheet': 'material/img-css-sprite/sprite' + timestamp + '.png',
			// 生成样式文件图片引用地址的路径
			// 如下将生产：backgound:url(../images/sprite20324232.png)
			'pathToSpriteSheetFromCSS': '../material/img-css-sprite/sprite' + timestamp + '.png'
				// 修改node_modules\gulp-css-spriter\lib\map-over-styles-and-transform-background-image-declarations.js
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: true, //是否美化属性值 默认：true 像这样：
			remove: true //是否去掉不必要的前缀 默认：true 
		}))
		.pipe(gulp.dest('pc/css'))
		.pipe(minifycss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(addHeader())
		.pipe(gulp.dest('pc/css'));
});

// 手机端使用的gulp指令
gulp.task('pack-mobile', ['imagemin'], function() {

});

// 监听指令
gulp.task('mobile-build-scss', function() {

	gulp.src(['mobile/scss/h5.scss'])
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: true, //是否美化属性值 默认：true 
			remove: true //是否去掉不必要的前缀 默认：true 
		}))
		.pipe(gulp.dest('mobile/css'))
		.pipe(minifycss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(addHeader())
		.pipe(gulp.dest('mobile/css'));
});

// 监听指令
gulp.task('watch-m', function() {

	livereload.listen();

	gulp.run('mobile-build-scss');

	gulp.watch(['mobile/scss/*.scss', 'mobile/scss/*/*.scss'], function(file) {

		gulp.run('mobile-build-scss');
	});

	//监听css, js ,html页面，如果有改动，则自动刷新
	gulp.watch(['mobile/css/*.css']).on('change', livereload.changed);
});

// 清空图片、样式、js
gulp.task('clean', function() {
	return gulp.src(['{pc,mobile}/js/*.js', '!{pc,mobile}/js/main.js', '{pc,mobile}/css/*.css', '{pc,mobile}/material/img-min/*'], {
			read: false
		})
		.pipe(clean({
			force: true
		}));
});

// gulp 发布执行的任务
gulp.task('default', ['clean'], function() {

	gulp.run('pack-pc');
	gulp.run('pack-mobile');
});