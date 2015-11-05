seajs.config({
	alias: {
		"jquery": "jquery/jquery-sea-2.1.4.min",
		"$": "jquery/jquery-sea-2.1.4.min",
		"livereload": "http://127.0.0.1:35729/livereload",
		"index": "./jsdev/index",
		"router": "./jar/my-router",  //自定义路由器
		"-": "./jar/my-underscore",  //自定义方法类 
		"header" : "./component/header",
		"weather" : "./common/weather",    // 天气模块
		"api" : "./api",
		"ip" : "http://www.coding123.net/getip.ashx?js=1",
		"city" : "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",
		"router-config" : "./controller/router-config",
		"router-controller" : "./controller/router-controller",
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
