<template>
    <div>
        <div class="area-title"><b>props传递数据</b></div>

        <!-- 
            props选项：
                两种数据类型：1、字符串数组;2、对象
                驼峰命名的props名称要转为短横线分隔：propText --- prop-text

         -->
        <component-first class="parting-line" :obj="{}" message="来自父组件的值111" />

        <!-- 
            数据流：
                1、父组件传递初始值，子组件将它作为初始值保存起来，在自己的作用域下可以随意使用和修改。
                    在组件data内再声明一个数据，引用父组件的prop
                2、prop需要作为被转变的原始值传入，使用计算属性
                3、props是对象或者数组时，在子组件内部改变属性值，是会影响父组件的
         -->
        <div class="area-title parting-line">数据流</div>
        <component-first :obj="objData" count="10" message="来自父组件的值222" />
        父组件内显示的obj对象：{{ objData.label }} {{ objData.value }}


        <!-- 
            属性的数据校验：
                属性的type：String Number Boolean Object Array Function
                默认值      default     对象或数组的默认值必须通过一个函数来返回
                是否必传    required
                验证函数    validator
         -->
        <div class="area-title parting-line">属性的数据校验</div>
    </div>
</template>

<script>
import componentFirst from './component1.vue';
import componentSecond from './component2.vue';

export default {
    name: 'index2',
    components: {
        componentFirst,
        componentSecond
    },
    data() {
        return {
            objData: {
                label: '父组件的对象',
                value: 100
            }
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