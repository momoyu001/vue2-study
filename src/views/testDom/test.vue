<template>
    <div>
        <p>测试watch和computed</p>
        <el-button type="primary" @click="number = 2">点击我测试</el-button>
        <p>{{ 'number的值：' + number }}</p>
    </div>
</template>

<script>
export default {
    name: 'test',
    components: {},
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {
            number: 2
        }
    },
    computed:{
        newNumber() {
            console.log('我是computed里面的: ' + this.number);
            return this.numer;
        }
    },
    watch: {
        'number': {
            handler(n, o) {
                console.log('我是watch里面的：' + n);
            }
        }
    },
}
</script>

<style scoped lang="scss">
</style>
