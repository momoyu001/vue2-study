<template>
<!-- 尤其在组件中，如果表达式较长或逻辑复杂，优先使用计算属性 -->
    <div>
        <button @click="changeClass">切换class</button>
        <!-- 对象语法--动态class -->
        <div class="div-box" :class="{ 'active': isActive, 'not-active': !isActive }">{{ 'isActive: ' + isActive ? 'yes' : 'no' }}</div>
        <!-- 对象语法--动态class  不能根据变化实时渲染 -->
        <div class="div-box" :class="classObj">{{ 'isActive: ' + isActive ? 'yes' : 'no' }}</div>
        <!-- 数组语法--动态class -->
        <div class="div-box" :class="[isActive ? 'active' : 'not-active', isTest ? 'test' : 'not-test' ]">{{ 'isActive: ' + isActive ? 'yes' : 'no' }}</div>
        <!-- 计算属性--动态class -->
        <div class="div-box" :class="isActiveClass">{{ 'isActive: ' + isActive ? 'yes' : 'no' }}</div>
        <!-- 数组语法中使用对象语法--动态class -->
        <div class="div-box" :class="[ { 'active': isActive }, 'test' ]">{{ 'isActive: ' + isActive ? 'yes' : 'no' }}</div>

        <button style="marginTop: 20px" @click="changeStyle">切换style</button>
        <!-- 对象语法---动态style -->
        <div 
            class="div-box" 
            style="border: 1px solid #ff0000; width: 300px" 
            :style="{ color: isStyleActive ? color : '', fontSize: fontSize + 'px' }">
            {{ 'isStyleActive: ' + isStyleActive }}
        </div>
        <!-- 计算属性语法---动态style -->
        <div class="div-box"
            style="width: 300px; transform: translateY(30px)"
            :style="styleObj">
            {{ 'isStyleActive: ' + isStyleActive }}
        </div>
        <!-- 数组语法--动态style----不常用 -->
        <div class="div-box"
            style="width: 300px"
            :style="[ this.isStyleActive ? style1 : '', style2 ]">
            {{ 'isStyleActive: ' + isStyleActive }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'classAndStyle',
    data() {
        return {
            isActive: false,
            classObj: {
                active: this.isActive,
                notActive: !this.isActive
            },
            isTest: false,
            isStyleActive: false,
            isStyleTest: false,
            color: '#ff00ff',
            fontSize: '18',
            transform: 'translateX(20px)',
            style1: {
                color: '#173dea'
            },
            style2: {
                fontSize: '18px'
            }
        }
    },
    computed: {
        isActiveClass() {
            // return this.isActive ? 'active': 'not-active';
            // 数组语法的计算属性
            return [ this.isActive ? 'active' : 'not-active' ];
            // 对象语法的计算属性
            // return {
            //     active: this.isActive,
            //     notActive: !this.isActive,
            //     'test': this.isActive
            // }
        },
        styleObj() {
            return {
                color: !this.isStyleActive ? this.color : '',
                fontSize: this.fontSize + 'px',
                transform: this.isStyleActive ? this.transform : 'translateX(-20px)'
            }
        }
    },
    methods: {
        // 动态切换class
        changeClass() {
            this.isActive = !this.isActive;
            this.isTest = !this.isTest;
        },
        // 动态切换style
        changeStyle() {
            this.isStyleActive = !this.isStyleActive;
            this.isStyleTest = !this.isStyleTest;
        }
    }
}
</script>

<style scoped>
.div-box {
    width: 100px;
    height: 32px;
}

.active {
    background-color: #ff0000;
}

.not-active {
    background-color: #ff00ff;
}

.notActive {
    background-color: #ff00ff;
}

.test {
    border: 1px solid #000000;
}

.not-test {
    border: 1px solid #00ff00;
}
</style>