<template>
<!-- 组件通信 -->
    <div>
        <div class="areat-title custom-class">
            <b>组件间通信</b>
        </div>
        
        <!-- 
            父子组件通信：
                props
                $emit
                v-on 监听组件的自定义事件，.native修饰符监听组件的原生DOM事件。
                自定组件使用.native修饰符，监听的是改组件的根元素。
         -->

        <!-- 
            v-model：
                1、接收一个value属性
                2、在有新的value时，触发input事件
         -->
        
        <div class="area-title parting-line">v-model</div>
        <my-com v-model="parantCount"></my-com>
        <!-- 子组件没有value属性，就算父组件的parentCount一开始就赋值，子组件不会改变 -->
        <!-- 但单子组件改变值时，父组件还是可以实时变化 -->
        <div>父组件v-model绑定的值：{{ parantCount }}</div>

        <!-- 
            非父子组件通信：（兄弟组件、跨多级组件）
                vue1.x: $dispatch()  $broadcast()：------ 被弃用
                    $dispatch()   用于向上级派发事件，只要是它的父级及以上，都可以在Vue实例的events选项内接收。
                    $broadcast()  用于上级向下级广播事件
                    两种方法一旦发出事件后，任何组件内部都是可以接收的，就近原则，而且会在第一次接收之后停止冒泡，除非返回true
         -->
        
        <div class="area-title parting-line">非父子组件通信</div>
        <div>数据1：{{ message1 }}</div>
        <div>数据2：{{ message2 }}</div>
        <p></p>
        <my-com1></my-com1>
        <my-com2></my-com2>

        <div class="area-title parting-line">父链、子组件索引</div>

        <!-- 
            推荐一个空的vue实例作为中央事件总线(bus)：见main.js
         -->

        <!-- 
            父链和子组件索引：
                1、父链：this.$parent 直接访问该组件的父实例或组件，父组件通过this.$children访问它所有的子组件
                递归向上或向下无限访问，知道根实例或最内层组件。
                不建议这样的方式修改父组件的值，应该用props  +  $emit

                2、子组件索引：ref为子组件指定一个索引名称。ref只有在渲染完成后才会有，避免在计算属性或模板中使用
                    组件的ref打印出来是组件实例相关信息
                    普通标签的ref打印出来的是dom元素
         -->
        <div>{{ message }}</div>
        <my-com3 style="margin-top: 20px;" @testEvent="showChildrenRef" test-props="" ref="myCom3"></my-com3>
        <div class="btn-class" style="margin-top: 20px" @click="showChildrenRef" ref="sss">子组件索引方式访问子组件：ref</div>
    </div>
</template>

<script>

let myCom = {
    template: `
        <div>
            <div>子组件的值++：{{ value }}</div>
            <div @click="decrease" class="btn-class"><b> +1 </b></div>
        </div>
    `,
    data() {
        return {
            count: 0
        }
    },
    props: {
        value: {
            type: String | Number,
            default: 0
        }
    },
    created() {
        this.count = this.value || 0;
    },
    methods: {
        decrease() {
            this.count++;
            this.$emit('input', this.count);
        }
    }
}

let myCom1 = {
    template: `
        <div @click="clickMe">子组件派发事件</div>
    `,
    methods: {
        clickMe() {
            this.$dispatch("on-message", "来自子组件的数据")
        }
    }
}

let myCom2 = {
    template: `
        <div @click="clickMe">子子组件派发事件</div>
    `,
    methods: {
        clickMe() {
            this.$dispatch("on-info", "来自子子组件的数据")
        }
    }
}

let myCom3 = {
    template: `
        <div @click="editParent" class="btn-class">点击修改父组件数据$parent</div>
    `,
    data() {
        return {
            messages: '子组件的data'
        }
    },
    methods: {
        editParent() {
            console.log(this.$parent);
            this.$parent.message = '被子组件修改了值';
        }
    }
}

export default {
    name: 'index3',
    components: {
        myCom,
        myCom1,
        myCom2,
        myCom3
    },
    data() {
        return {
            parantCount: 5,
            message: '还没有被子组件修改的值',
            message1: '',
            message2: '',
        }
    },
    events: {
        'on-message'(msg) {
            this.message1 = msg;
        },
        'on-info'(msg) {
            this.message2 = msg
        }
    },
    mounted() {
        console.log(this.$refs['myCom3']);
        console.log(this.$refs['sss']);
    },
    methods: {
        showChildrenRef() {
            let ref = this.$refs['myCom3'];
            console.log(ref.messages);
            console.log(ref);
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