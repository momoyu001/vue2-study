<template>
    <div class="render-function-frame">
        <!-- 
            虚拟DOM：
                一个轻量级的JavaScript对象，状态发生改变时，Virtual Dom会进行Diff运算，来更新只需要被替换的DOM
                而不是全部重绘。
            vNode: {
                tag: 当前节点的标签名
                data: 当前节点的数据对象
                ......
            }
            vNode分类：
                EmptyVNode
                TextVNode
                ElementVNode
                CloneVNode
                ComponentVNode

            Render函数
         -->
        <div class="area-title parting-line">render函数</div>
        <render-com1 :level="3" title="测试render函数">123</render-com1>

        <!-- 
            createElement参数：
                render函数通过createElement参数，来创建Virtual Dom。
                三个参数：
                    1、一个HTML标签，组件选项，或一个函数 --- String | Object | Function
                    2、一个对应属性的数据对象，可选 --- Object
                        {
                            （1）和v-bind:class一样的API
                            'class': {
                                foo: true,
                                bar: false
                            }
                            （2）和v-bind:style一样的API
                            'style': {
                                color: 'red',
                                fontSize: '14px'
                            }
                            （3）正常的HTML特性
                            attrs: {
                                id: 'foo'
                            }
                            （4）组件props
                            props: {
                                myPro: 'bar'
                            }
                            （5）dom属性
                            domProps: {
                                innerHTML: 'baz'
                            }
                            （6）自定义事件监听器‘on'
                            on: {
                                click: this.clickHandle
                            }
                            （7）对于组件，用于监听原生事件，而不是vm.$emit
                            nativeOn: {
                                click: this.nativeClickHandler
                            }
                            （8）自定义指令
                            directives: [
                                {
                                    name: 'my-custome-directive',
                                    value: '2',
                                    expression: '1+1',
                                    arg: 'foo',
                                    modifiers: {    // 包含修饰符的对象，此处修饰符为 bar
                                        bar: true
                                    }
                                }
                            ]
                            （9）作用域slot
                            // { name: props => VNode | Array<VNode> }
                            scopedSlots: {
                                default: props => h('span', props.text)
                            }
                        }
                    3、子节点，可选 String | Array
         -->
        <my-com class="btn-class" style="margin-top: 10px" />
        <my-com-render style="margin-top: 10px" />
        <div 
            class="btn-class"
            style="margin-top: 10px"
            @click="show = !show"
        >
            切换show的值
        </div>
        <render-com2 :show="show" />

        <div class="area-title" style="margin-top: 10px">render函数实现v-model</div>
        <render-com3 />

        <!-- 
            自己实现事件修饰符：
                .stop                           event.stopPrapagation()
                .prevent                        event.preventDefault()
                .self                           if (event.target != event.currentTarget) return
                .enter、.13                     if (event.keyCode !== 13) return
                .ctrl、.alt、.shift、.meta      if (!event.ctrlKey) return;  altKey  shiftKey   metaKey

                .once、.capture     提供了特殊的前缀，直接在on里面配置
                .capture                        !
                .once                           ~
                .capture.once或.once.capture    ~!
            
            eg: 
                on: {
                    '!click': this.handleClick,
                    '~keyup': this.handleKeyup,
                    '~!mouseover': this.handleMousemove
                }
         -->
        <div class="area-title parting-line">render函数：事件修饰符</div>
        <render-com4 />

        <div class="area-title parting-line">render函数</div>
        <render-com5></render-com5>
        <render-com5>
            <p>使用了slot</p>
        </render-com5>

        <!-- 
            函数化组件：
                functional的布尔值选项，设置为true可以组件无状态和无实例，也就是没有data和this上下文。
                函数化组件，render函数提供第二个参数context来提供临时上下文，组件需要的data、props、slots、children、parent
                都是通过这个上下文来传递，this.level改写成context.props.level。
                render: function(createElement, context) {}
            函数化组件的使用场景：
                1、程序化的再多个组件中选择一个
                2、在将children、props、data传递给子组件之前操作它们
         -->
        <!-- <div class="area-title parting-line">函数化组件</div> -->

        <!-- 
            JSX：看起来像HTML，但实际上是JavaScript的语法扩展，用更接近DOM结构的形式来描述一个组件的UI和状态信息，最早在React.js里面运用。
            render: function(createElement) {
                return createElement('div', {
                    props: {
                        text: 'some text'
                    },
                    attrs: {
                        id: 'muDiv'
                    },
                    domProps: {
                        innderHTML: 'content'
                    },
                    on: {
                        change: this.changeHandle
                    },
                    nativeOn: {
                        click: this.clickHandle
                    },
                    class: {
                        show: true,
                        on: false
                    },
                    style: {
                        color: '#fff'
                        backgroundColor: '#f50'
                    },
                    key: 'key',
                    ref: 'element',
                    refInFor: true,
                    slot: 'slot'
                })
            }

            --- 等同于 ---
            // h 参数不能省略；
            render: function(h) {
                return (
                    <div
                        id=”myDiv” 
                        domPropsinnerHTML=” content ” 
                        onChange={this . changeHandler} 
                        nativeOnClick={this . clickHandler} 
                        class={{ show : true , on : false }} 
                        style={{ color :’#fff ’, background :’#f50 ’ }} 
                        key=” key”
                        ref=” element” 
                        refinFor 
                        slot=”slot ”
                    >
                    </div>
                )
            }
         -->
        
        <div class="area-title parting-line">render函数实战：可排序表格</div>
        <sort-table />
        <div class="area-title parting-line">render函数实战：留言列表</div>
        <message-list />
    </div>
</template>

<script>
import { 
    renderCom1,
    myCom,
    myComRender,
    renderCom2,
    renderCom3,
    renderCom4,
    renderCom5
} from './renderCom.js';

import sortTable from './components/sortTable.vue';
import messageList from './components/messageList.vue';

export default {
    name: 'renderFunction',
    components: {
        renderCom1,
        myCom,
        myComRender,
        renderCom2,
        renderCom3,
        renderCom4,
        renderCom5,
        sortTable,
        messageList
    },
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {
            show: false
        }
    },
    computed:{},
    watch: {},
    created() {
        console.log('webpack  ---  created');
    },
    mounted() {
        console.log('webpack  ---   mounted');
    },
    updated() {},
    activated() {},
    deactiveated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {}
}
</script>

<style scoped lang="scss">
.show {
    color: #ff0000;
}
</style>
