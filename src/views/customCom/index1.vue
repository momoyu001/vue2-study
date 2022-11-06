<template>
    <div>
        <div class="area-title"><b>组件与复用</b></div>
        <!-- 
            全局组件：全局注册
            Vue.component('my-component', {
                template: `<div class="custom-class">我的自定义组件--全局组件</div>`
            })
         -->
        <div class="area-title parting-line">全局组件</div>
        <my-component></my-component>

        <!-- 
            局部组件：局部注册
                let myChild = {
                    template: `<div class="custom-class">我的自定义组件--局部组件</div>`
                }

                components: {
                    'my-child': myChild
                },
         -->
        <div class="area-title parting-line">局部组件</div>
        <my-child></my-child>

        <!-- 
            vue组件模板 在某些情况下会受到HTML的限制，比如<table>标签内值允许<td><tr><th>这些标签，所以在<table>内使用组件是无效的，is属性可以挂载组件；
                is：组件的一个属性，用来展示组件的名称，is和component连用，此时的component是一个占位符，具体使用的是哪个组件，看is属性的值
                貌似HTML部分标签的限制没有了？？？？？
                *** 如果使用的字符串模板，是不受限的？？？
         -->
        <div class="area-title parting-line">（vue）组件的is属性</div>
        <div class="btn-class parting-line" @click="comName = 'component-first'">子组件1</div>
        <div class="btn-class parting-line" @click="comName = 'my-child'">局部组件</div>
        <div class="btn-class parting-line" @click="comName = 'component-second'">子组件2</div>
        <component class="parting-line" :is="comName"></component>

        <div class="area-title parting-line">标签限制没有了？？？</div>
        <table>
            <tbody>
                <!-- 标签限制没有了？？？？？？ -->
                <component-first></component-first>
                <tr is="my-child"></tr>
                <!-- <my-child></my-child> -->
            </tbody>
        </table>

        <!-- 
            组件data需要return，两个组件的data中数据不会相互影响
         -->
        <div class="area-title parting-line">组件的data---return</div>
        <my-test-child></my-test-child>
        <my-test-child></my-test-child>

    </div>
</template>
<script>
import componentFirst from './component1.vue';
import componentSecond from './component2.vue';

let _mA = require('./moduleA')
console.log(_mA);

let myChild = {
    template: ` <div class="custom-class">
                    我的自定义组件--局部组件
                    <div>{{ message }}</div>
                </div>`,
    data() {
        return {
            message: '我是局部子组件的data变量'
        }
    },
    computed: {},
    created() {
        console.log('局部组件created');
    },
    mounted() {
        console.log('局部组件mounted')
    },
}

let data = {
    counter: 0
}

let myTestChild = {
    template: ` <div>
                    <div @click="addCount" class="area-title btn-class">点击事件click me</div>
                    <div>点击之后值加1： {{ counter }}</div>
                </div>`,
    data() {
        /**
         * return的是 内部到的新变量，对一个组件进行操作，不会对其他变量有影响
         * **/
        return {
            counter: 0,
        }
        /**
         * 引用外部的data，对一个组件进行 操作，另外的组件也会有变化，改变的始终是一个变量
         * **/
        // return data;
    },
    methods: {
        // 点击后count加1
        addCount() {
            this.counter++;
        }
    }
}
export default {
    name: 'index1',
    components: {
        'my-child': myChild,
        componentFirst,
        componentSecond,
        'my-test-child': myTestChild
    },
    data() {
        return {
            comName: 'component-first',  // 组件名称
        }
    }
}
</script>

<style scoped>
.custom-class {
    color: #ff0000;
    font-size: 18px;
    font-weight: 500;
}

.btn-class {
    width: 200px;
    height: 32px;
    line-height: 32px;
    border: 1px solid rgba(0, 0, 0, .65);
    border-radius: 4px;
    color: #ffffff;
    background-color: #173dea;
    text-align: center;
}

.parting-line {
    margin-top: 20px;
}

.area-title {
    font-size: 20px;
    font-weight: 500;
    color: #173dea;
    width: 300px;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #ff0000;
}
</style>