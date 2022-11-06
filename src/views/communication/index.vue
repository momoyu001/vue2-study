<template>
<!-- 测试父子组件传 -->
  <div>
    <!-- 子组件 -->
    <div class="area-title parting-line">父子组件传值</div>
    <child :foo="foo">
      <template v-slot:hasName>
        <p>
          具名插槽
        </p>
      </template>
      <template v-slot:areaName="areaName">
        <p>{{ '123' + areaName.data }}</p>
      </template>
    </child>

    <p @click="test = !test" class="btn-class">响应式测试click</p>
  </div>
</template>

<script>
import Child from './child.vue';

export default {
  name: 'Parent',
  components: { Child },
  data() {
    return {
      a: '父组件的a',
      b: '父组件的b',
      foo: 'foo1',
      boo: 'boo1',
      coo: 'coo1',
      test: false,
    }
  },
  // 写法一
  // provide: {
  //   test: '123',
  //   check: '123'
  // },
  // 写法二
  provide() {
    return {
      test: 'test测试',
      check: 'ckeck测试',
      all: this
    }
  },
  methods: {
    func1() {
      console.log('父组件的func1')
    }
  }
}
</script>

<style>

</style>
