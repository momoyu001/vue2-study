const install = function (Vue) {
    // install方法的参数，Vue构造器
    const Bus = new Vue({
        methods: {
            emit(event, ...args) {
                this.$emit(event, ...args);
            },
            on(event, callback) {
                this.$on(event, callback);
            },
            off(event, callback) {
                this.$off(event, callback);
            }
        }
    });

    // 添加到了prototype上，便于使用
    Vue.prototype.$bus = Bus;
};

export default install;