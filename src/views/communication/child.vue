<template>
  <div>
    <p>第一行</p>
    <slot>默认插槽</slot>
    <slot name="hasName"></slot>
    <slot name="areaName" data="作用域插槽......."></slot>
    <p>最后一行</p>
    <p>foo:  {{ foo }}</p>
    <p>child的$attrs: {{ $attrs }}</p>

    <p class="area-title parting-line" style="margin-top: 10px">
      provide / inject
    </p>
    <p>{{ test }}</p>
    <p>{{ check }}</p>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    foo: {
      type: String,
      default: null
    },
    boo: {
      type: String,
      default: null
    },
    coo: {
      type: String,
      default: null
    }
  },
  watch: {
    'test.test': {
      handler(n, o) {
        console.log(o)
        console.log(n)
      },
      deep: true
    }
  },
  // 写法一
  inject: ['test', 'check'],
  // 写法二,
  // inject: {
  //   test: {
  //     default: () => {}
  //   },
  //   check: {
  //     default: () => {}
  //   }
  // },
  mounted() {
    console.log(this.$attrs)
    console.log(this.$listeners)
    console.log(this.test.test)
  }
}
</script>
