define(function(require, exports, module){
	
	var $ = require("jquery");
	
	return {
		ajax: function(url, options) {
			// 请求接口地址
			var self = this;
			
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
					XMLHttpRequest.setRequestHeader("apix-key", "f1eaeff9c29a430f5077cc832a4153db");
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
		}
	}
});