define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("$");
	
	// 字符串中是否包含
	String.prototype.contain = function(str){
		return this.indexOf(str) >= 0;
	};
});
