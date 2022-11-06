<template>
    <div class="element-ui-frame">
        <div class="area-title my-2">element-ui换肤</div>
        <el-button type="primary">换肤</el-button>
        <el-button>按钮1</el-button>
        <el-button type="info" round>按钮2</el-button>
        <el-button type="success" plain>按钮3</el-button>

        <!-- 
            1、一次性换肤方案
            npm i sass-loader node-sass -D
            npm i element-theme -D
            npm i element-theme-chalk -D
            et -i   // 初始化变量文件,会生成element-variables.scss
                    // $--color-primary ： red !default 默认主题色
                    // 修改之后执行
            et
                    // 自动生成theme文件夹，里面是编译胡所有的字体和样式文件
                    // 引用 theme/index.css文件即可

         -->
    </div>
</template>

<script>
export default {
    name: 'elementUI',
    components: {},
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {}
    },
    computed:{},
    watch: {},
    created() {},
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
</style>
