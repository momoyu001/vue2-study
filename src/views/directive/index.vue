<template>
    <!-- 内置指令：v-cloak  v-once  v-if    v-else-if   v-else  v-show  v-for   v-click    事件修饰符 -->
    <div style="flex: flex;">
        <div class="left">
            <!-- 
                v-cloak: 不需要表达式的指令
                    当网速较慢、Vue.js文件还没加载完成时，页面上会显示{{ cloak }},
                    会在vue实例编译结束时从绑定的HTML元素上移除，经常和 display: none 一起使用。
                    是解决初始化慢到时页面闪动问题的最佳实践，但在工程化项目中不起作用
            -->
            <div class="area-title">v-cloak</div>
            <div v-cloak>{{ cloak }}</div>

            <!-- 
                v-once: 不需要表达式的指令
                    定义它的元素或组件只渲染一次，包括元素或组件的所有子节点，首次渲染后，不再随数据的变化而重新渲染
            -->
            <div class="area-title parting-line ">v-once</div>
            <div class="parting-line btn-class" @click="changeOnceText">改变数据</div>
            <div v-once>{{ onceText + '加 once' }}</div>
            <div>{{ onceText + '不加 once' }}</div>

            <!-- 
                v-if    v-else-if   v-else：条件渲染指令
                    根据表达式的值，动态的创建或销毁元素，
                    出于效率考虑，vue会尽可能的复用已有的元素而非重新渲染，
            -->
            <div class="area-title parting-line ">v-if、v-else-if、v-else</div>
            <div class="parting-line btn-class" @click="changeInputType">切换输入框类型</div>
            <div>举个栗子1：</div>
            <!-- 复用了已有的元素，切换了type之后，输入框中的值没有改变，input元素复用 -->
            <template v-if="inputType == 'name'">
                <label for="">用户名：</label>
                <input class="input-class" type="text" placeholder="请输入用户名">
            </template>
            <template v-else>
                    <label for="">邮箱：</label>
                <input class="input-class" type="email" placeholder="请输入邮箱">
            </template>
            <div>举个栗子2：</div>
            <!-- 使用了key，切换了type之后，输入框中的值改变，input元素没有被复用 -->
            <template v-if="inputType == 'name'">
                <label for="">用户名：</label>
                <input :key="'name-input'" class="input-class" type="text" placeholder="请输入用户名">
            </template>
            <template v-else>
                    <label for="">邮箱：</label>
                <input :key="'email-input'" class="input-class" type="email" placeholder="请输入邮箱">
            </template>

            <!-- 
                v-show：条件渲染
                    只是改变元素的display属性，表达式为false时，标签加载了 style="display: none;"
                    不能再template上使用
            -->
            <div class="parting-line  area-title">v-show</div>
            <div class="parting-line btn-class" @click="changeShowHide">切换v-show</div>
            <div v-show="this.showStatus">v-show条件渲染，加上了 style="display: none;" </div>

            <!-- 
                v-for: 循环渲染
                    item in list  或者 item of list
                    遍历数组；
                    遍历对象的属性；
                    遍历整数；
            -->
            <div class="parting-line area-title">v-for</div>
            <div v-for="item in bookList" :key="item.id">{{ item.name }}</div>
            <!-- 
                vue视图更新：
                    修改数字时，页面也会跟随更新重新渲染。
                    能够触发视图更新的数组方法：
                        push()  pop() shift() unshift() splice()    sort()  reverse()

                    push()  pop()   shift() unshift()   sort()  reverse()   ---     改变原始数组，视图可以更新
                    filter()    concat()    slice() --- 不会改变原始数组，不更新视图

                    vue检测到数组变化时，不是直接重新渲染整个数组，而是会最大化的附中dom，性能没有问题。

                    直接通过索引改变数组元素----不会触发更新，vue检测不到变化
                        this.bookList[1] = { name: '新书', id: '2A' };
                    修改数组长度----不会触发更新，vue检测不到变化
                        this.bookList.length = 3
                    
                    直接修改数组元素时更新视图的方法：采用vue内置的set方法
                        Vue.set(this.bookList, 1, { name: '新书', id: '2A' })
                        this.$set(this.bookList, 1, { name: '新书', id: '2A' })

            -->
            <div class="btn-class" @click="updateList(1)">更新list视图</div>
            <div v-for="(item,index) in numberList" :key="index">{{ item }}</div>
            <div class="btn-class" @click="updateList(2)">更新list视图</div>

            <!-- 
                v-click: 方法名可以不加()，会默认传入原生事件对象event
                    event.preventDefault()  阻止默认事件
            -->
            <div class="parting-line area-title">v-click</div>
            <div class="btn-class" @click="handlerClick1">v-click点击事件(默认参数)</div>
            <div class="btn-class" @click="handlerClick2('一个参数', $event)">v-click点击事件(一个参数)</div>

            <!-- 
                事件修饰符：
                    .stop       阻止事件冒泡
                    .prevent    阻止默认事件
                    .capture    事件捕获
                    .self       事件在本身触发时才触发回调
                    .once       只触发一次

                    修饰符可以串联  @click.stop.prevent
                    只使用修饰符    @click.prevent
            -->
            

            <!-- 
                按键修饰符：
                    @keyup.13   // enter键时才触发
                    全局配置按键：Vue.config.keycodes.f1 = 112; @keyup.f1
                    vue还配置了其他一些按键别名
            -->

        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Directiive',
    data() {
        return {
            cloak: '这是一段文本',
            onceText: 'once指令',
            inputType: 'name',
            showStatus: true,
            bookList: [
                { name: '书本1', id: '1A' },
                { name: '书本2', id: '2A' },
                { name: '书本3', id: '3A' },
                { name: '书本4', id: '4A' },
                { name: '书本5', id: '5A' },
            ],
            numberList: [2, 7 , 18, 12, 22, 10],
        }
    },
    methods: {
        // v-once指令测试
        changeOnceText() {
            this.onceText = '修改once指令';
        },
        // 条件渲染
        changeInputType() {
            this.inputType = this.inputType == 'name' ? 'email' : 'name';
        },
        // 条件渲染
        changeShowHide() {
            this.showStatus = !this.showStatus;
        },
        // 更新渲染视图
        updateList(type) {
            if(type == 1) {
                // console.log(this.bookList.push({ // 尾部插入，返回插入后的数组长度
                //     name: '书本6',
                //     id: '6'
                // }));

                // console.log(this.bookList.pop());   // { name: '书本5', id: '5' }， 尾部删除，返回删掉的那一项

                // console.log(this.bookList.unshift({ // 头部插入，返回插入后的数组长度
                //     name: '书本6',
                //     id: '6'
                // }));

                // console.log(this.bookList.shift());   // { name: '书本5', id: '5' }， 头部删除，返回删掉的那一项

                // console.log(this.bookList.splice(2, 1));    // 删除数组元素，返回被删除那一项，参数：index, count

                // console.log(this.bookList.splice(2, 0, { name: '插入的书籍', id: 'AA' }));  // 插入元素，返回空，参数：index, 0 , 插入项

                // console.log(this.bookList.splice(2, 1, { name: '替换的书籍', id: 'BA' }))   // 替换元素，返回被替换掉的元素，参数：index, count, 替换项
                
                // console.log(this.bookList.splice(2));   // 删除元素，参数：index，删除之后的所有元素

                /**
                 * splice()方法：
                 * 从删除元素的角度来理解不同参数时产生的不同效果
                 * 删除 index 后面所有
                 * 删除 index 后面count个元素
                 * 删除 index 后面0个，插入
                 * 删除 index 后面count个元素，插入
                 * **/

                // this.bookList = this.bookList.filter( item => {
                //     return item.name.match(/4/);
                // })

                // this.bookList[0].name = '121212'     // 可以响应式更新，只有整个修改元素的时候不会响应

                // this.bookList[0] = {                    // 不会响应式更新
                //     name: '71983891',
                //     id: '8B'
                // }
            } else {
                // console.log(this.numberList.sort((a, b) => b - a)); // 对数组元素重新排列，在原数组上进行排序,传入排序的函数参数
                // console.log(['c', 'n', 'v', 'f', 'e'].sort());  // c e f n v 

                // console.log(this.numberList.reverse()); // 翻转数组元素，对原数组进行操作
            }
        },
        // click事件参数...
        handlerClick1($event) {
            console.log($event); // 没有显式的传入参数时，会默认传入$event参数
        },
        handlerClick2(arg, $event) {
            console.log(arg);
            console.log($event); // 显式的传入参数时，需要使用$event时，也要显式的传入
        }
    }
}
</script>

<style scoped>
[v-cloak] {
    display: none;
}

.left {
    width: 600px;
    flex: 0 0 600px;
    padding-left: 20px;
    border-right: 1px dashed #ff0000;
}

.right {
    height: 100%;
    flex: 1 1;
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
</style>