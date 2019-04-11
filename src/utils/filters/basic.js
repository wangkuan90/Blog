/**
  * @file 通用全局filter
  */
 import Env from 'const/runtimeEnv';

 export default {
     /**
      * @desc 分转成元,向上取整,并且三位一个逗号,
      * 值无效或者不存在,则返回0
      * @params 转换数字   1000 => 1,
      * place 小数点后保留几位
      * symbol 货币符号
      * thousand 整数部分分隔符
      * decimal 小数部分分割符
      */
     reverseYuan: (value = 0) => {
         if (Number.isNaN(+value)) {
             return '数据异常';
         }
         if (!value && +value !== 0) {
             return '';
         }
         let negative = value < 0 ? '-' : '';
         value = `${Math.ceil(Math.abs(+value) / 100)}`;
         let j = value.length > 3 ? value.length % 3 : 0;
         let top = j ? `${value.substr(0, j)},` : '';
         return negative + top + value.substr(j).replace(/(\d{3})(?=\d)/g, '$1,');
     },
     /**
      * @desc 分转成元,默认保留两个小数点
      * 值无效或者不存在,则返回0
      */
     reverseYuanNoDou: (value = 0) => {
         if (Number.isNaN(+value)) {
             return '数据异常';
         }
         if (!value && +value !== 0) {
             return '';
         }
         return value / 100;
     },
     /**
      * @desc 分转成万,默认保留两个小数点
      * 值无效或者不存在,则返回0
      */
     reverseWan: (value = 0, place = 2) => {
         if (Number.isNaN(+value)) {
             return '数据异常';
         }
         if (!value && +value !== 0) {
             return '';
         }
         value /= 1000000;
         return value.toFixed(place);
     },
     /**
      * @desc 首付专用
      */
     reverseFirstPay: (value = 0) => {
         if (Number.isNaN(+value)) {
             return '';
         }
         value = +value;
         if (!value && +value !== 0) {
             return '';
         }
         value = Math.floor(value / 10000);
         if (value % 100 === 0) {
             return value / 100;
         }
         return (value / 100).toFixed(2);
     },
     /**
      * @desc 分转成元,默认保留两个小数点
      * 值无效或者不存在,则返回0
      */
     toHttps: (value = '') => {
         if (window.location.protocol === 'https:' && /^http:\/\/*/.test(value)) {
             return value.substr(5);
         }
         return value;
     },
     /**
      * @desc 转化m站连接为wechat、ali连接
      */
     reverUrlToMiniProgram(url) {
         // 处理微信小程序的逻辑
         if (Env.IN_MINIPROGRAM) {
             if (/m\S*.tangeche.com/.test(url) && !/market*\S*.tangeche.com/.test(url)) {
                 try {
                     let domain = Env.IN_WX_MINPROGRAM ? 'wechat' : 'ali';
                     let hostnameArr = url.split('//')[1].split('.tangeche.com');
                     let hostname = domain + hostnameArr[0].substr(1);
                     return `${url.split('//')[0]}//${hostname}.tangeche.com${hostnameArr[1]}`;
                 } catch (e) {
                     return url;
                 }
             }
         }
         return url;
     },
     /**
      * @desc 将返回的图片地址，加上参数，防止旋转
      */
     imgPreventRotation: (value = '') => `${value}?x-oss-process=image/auto-orient,1`,
     /**
      * 将数字转化成文字的数字
      *
      * @param  Number  number  输入的数字
      */
     toNumber: (number) => {
         let numberArr = ['一', '二', '三', '四', '五'];
         return numberArr[number];
     }
 };
