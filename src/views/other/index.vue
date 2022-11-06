<template>
    <!-- vue测试 -->
    <div>
        <div class="area-title parting-line">测试页面</div>
        <p v-html="htmlTest"></p>
        <p>{{ htmlTest }}</p>
        <p v-pre>{{ htmlTest }}</p>

        <div class="area-title-parting-line">小练习</div>
    </div>
</template>

<script>
export default {
    name: 'other',
    data() {
        return {
            htmlTest: `<p>测试不编译</p>`
        }
    }
}
</script>