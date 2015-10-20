define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("$");

	var RouterConfig = {
		"index" : function(){
			alert(1);
		},
		"other" : function(){
			alert(2);
		},
		config : {
			"#" : "index",
			"other" : "other"
		}
	}
	
	return RouterConfig;
});
