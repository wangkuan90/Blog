define(function(require, exports, module) {
	
	"use strict";

	var $ = require('$');
	require("-");
//	var header = require("header");
//	require("weather");
	
	var common = require("./common/common");
	
	var Router = require("router");
	
	var RouterConfig = require("rout-config");
	
	new Router().extend(RouterConfig).start();
	
}); 