<template>
    <div>
        <div>{{ number }}</div>
        <div>
            <div class="btn-class" @click="handleAddRandom">随机增加</div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    filters: {},
    mixins: [],
    model: {},
    props: {
        number: {
            type: Number
        }
    },
    data() {
        return {}
    },
    computed:{},
    watch: {},
    created() {},
    mounted() {},
    updated() {},
    activated() {},
    deactiveated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {
        handleAddRandom() {
            const num = Math.floor(Math.random() * 100 + 1);
            // 子组件通过bus向外传递数据
            this.$bus.emit('add', num);
        }
    }
}
</script>

<style scoped lang="scss">
</style>
