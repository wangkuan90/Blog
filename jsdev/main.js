seajs.config({
	alias: {
		"jquery": "jquery/jquery-sea-2.1.4.min.js",
		"$": "jquery/jquery-sea-2.1.4.min.js",
		"livereload": "http://127.0.0.1:35729/livereload",
		"index": "./jsdev/index",
		"header" : "./component/header",
		"common" : "./common.js",
		"weather" : "./common/weather.js",    // 天气模块
		"api" : "./api",
		"ip" : "http://www.coding123.net/getip.ashx?js=1",
		"city" : "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",
	},
	// 预加载项
	preload: [
		"city",
		'livereload'
//		"ip",
		
	],
});

// 加载入口模块
seajs.use("index");