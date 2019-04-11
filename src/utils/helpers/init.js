import VueSentry from '@souche-vue/vue-sentry'
import Innovation from '@souche-vue/Innovation';
import Vue from 'vue';

// 调试小工具初始化
const InnovationInit = () => {
    Vue.use(Innovation, {
        env: process.env.VUE_APP_ENV
    });
};

const sentryInit = () => {
    let packageJson = require('../../../package.json');
    Vue.use(VueSentry, {
    dsn: 'https://5d719486224d4264b12b67d203a0565c@sentry.souche.com/842',
    env: process.env.VUE_APP_ENV,
    version: packageJson.version
    });
};

export default () => {
    InnovationInit();
    sentryInit();
};
