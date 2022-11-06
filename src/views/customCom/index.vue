<template>
    <div>
        <!-- part1：组件与复用 -->
        <!-- <index1 /> -->

        <!-- part2：props传递数据 -->
        <!-- <index2 /> -->

        <!-- part3: 组件间通信 -->
        <!-- <index3 /> -->

        <!-- slot内容分发 -->
        <!-- <index4 /> -->

        <!-- 组件高阶用法 -->
        <index5 />
    </div>
</template>
<script>
import index1 from './index1.vue';
import index2 from './index2.vue';
import index3 from './index3.vue';
import index4 from './index4.vue';
import index5 from './index5.vue';

export default {
    name: 'customCom',
    components: {
        index1,
        index2,
        index3,
        index4,
        index5
    },
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>