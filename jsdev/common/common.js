define(function(require, exports, module){
	
	var $ = require("jquery");
	
	return {
		ajax: function(url, options) {
			// Ajax参数
			var params = {
				url: url,
				cache: false,
				type: 'get',
				dataType: 'json',
				contentType: "application/json",
				beforeSend: function(XMLHttpRequest) {
					XMLHttpRequest.setRequestHeader("accept", "application/json");
					XMLHttpRequest.setRequestHeader("content-type", "application/json");
				}
			}
			options = $.extend(params, options);
			// 定义延迟对象
			var defer = $.Deferred();
			$.ajax(options)
			.done(function(res) {
				
			})
			.fail(function(res) {
				// 失败
				console.log('something error');
			});

			return defer.promise();
		},
		get : function(url, options, other){
			// Ajax参数
			for(var i in options){
				url += ("&" + i + "=" +options[i]);
			}
			var options = {
				url: url,
				type: "GET",
				dataType: "script"
			}
			options = $.extend({}, options, other);
			// 定义延迟对象
			$.ajax(options);
		}
	}
});