<template>
    <h2>当前环境: {{ env }}</h2>
</template>

<script>
export default {
    name: 'env',
    data() {
        return {
            env: process.env.VUE_APP_ENV
        };
    }
};
</script>
