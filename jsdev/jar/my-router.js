define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("$");
	
	var common = require("../common/common");
	
	var Router = function(){
		this._version = 1.0;
		this._start = false;
	}
	
	Router.prototype = {
		extend : function(obj){
			return $.extend(true, this, obj); 
		},
		render : function(html, back){
			var container = $(back.container);
			container.html(html);
			back.callBack ? back.callBack() : "";
		},
		watch : function(){
			
			// 得到网址中的参数
			var url = common.getUrl() || "index";
			// 通过url得到对应要执行的方法
			var callBack = this.config.hasOwnProperty(url) ? this.config[url] : "index";
			// 有这个回调函数的话，执行此回调函数
			var back = {};
			if(this.hasOwnProperty(callBack)){
				if(typeof this[callBack] === "function"){
					var back = this[callBack]();
				}else if(typeof this[callBack] === "object"){
					var back = this[callBack];
				}
				back = $.extend(true, this["#"], back); 
			}
			
			if(back.html){
				var self = this;
				common.getHtml(back.view).then(function(html){
					self.render(html, back);
				});
			}else{
				var html = back.view;
				this.render(html, back);
			}
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
			this.watch();
			return this;
		},
		stop : function(){
			
			this._start = false;
			window.onhashchange = null;
		}
	}
	
	return Router;
	
});
