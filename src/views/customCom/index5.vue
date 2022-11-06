<template>
    <div>
        <div class="areat-title custom-class">
            <b>组件高阶用法</b>
        </div>

        <!-- 
            递归：
                需要递归使用组件时，组件必须要有name属性
         -->
        <div class="area-title parting-line">递归</div>
        <my-com1 />

        <!-- 
            内联模板：给组件标签使用 inline-template特性，组件就会把它当做模板，而不是当内容分发
            不建议使用内联模板
         -->
        <div class="area-title parting-line">内联模板</div>
        <my-com2 inline-template>
            <div>
                <p>在父组件中定义子组件的模板</p>
                <p>{{ message }}</p>
                <p>{{ msg }}</p>
            </div>
        </my-com2>

        <!-- 
            动态组件：
                特殊的元素<component>来动态的挂载组件，使用is属性来选择要挂载的组件
         -->
        <div class="area-title parting-line">动态组件</div>
        <div @click="componentName = 'my-com1'" class="btn-class">切换组件1</div>
        <div @click="componentName = 'my-com3'" class="btn-class">切换组件2</div>
        <component :is="componentName" />

        <!-- 
            异步组件：
                开始就把组件加载完，可能会有性能问题，采用异步加载的方式，在需要渲染组件时才加载组件
                并且把结果缓存起来，用于后面的再次渲染
                结合webpack
         -->
        <div class="area-title parting-line">异步组件</div>
        <!-- <my-com4 /> -->

        <!-- 
            1、vue异步更新队列：......
            2、this.$nextTick() 确定啥时候DOM更新完成
            3、x-template：<script type="text/x-template" id="组件标签名"></script>  将组件具体的定义写在一个script里面
            4、手动挂载实例：Vue.extend  $mount两种方法手动挂载一个实例
                Vue.extend是基础的vue构造器，创建一个子类，参数是包含组件选项的对象，
                $mount方法将创建好的实例挂载到dom上,该方法返回实例本身，因而可以链式调用其他实例方法
         -->
        

        <div class="area-title parting-line">手动挂载实例</div>
        <div @click="createCom" class="btn-class">创建组件实例</div>
        <!-- new newCom创建的实例将被挂载到 mount-div这个dom元素上 -->
        <div id="mount-div"></div>

        <!-- 
            extend 和 mixin 的区别：
            1、mixin，只是在初始化VUE实例时传递一个配置对象的扩展，减少data、methods、钩子的重复使用。
                mixin可以使用多个
                Vue.mixin(mixin);   -  全局的
                使用：需要全局取注入一些methods，filter或者hooks时，可以使用mixin
            2、extend，vue的构造器，创建一个自子类，参数是一个包含组件选项的对象，extend也会对传进来的配置option和vue原来的option做一个合并。
                extends只能有一个
                extends会比mixin先执行，执行顺序： extends > mixins > 组件
                Vue.extend({})
                使用：不需要全局引入混入一些配置，比如要获得一个component，可以使用Vue.component或者Vue.extend
            3、总结：
                vue实例中的选项：extend是对象写法（只能有一个）、mixin是数组写法（可以有多个）；
                调用优先级：Vue.extend > extends > mixins
                mixins: [mixin1, mixin2]
                extends: extendsTest

                都是对父组件的扩充；
                触发钩子函数时：extends > mixins > 父组件的函数
                data、template属性，父组件也有时，以父组件为准
                data、methods内函数、components和directives等键值对格式的对象，均已父组件/实例为准。
            
            4、使用extend可实现类似 $messsage({}) 的功能
         -->
    </div>
</template>

<script>
let myCom1 = {
    name:'myCom1',      // 需要递归使用组件时，name属性不可缺少
    template: `
        <div>
            <p>组件递归用法，count值：{{ count }}</p>
            <my-com1 v-if="count < 5" :count="count + 1" />
        </div>
    `,
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            
        }
    }
}

let myCom2 = {
    data() {
        return {
            msg: '子组件的数据'
        }
    }
}

let myCom3 = {
    name:'myCom3',
    template: `
        <div>
            <p>子组件3</p>
        </div>
    `,
}

let myCom4 = {
    function: (resolve, reject) => {
        window.setTimeout( () => {
            resolve({
                template: `
                    <div>
                        <p>异步加载的组件</p>
                        <p>{{ message }}</p>
                    </div>
                `,
                data() {
                    return {
                        message: '子组件数据'
                    }
                }
            })
            reject("false")
        }, 0)
    }
}


import Vue from 'vue';

let newCom = Vue.extend({
    template: `
        <div>
            <p>手动挂载的Vue实例</p>
        </div>
    `
})

export default {
    name: 'index5',
    components: {
        myCom1,
        myCom2,
        myCom3
    },
    data() {
        return {
            message: "父组件的数据",
            componentName: '',
        }
    },
    methods: {
        createCom() {
            new newCom().$mount("#mount-div");

            // console.log(new newCom().$mount);
            // new newCom({
            //     el: '#mount-div'
            // })
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