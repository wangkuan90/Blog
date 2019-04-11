import Vue from 'vue';
import Router from '@souche-vue/souche-router';
import routes from './modules';

Vue.use(Router);

const router = new Router({
    base: '/',
    routes
});

export default router;
