/**
 * @file 常量类文件, 记录cookie，localstorage等key的值
 * move by jwd 2018/7/23
 */
export default class Const {

    // 弹个车 app 标识
    static TANGECHE = 'buyerapp';
    // 微信 app 标识
    static WEIXIN = 'weixin';
    // 大风车标识
    static DFC = 'dafengche';
    // 浏览器 Safari 标识
    static SAFARI = 'Safari';
    // 浏览器 Chrome 标识
    static CHROME = 'Chrome';
    // 浏览器 Opera 标识
    static OPERA = 'Opera';
    // 浏览器 Firefox 标识
    static FIREFOX = 'Firefox';
    // dev 环境
    static DEV = 'development';
    // 预发布 环境
    static PRE = 'prepub';
    // 线上 环境
    static PROD = 'production';
    /**
     * cookie 的key
     */
    // 登陆之后，个人信息存放标识
    static TOKEN = '_security_token';
    // 登陆之后，个人信息存放标识
    static USER_DATA = 'userData';
    // 登陆时使用的临时cache
    static LOGIN_CACHE = 'login-cache';
    // 打开页面的spm值，存储一天
    static COOKIE_SPM = 'spm';
    // 给app用的spm值，缓存90天
    static COOKIE_SPM_APP_USE = 'spm-app-use';
    // guid
    static GUID = 'guid';
}
