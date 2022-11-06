<template>
<!-- 自定义指令 -->
    <div>
        <div class="area-title parting-line">自定义指令</div>
        <!-- 
            指令注册方式：
                1、全局注册 main.js
                2、局部注册
         -->

        <!-- 
            自定义指令的选项：(钩子函数)
                1、bind : 只调用一次，指令第一次绑定到元素时调用，可以实现绑定时就执行一次初始化动作
                2、inserted : 被绑定元素插入父节点时调用（父节点存在即可，不必存在于document中）
                3、update ：被绑定元素所在的模块更新时调用，而不论绑定值是否变化，通过比较更新前后的绑定值
                    可以忽略不必要的模板更新
                4、componentUpdated ：被绑定元素所在的模板完成一次更新周期时调用
                5、unbind : 只调用一次，指令与元素解绑时调用

            每个钩子函数都有几个参数可用：
                1、el : 指令所绑定的元素，可用来直接操作DOM
                2、binding ： 一个对象，有以下属性：
                    （1）name : 指令名。不包括 v- 前缀
                    （2）value : 指令的绑定值, v-directive = 2, 绑定值即为2
                    （3）oldValue : 指令绑定的前一个值，仅在update和componentUpdate钩子中可用，无论值是否改变都可用
                    （4）expression : 绑定值的字符串形式，v-directives="1+1",  1+1
                    （5）arg : 传给指令的参数，v-directives:foo, foo
                    （6）modifiers: 一个包含修饰符的对象, v-directive.foo.bar， 对象即为： { foo: true, bar: true }
                3、vnode Vue编译成的虚拟节点
                4、oldVnode 上一个虚拟节点，仅在update 和 componentUpdated中可用
         -->
        <div class="parting-line">
            <input type="text" class="input-class" v-focus:msg.bar="message">
        </div>

        <!-- 插槽测试 -->
        <!-- <my-com>
            <template #default="{ user, msg }">
                {{ user }}
                <p></p>
                {{ msg }}
            </template>
            <template v-slot:mySlot="data">
                {{ data }}
            </template>
        </my-com> -->
        <div class="parting-line area-title">自定义指令test1 --- 下拉菜单</div>
        <div class="parting-line" style="width: 200px; margin-right: 0px" v-clickoutside="handleClose">
            <div @click="showDropdown($event)" class="btn-class">点击显示下拉菜单</div>
            <div class="select-box dropdown" v-show="show">
                下拉框的内容，点击外部区域可以关闭
            </div>
        </div>
        <!-- 
            在编写自定义指令之前，给DOM绑定一次性事件等初始动作，建议在bind钩子内完成，同时要在unbind内解除相关绑定。
            在自定义指令，理论上可以任意操作DOM，但又违背了vue的初衷，对于大幅度的DOM变动，应该使用组件
         -->
    </div>
</template>

<script>
let myCom = {
    template: `<div>
        <slot :user="user" :msg="msg">我是 默认插槽</slot>
        <p></p>
        <slot name="mySlot" :data="slotData"></slot>
    </div>`,
    data() {
        return {
            user: {
                name: '张三',
                age: '18'
            },
            msg: '子组件的插槽',
            slotData: '12121'
        }
    }
}

export default {
    name: 'customDirective',
    components: {
        myCom
    },
    data() {
        return {
            msg: '组件msg',
            message: '组件message',
            show: false,
            timeNow: (new Date()).getTime(),
            timeBefore:  1488930695721
        }
    },
    directives: {
        focus: {
            // 指令选项：
            // 第一次绑定到元素时调用
            bind() {
                console.log('bind');
            },
            // 被绑 元素插入到父节点值调用
            inserted(el, binding) {
                // 输入框插入到父元素中时，自动获取焦点
                el.focus();
                console.log('injected');
                // const { name, value, oldValue, expression, arg, modifiers } = binding;
                // const { log } = console;
                // log(name);
                // log(value);
                // log(oldValue);
                // log(expression);
                // log(arg);
                // log(modifiers);
            },
            // 被绑定元素所在模块更新时调用
            update(el, binding, vnode) {
                console.log('updated');
                
                // console.log(Object.keys(vnode));
            },
            // 被绑定元素所在的模板完成一次更新之后调用
            componentUpdated() {
                console.log('componentUpdated');
            },
            // 指令与元素解绑时调用
            unbind() {
                console.log('unbind');
            }
        },
        clickoutside: {
            bind(el, binding, vnode) {
                // 全局绑定的点击事件
                function documentHandler(e) {
                    // contains 用来判断元素A是否包含了元素B
                    if (el.contains(e.target)) {
                        return false;
                    }

                    // 判断当前指令有没有写表达式（方法）
                    if (binding.expression) {
                        // value 是一个方法，在指令内部调用这个方法，关闭下拉菜单
                        binding.value(e);
                    }
                };
                el.__vueClickOutside__ = documentHandler;
                document.addEventListener('click', el.__vueClickOutside__);
            },
            // 指令绑定之后 ，给被绑定的元素加上  attribute: disabled, class : disabled-class--禁用状态
            inserted(el, binding, vnode) {
                el.setAttribute('disabled', true);
                el.classList.add('disabled-class');
            },
            // 被绑定元素所在模块更新时的钩子函数，
            update() {
                // 支持表达式的更新？？？
            },
            unbind(el, binding, vnode) {
                document.removeEventListener('click', el.__vueClickOutside__);
                delete el.__vueClickOutside__;
            }
        },
        time: {
            bind(el, biding, vnode) {
                // 绑定时
            },
            inserted(el, binding, vnode) {
                // 被绑定元素插入到父节点中
            },
            update(el, bingding, vnode) {
                // 被绑定元素所在的模块更新时
            },
            componentUpdated(el, binding, vnode) {
                // 被绑定元素所在模块完成一次更新之后
            },
            unbind(el, binding, vnode) {
                // 解绑时
            }
        }
    },
    methods: {
        handleClose() {
            this.show = false;
        },
        // 点击显示下拉框
        showDropdown($event) {
            if (($event.target.parentNode.getAttribute('disabled') !== null)) {
                // 禁用状态
                console.log('禁用')
            } else {
                // 非禁用状态
                console.log('非禁用')
                this.show = true;
            }
        }
    }
}
</script>

<style scoped>
.area-title {
    font-size: 20px;
    font-weight: 500;
    color: #173dea;
    width: 300px;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #ff0000;
}

.parting-line {
    margin-top: 20px;
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

.input-class {
    border: 1px solid rgba(0, 0, 0, .65);
    border-radius: 4px;
    height: 32px;
    line-height: 32px;
}

.dropdown {
    width: 200px;
    height: 200px;
    border-radius: 4px;
    border: 1px solid #ff0000;
}

.disabled-class {
    cursor: not-allowed;
}
</style>