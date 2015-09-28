define(function(require, exports, module){
	
	var common = require("common");
	var $ = require("jquery");
	return {
		getCity : function(){
			var defer = $.Deferred();
			common.ajax("http://a.apix.cn/tongyu/iplookup/ip",{
				ip : ip.substr(1),
				"apix-key" : "b776fcdd22184f72705a8cf18b10d1f2"
			})
			.then(function(res) {
			    defer.resolve(res);
			});
			return defer.promise();
		}
	}
});
