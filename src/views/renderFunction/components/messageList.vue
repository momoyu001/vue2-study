<template>
    <div class="messsage-list-frame">
        <div class="message-box">
            <v-input v-model="username"></v-input>
            <v-textarea v-model="message"></v-textarea>
            <button class="btn-class" style="margin-top: 10px" @click="handleSend">发布</button>
        </div>
        <list :list="list" @reply="handleReply" />
    </div>
</template>

<script>
import {
    vInput,
    vTextarea,
    list
} from './messageList.js';

export default {
    name: 'messageList',
    components: {
        vInput,
        vTextarea,
        list
    },
    filters: {},
    mixins: [],
    model: {},
    props: {},
    data() {
        return {
            username: '',
            message: '',
            list: []
        }
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
        // 发布按钮
        handleSend() {
            if (this.username === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入昵称'
                })
                return
            }

            if (this.message === '') {
                this.$message({
                    type: 'warning',
                    message: '请输入留言内容'
                })
                return
            }
            let data = {
                name: this.username,
                message: this.message
            }

            console.log(data);
            this.list.push(data);

            this.message = '';
        },
        // 回复按钮
        handleReply(index) {
            let name = this.list[index].name;
            this.message = '回复@' + name + '：';
            this.$refs.message.focus();
        }
    }
}
</script>

<style scoped lang="scss">
</style>
