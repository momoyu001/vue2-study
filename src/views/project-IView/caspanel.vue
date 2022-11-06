<template>
    <span>
        <ul
            v-if="data && data.length"
            :class="[prefixCls + '-menu']"
        >
            <Casitem
                v-for="item in data"
                :key="item"
                :prefix-cls="prefixCls"
                :data="item"
                :tmp-item="tmpItem"
                @click.native.stop="handleClickItem(item)"
                @mouseenter.native.stop="handleHoverItem(item)"
            />
        </ul>
        <Caspanel
            v-if="sublist && sublist.length"
            :prefix-cls="prefixCls"
            :data="sublist"
            :disabled="disabled"
            :trigger="trigger"
            :change-on-select="changeOnSelect"
        />
    </span>
</template>

<script>
import Casitem from './casitem.vue';

export default {
    name: 'Caspanel',
    components: {
        Casitem
    },
    filters: {},
    mixins: [],
    model: {},
    props: {
        
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
    methods: {}
}
</script>

<style scoped lang="scss">
</style>
