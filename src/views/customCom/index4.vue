<template>
    <div>
        <div class="areat-title custom-class">
            <b>slot内容分发</b>
        </div>

        <!-- 
            组件内部的slot，不知道slot具体会挂载什么，由父组件决定。
            slot分发的内容，作用域在父组件。
         -->
        
        <!-- 
            单个slot：子组件内有<slot>，在父组件中，插入在子组件标签内的所有内容将替代子组件的slot标签以及它的内容，
                子组件内有多个slot时，父组件插入的内容就会显示几次
         -->
        <div class="area-title parting-line">默认slot</div>
        <div class="btn-class" @click="isSlotShow = true;">点击往子组件插入内容</div>
        <my-com>
            <p v-if="isSlotShow">父组件插入的内容</p>
            <p v-if="isSlotShow">父组件插入的内容2</p>
            <p v-if="isSlotShow" slot="slot1">具名插槽的内容</p>
        </my-com>

        <!-- 
            具名slot：可以分发多个
         -->
         <div class="area-title parting-line">具名slot</div>
        <my-com1>
            <p slot="slot1">具名slot</p>
            <p>覆盖了默认的slot</p>
        </my-com1>

        <!-- 
            作用域插槽：既可以使用子组件的slot，有可以使slot内容不一致
         -->
        <div class="area-title parting-line">作用域slot</div>
        <my-com2>
            <div slot-scope="props">
                <p>来自父组件的内容</p>
                {{ props.msg }}
            </div>
        </my-com2>
    </div>
</template>

<script>
let myCom = {
    // 子组件slot默认显示的那部分，作用域是子组件
    template: `
        <div>
            <p>我是子组件</p>
            <slot>
                <p>如果父组件没有插入内容，默认显示的内容</p>
            </slot>
            <slot>
                我是slot2号
            </slot>
        </div>
    `,
}

let myCom1 = {
    template: `
        <div>
            <slot>默认slot</slot>
            <slot name="slot1">
            </slot>
        </div>
    `,
    mounted() {
        console.log('打印$slots')
        console.log(this.$slots.slot1);
        console.log(this.$slots.default);
    }
}

let myCom2 = {
    template: `
        <div>
            <slot msg="来自子组件的数据">
            </slot>
        </div>
    `,
}

export let myCom4 = {
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


export default {
    name: 'index4',
    components: {
        myCom,
        myCom1,
        myCom2
    },
    data() {
        return {
            isSlotShow: false
        }
    },
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