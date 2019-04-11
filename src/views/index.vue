<style lang="less">
    .pg-home {
        padding-top: 50px;
        text-align: center;
    }
</style>

<template>
    <div class="pg-home">
        <img src="@/assets/logo.png"/>
        <h1 class="mask">我是首页</h1>
        <env></env>
    </div>
</template>

<script>
import Api from 'api';
import Env from '@/components/HelloWorld.vue';

export default {
    components: {
        Env
    },
    mounted() {
        Api.finance.v2_homePageApiV2_getAdPositionidConfig({location: 0}).then((res) => {
            console.log(res); // eslint-disable-line
        });
    }
};
</script>
