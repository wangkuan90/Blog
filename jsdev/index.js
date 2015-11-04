define(function(require, exports, module) {
	
	"use strict";

	var $ = require('$');
	require("-");
	require("header");
//	var header = require("header");
//	require("weather");
	
	var common = require("./common/common");
	
	var Router = require("router");
	
	var RouterConfig = require("rout-config");
	
	H5.Router = (new Router()).extend(RouterConfig).start();
	
}); 