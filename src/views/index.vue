<template>
    <div class="flex">
        <div class="left menu">
            <div 
                v-for="item in menuConfig" 
                :key="item.id" 
                class="menu-item" 
                :class="{ 'active-menu': componentName === item.name }"
                @click="componentName = item.name"
            >
                {{ item.label }}
            </div>
        </div>
        <div class="right content">
            <component :is="componentName" />
        </div>
    </div>
</template>

<script>
import communication from './communication';
import other from './other';
import classAndStyle from './classAndStyle';
import directive from './directive';
import formModel from './formModel';
import customCom  from './customCom';
import customDirective from './customDirective';
import renderFunction from './renderFunction';
import relationGraph from './relationGraph';
import echarts from './echarts';
import webpack from './webpack';
import plugins from './plugins';

export default {
  name: 'Index',
  components: {
    communication,
    other,
    classAndStyle,
    directive,
    formModel,
    customCom,
    customDirective,
    renderFunction,
    relationGraph,
    echarts,
    webpack,
    plugins
  },
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
            { id: '7', name: 'my-component', label: '组件方式(总线方式)'},
            { id: '8', name: 'customDirective', label: '自定义指令' },
            { id: '9', name: 'renderFunction', label: 'render函数' },
            { id: '10', name: 'relationGraph', label: '关系图' },
            { id: '11', name: 'echarts', label: 'echarts图' },
            { id: '12', name: 'webpack', label: 'webpack' },
            { id: '13', name: 'plugins', label: 'plugins' }
        ],
    }
  },
  // 写法一
  // provide: {
  //   test: '123',
  //   check: '123'
  // },
  // 写法二
  provide() {
    return {
      test: 'test测试',
      check: 'ckeck测试'
    }
  },
  created() {
    // const files = require.context('../views', true);
    // console.log(files);
    // files.keys().forEach(element => {
    //     console.log(element)
    // });
  },
  methods: {
    func1() {
      console.log('父组件的func1')
    }
  }
}
</script>

<style scoped>
.flex {
    display: flex;
}

.left {
    flex: 0 0 300px;
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
