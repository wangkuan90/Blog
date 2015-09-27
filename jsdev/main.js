seajs.config({
	alias: {
		"jquery": "jquery/jquery-sea-2.1.4.min.js",
		"$": "jquery/jquery-sea-2.1.4.min.js",
		"livereload": "http://127.0.0.1:35729/livereload",
		"index": "./jsdev/index",
		"header" : "./common/header"
	},
	// 预加载项
	preload: [
		'livereload'
	],
});

// 加载入口模块
seajs.use("index");