define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("$");

	var RouterConfig = {
		"#" : {
			view : "index",
			container : "#body",
			html : true,
			callBack : function(){
				
			}
		},
		"index" : {
			view : "index",
			container : "#body",
			callBack : function(){
				
			}
		},
		"other" : function(){
			alert(2);
		},
		config : {
			"index" : "index",
			"other" : "other"
		}
	}
	
	return RouterConfig;
});
