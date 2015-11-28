### 打包命令:
1：gulp命令  分为手机端代码和pc端打包
2：准备工作   ***

### 开发命令:
1：PC机端开发   gulp watch-pc
2：手机机端开发   gulp watch-m

### css模块:
1: 在`animate.less`中引入第三方animate.css
    
### js模块：
1:lib
	1: 模块化开发，使用sea.js
	2：工具：jquery
2:js/jar
	3：自定义工具包: my-underscore.js 在主页中引入一次即可使用
	4：自定义路由器:my-router.js   依赖 jquery，需要配置router-config.js
5：
``` js
define(function(require, exports, module){
	
	"use strict";
	
	var $ = require("$");

});
```

### 上线部署
1: 修改less/config.less  @imgfile --> img-min
2：执行 gulp 命令
