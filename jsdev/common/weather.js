define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("jquery");
	// 所在位置  remote_ip_info
	var api = require("api");
	// 所在位置  remote_ip_info
	var city = remote_ip_info.city;
	api.getWeather(city, init);
	
	function init(){
		console.log(SWther);
	}
});