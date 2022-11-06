<template>
<!-- 发布订阅 -->
    <div>
        <el-input type="text" v-model="name"/>
        <el-button @click="doPub">发布</el-button>

        <div class="mt-2">
            <son></son>
        </div>
    </div>
</template>

<script>
import son from './components/son.vue';
import pubsub from '@/utils/pubsub.js';
export default {
    name: 'publish',
    components: {
        son
    },
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {
            name: ''
        }
    },
    created() {
        console.log(this.testRouteProp1);
        console.log(this.testRouteProp2);
        console.log(this.testProp);
    },
    methods: {
        doPub() {
            pubsub.trigger('item', this.name);
        }
    }
}
</script>

<style scoped lang="scss">
</style>
