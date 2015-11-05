define(function(require, exports, module) {
	
	"use strict";

	require("-");
//	require("header");
//	var header = require("header");
//	require("weather");
	
//	var common = require("./common/common");
	
	var Router = require("router");
	
	var RouterConfig = require("router-config");
	
	var RouterController = require("router-controller");
	
	H5.Router = new Router().config(RouterConfig).controller(RouterController).start();
	
}); 