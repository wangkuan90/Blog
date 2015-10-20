define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("$");
	
	var common = require("../jsdev/common/common");
	
	var Router = function(){
		this._version = 1.0;
		this._start = false;
	}
	
	Router.prototype = {
		extend : function(obj){
			return $.extend(true, this, obj); 
		},
		watch : function(){
			
			// 得到网址中的参数
			var url = common.getUrl() || "index";
			// 通过url得到对应要执行的方法
			var callBack = this.config.hasOwnProperty(url) ? this.config[url] : "index";
			// 有这个回调函数的话，执行此回调函数
			this.hasOwnProperty(callBack) ? this[callBack]() : "";
		},
		start : function(){
			
			if(this._start){
				throw new Error('Router had started!');
			}
			this._start = true;
			
			// 重写浏览器的onhashchange方法
			window.onhashchange = function(){
				this.watch();
			}.bind(this);
			return this;
		},
		stop : function(){
			
			this._start = false;
			window.onhashchange = null;
		}
	}
	
	return Router;
	
});
