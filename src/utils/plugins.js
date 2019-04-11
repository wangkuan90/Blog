

export default {
    install(Vue) {
        // 设置网站背景色(待优化)
        Vue.prototype.$setBodyBack = function(color = '#f2f2f2') {
            document.body.style.background = color;
        };

        // 设置网站标题
        Vue.prototype.$setTitle = function(title = '') {
            document.title = title;
        };

        /**
         * change by jwd on 2018/7/24
         * 用路由封装的方法
         * @param  {String} [name='home'] 路由名
         * @param  {Object} [params={}]
         * @param  {Object} [query={}]
         * @return {[type]}               要跳转页面的url
         */
        Vue.prototype.$getPageUrl = function(name = 'home', params = {}, query = {}) {
            return this.$router.getFullPath(name, params, query);
        };

        // 跳转页面
        Vue.prototype.$goPage = function(name = '404', params, query = {}, flag = false) {
            if (/^http*/.test(name)) {
                // if (params) {
                //     name = Utils.convertParamsToUrl(params, `${name}?`);
                // }
                flag ? window.location.replace(name) : (window.location.href = name);
                return;
            }
            flag = flag ? 'replace' : 'push';
            this.$router[flag]({
                name: name,
                params,
                query
            });
        };

        // js内的value toHttps化
        Vue.prototype.$toHttps = function(value) {
            if (/^http:\/\/*/.test(value)) {
                return value.replace('http://', 'https://');
            }
            return value;
        };

        
    }
};
