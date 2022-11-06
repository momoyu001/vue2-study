<template>
    <div>
        <h1>{{ h1 }}</h1>
    </div>
</template>

<script>
import pubsub from '@/utils/pubsub.js';

export default {
    name: 'son',
    components: {}, 
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {
            h1: ''
        }
    },
    mounted() {
        let that = this;
        pubsub.listen('item', function(data) {
            that.h1 = data;
        })
    },
    methods: {}
}
</script>

<style scoped lang="scss">
</style>
