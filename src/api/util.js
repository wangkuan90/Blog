/**
 * @file 封装请求
 */
import Http from '@souche-f2e/http-request';

const ajax = (url, params = {}) => {
    params.url = url;
    return Http(params);
};

export default {
    finance(baseURL) {
        let host = typeof baseURL === 'function' ? baseURL() : baseURL;
        return function(params) {
            params.opts = params.opts || {};
            // 可以做一些token之类的操作
            return ajax(host + params.url, {
                data: params.opts,
                method: params.method
            });
        };
    }
};
