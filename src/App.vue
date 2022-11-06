<!--
 * @description: 描述说明
 * @author: shengchao.yuan
 * @Date: 2020-12-01 09:06:37
 * @LastEditTime: 2021-06-03 16:52:33
 * @LastEditors: shengchao.yuan
-->
<template>
    <div id="app" class="flex">
        <div class="left menu">
            <div 
                v-for="item in routes"
                :key="item.id"
                class="menu-item"
                :class="{ 'active-menu': componentName === item.name }"
                @click="$router.push({ path: item.path }); componentName = item.name"
            >
                {{ item.meta.title }}
            </div>
        </div>
        <div class="right">
            <router-view />
        </div>
    </div>
</template>

<script>
import counter from '@/utils/counter.js'
export default {
    name: 'App',
    data() {
        return {
            componentName: 'communication',
            menuConfig: [
                { id: '1', name: 'communication', label: '父子组件传值' },
                { id: '2', name: 'other', label: 'vue测试' },
                { id: '3', name: 'classAndStyle', label: '动态绑定class、style' },
                { id: '4', name: 'directive', label: '内置指令' },
                { id: '5', name: 'formModel', label: 'form表单和v-model' },
                { id: '6', name: 'customCom', label: '组件' },
                { id: '7', name: 'myComponent', label: '组件方式(总线方式)'},
                { id: '8', name: 'customDirective', label: '自定义指令' },
                { id: '9', name: 'renderFunction', label: 'render函数' },
                { id: '10', name: 'relationGraph', label: '关系图' },
                { id: '11', name: 'echarts', label: 'echarts图' },
                { id: '12', name: 'webpack', label: 'webpack' },
                { id: '13', name: 'plugins', label: 'plugins' },
                { id: '14', name: 'testDom', label: '测试DOM' }
            ],
            routes: []
        }
    },
    mounted() {
        let arr = this.$store.state.routes.routes;
        console.log(arr)
        arr.splice(0, 1);
        this.routes = arr;

        let counter = counter + 1;
        // console.log(counter);
    },
    beforeCreate() {},
    created() {}
}
</script>

<style scoped>
.flex {
    display: flex;
}

.left {
    flex: 0 0 300px;
    height: 100%;
}

.right {
    flex: 1 1;
    padding-left: 40px;
}

.menu-item {
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 0.5px solid rgba(0, 0, 0, .65);
    cursor: pointer;
}

.menu-item:hover {
    background-color: rgb(206, 149, 63);
}

.active-menu {
    background-color: rgb(206, 149, 63);
}
</style>