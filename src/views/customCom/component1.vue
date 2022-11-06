<template>
    <!-- is属性：子组件1 -->
    <div>
        我是子组件1111
        <p></p>
        message属性传值：{{ message }}
        <p></p>
        在子组件中重新定义data变量接收，修改了父组件传入的值：{{ message1.split('').reverse() }}
        <p></p>
        <p></p>
        父组件传入count：{{ count }}
        <p></p>
        子组件中计算属性方式修改countTemp: {{ countTemp }}
        <p></p>
        <p></p>
        父组件传入的对象属性：{{ obj.label }} --- {{ obj.value }}
        <p></p>
        <p @click="obj.label = '子组件修改了父组件传入的对象属性'; obj.value = 20">点击修改传入的对象属性</p>
    </div>
</template>

<script>
export default {
    name: 'component1',
    props: ['message', 'count', 'obj'],
    data() {
        return {
            message1: this.message
        }
    },
    computed: {
        countTemp() {
            return Number(this.count) + 1;
        }
    },
    methods: {}
}
</script>