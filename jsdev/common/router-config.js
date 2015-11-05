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
			view : function(params){
				if(params.step === ""){
					return "html/index.html";
				}
			},
			container : "#body",
			controller : "homePageController"
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
