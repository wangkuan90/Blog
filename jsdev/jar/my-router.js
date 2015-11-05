define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("$");
	
	var common = require("../common/common");
	
	var Router = function(){
		this._version = 1.0;
		this._start = false;
	}
	
	Router.prototype = {
		config : function(config){
			this.config = config;
			return this; 
		},
		controller : function(controller){
			this.controller = controller;
			return this; 
		},
		render : function(config){
			var url = config.templateUrl(common.getParams(location.href));
			var container = $(config.container);
			common.getHtml(url).then((function(html){
				container.html(html);
				if(config.controller){
					if(typeof config.controller === "function"){
						config.controller();
					}else if(typeof config.controller === "string"){
						this.controller[config.controller]();
					}
				}
			}).bind(this));
		},
		watch : function(){
			// 得到网址中的参数
			var url = common.getUrl() || "index";
			// 通过url得到对应要执行的方法
			var config = this.config.hasOwnProperty(url) ? this.config[url] : this.config["index"];
			// 有这个回调函数的话，执行此回调函数
			this.render(config);
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
