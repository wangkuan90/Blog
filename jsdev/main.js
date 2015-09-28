seajs.config({
	alias: {
		"jquery": "jquery/jquery-sea-2.1.4.min.js",
		"$": "jquery/jquery-sea-2.1.4.min.js",
		"livereload": "http://127.0.0.1:35729/livereload",
		"index": "./jsdev/index",
		"header" : "./component/header",
		"common" : "./common.js",
		"api" : "./common/api",
		"ip" : "http://www.coding123.net/getip.ashx?js=1"
	},
	// 预加载项
	preload: [
		'livereload',
		"ip"
	],
});

// 加载入口模块
seajs.use("index");