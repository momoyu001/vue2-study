<template>
    <div class="plugins-frame">
        <!-- 
            vue插件机制：
            
            1、注册插件，一个公开的install
                第一个参数是Vue的构造器
                第二个参数是可选的 选项对象
                Myplugin.install = function(Vue, options) {

                    // 全局注册组件（指令等功能资源类似）
                    Vue.component('component-name', {
                        // 组件内容
                    })

                    // 添加实例方法
                    Vue.prototype.$Notice = function() {
                        // 逻辑...
                    }

                    // 添加全局方法或属性
                    Vue.globalMethod = function() {
                        // 逻辑...
                    }

                    // 添加全局混合
                    Vue.mixin({
                        mounted() {
                            
                        }
                    })
                }
            2、通过Vue.use()来使用插件
                Vue.use(MyPlugin)
                Vue.use(MyPlugin, {
                    // 参数
                })
         -->
        

        <!-- 
            Vue与前端路由 -- vue-Router
                SPA的核心就是前端路由。前端路由就是由前端来维护一个路由规则。
                1、利用url的hash，就是通常说的锚点(#)，hasChange事件来监听url的改变
                2、利用HTML5的History模式，没有#，单页面并没有跳转，这种模式需要服务端支持，
                    服务端在接收到所有请求后，都指向同一个HTML文件，不然会出现404，因此一个SPA
                    只有一个HTML
                3、路由不同的页面事实上就是 动态加载不同的组件
                    component： require('./views/index.vue) 一次性加载
                    使用了异步路由后，编译出的每个页面的js文件都叫做chunk（块），
                    vue文件里面的样式也需要配置后才会带包金main.css
                4、路由跳转：
                    （1）router-link标签，默认被渲染成一个a标签
                    该标签会在HTML5的History模式下被拦截点击，避免浏览器重新加载页面
                    prop:
                        tag：可以指定渲染成什么标签
                        replace：不会留下history记录
                        active-class：匹配成功时，会自动给当前元素设置一个名为router-link-active的class
                    （2）点击事件跳转
                    this.$router.push()
                    this.$router.replace()，不添加记录，替换调当前的history记录
                    this.$router.go()，在history记录中前进或后退几步
         -->
        
        <!-- 
            导航钩子：beforeEach、afterEach
         -->

        <!-- 
            Vuex里面的数据都是响应式的，任何组件使用统一store的数据时，只要store的数据变化，对应的组件也会立即更新
            state
            mutation：this.$store.commit('mutation名称')，mutation里不应该有异步操作
            actions：this.$store.$dispatch()触发 提交的mutation，且可以异步操作业务逻辑
                设计改变数据的，就用mutation，存在业务逻辑的就用actions
            modules：分隔不同的模块，每个modules拥有自己的state、getters、mutation、actions

            在getters、actions中，还可以接收一个参数rootState来访问根节点的状态
            getters: {
                sumCount(state, getters, rootState) {

                }
            }
         -->
        
        <div class="area-title">插件实战</div>
        <counter :number="number" />
        <sub-counter></sub-counter>

        <!-- 
            回顾一下bus通信：
                1、注册了一个空vue实例：只需要在bus初始化时获取一次，任何时间 、任何组件就可以从中直接使用了
                2、通过 bus 把事件发出去
                    bus.$emit("on-message", "来自全局子组件的数据")
                3、监听了 bus 的事件
                    bus.$on("on-message", function(msg) {
                        console.log(msg);
                    })
            插件的形式
         -->
    </div>
</template>

<script>
import counter from './counter.vue';
import subCounter from './subCounter.vue';

export default {
    name: '',
    components: { counter, subCounter },
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {
            number: 0
        }
    },
    computed:{},
    watch: {},
    created() {
        //  父组件通过bus来接收数据，并重新给number赋值
        this.$bus.on('add', this.handleAddRandom);
        /* tips:
            应该在created钩子中使用，mounted中使用可能接收不到来自其他组件created发出的事件
            使用了$bus.on，在beforeDestory钩子里面应该再使用$bus.off解除
        */
    },
    mounted() {},
    updated() {},
    activated() {},
    deactiveated() {},
    beforeDestroy() {
        this.$bus.off('add', this.handleAddRandom);
    },
    destroyed() {},
    methods: {
        handleAddRandom(num) {
            this.number += num;
        }
    }
}
</script>

<style scoped lang="scss">
</style>
