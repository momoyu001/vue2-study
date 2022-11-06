<template>
    <div></div>
</template>

<script>
export default {
    name: 'cascader',
    components: {},
    filters: {},
    mixins: [],
    model: {},
    props: {
        data: {
            type: Array,
            default: () => {
                return []
            }
        },
        value: {
            type: Array,
            default: () => {
                return []
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: true
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        size: {
            validator: (value) => {
                return oneOf(value, ['small', 'large']);
            }
        },
        trigger: {
            validator: (value) => {
                return oneOf(value, ['click', 'hover']);
            },
            default: 'click'
        },
        changeOnSelect: {
            type: Boolean,
            default: false
        },
        renderFormat: {
            type: Function,
            default(label) {
                return label.join('/');
            }
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
    methods: {}
}
</script>

<style scoped lang="scss">
</style>
