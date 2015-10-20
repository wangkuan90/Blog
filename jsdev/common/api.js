define(function(require, exports, module){
	
	"use strict";
	
	var common = require("common");
	var $ = require("$");
	return {
		getWeather : function(city, callback){
			common.get("http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=2&dfc=3",{
				"city" : city
			}, {
				scriptCharset: 'gbk',
				success : callback
			});
		}
	}
});
