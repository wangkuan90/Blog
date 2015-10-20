define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("jquery");
	
	var view = $("header");
	var	tabView = view.find("[sid=tab-title]");
	var	tabChild = tabView.children();
	
	var Header = {
		mouseOverEvent : function(e){
			var em = $(this).find("em");
			em.stop();
			em.slideDown(400);
		},
		mouseOutEvent : function(e){
			var em = $(this).find("em");
			em.stop();
			em.slideUp(400);
		},
		setTabTitle : function(index){
			index = index ? index : 0;
			$(tabChild[index]).addClass("on").siblings().removeClass("on");
		},
		init : function(){
			for(var i = 0; i < tabChild.length; i++){
				$(tabChild[i]).on("mouseover", this.mouseOverEvent);
				$(tabChild[i]).on("mouseout", this.mouseOutEvent);
			}
			tabView.find("em").hide();
			this.setTabTitle();
			return this;
		}
	}
	
	return Header.init();
});