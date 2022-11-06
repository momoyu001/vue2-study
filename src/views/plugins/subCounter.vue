<template>
    <div>
        <div>兄弟组件</div>
        <div>兄弟组件也可以通过bus来接收number，并显示</div>
        <div style="margin-top: 10px; margin-bottom: 10px;">{{ number }}</div>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
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
        this.$bus.on('add', this.handleAddRandom);
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
            this.number = num
        }
    }
}
</script>

<style scoped lang="scss">
</style>
