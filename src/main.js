import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@souche-ui/lemon';
import myPlugin from './utils/plugins';
import filters from './utils/filters';
import directives from './utils/directives';
import Common from './utils/helpers/common';

Common.init();
Vue.use(myPlugin);

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]));

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app');
