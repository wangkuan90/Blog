define(function(require, exports, module) {

	var $ = require('jquery');
	
});
seajs.config({
	alias: {
		"jquery": "jquery/jquery-sea-2.1.4.min.js",
		"$": "jquery/jquery-sea-2.1.4.min.js",
		"livereload": "http://127.0.0.1:35729/livereload",
		"index": "./jsdev/index"
	},
	// 预加载项
	preload: [
		'livereload'
	],
});

// 加载入口模块
seajs.use("index");