<template>
<!-- 测试Created里面操作DOM -->
    <div>
        <div class="test-dom1 test-dom" ref="testDom1">
            我是测试DOM1
        </div>
        <template>
            <div class="test-dom2 test-dom" ref="testDom2">
                我是测试DOM2
            </div>
        </template>
        <my-com class="test-dom test-dom3" ref="testDom3"></my-com>
        <test class="test-dom"></test>
        <publish testRouteProp1="test属性"></publish>
        <el-button type="primary" @click="$router.push({ name: 'publish', params: { id: 100 } })">页面跳转</el-button>
    </div>
</template>

<script>
import test from './test.vue';
import publish from '../publish/index.vue';

let myCom = {
    template: `<div>我是子组件</div>`,
    data: function () {
        return {
            age: 100
        }
    },
    methods: {
        childMethod() {
            console.log(this.age);
        }
    }
}
export default {
    name: '',
    components: {
        'my-com': myCom,
        test,
        publish
    },
    filters: {},
    mixins: [],
    model: {},
    props: {
        id: {
            type: String,
            default: null
        },
        test: {
            type: String,
            default: null
        }
    },
    data() {
        return {}
    },
    computed:{},
    watch: {},
    created() {
        // 测试路由传参
        console.log(this.id);
        console.log(this.test);


        let dom1 = document.getElementsByClassName('test-dom1');
        console.log(dom1);

        let dom2 = document.getElementsByClassName('test-dom2');
        console.log(dom2);

        let dom3 = document.getElementsByClassName('test-dom3');
        console.log(dom3);

        let ref1 = this.$refs['testDom1'];
        console.log(ref1);

        let ref2 = this.$refs['testDom2'];
        console.log(ref2);

        let ref3 = this.$refs['testDom3'];
        console.log(ref3);

        this.$nextTick(() => {
            let ref3_1 = this.$refs['testDom3'];
            console.log(ref3_1);
        })
    },
    mounted() {},
    updated() {},
    activated() {},
    deactiveated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {}
}
</script>

<style scoped lang="scss">
.test-dom {
    width: 200px;
    height: 200px;
    border: 1px solid #ff0000;
    border-radius: 4px;
    margin-bottom: 30px;
}
</style>
