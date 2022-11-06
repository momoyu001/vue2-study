import Vue from "vue";
import "styles/common/index.scss"; // global css

import "@/utils/rem";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import App from "./App";
import store from "./store";
import router from "./router";

import "./icons";
import "./permission"; // permission control
import defaultSettings from "./settings";
Vue.prototype.$setting = defaultSettings;
Vue.config.productionTip = false;

// 注册了一个空vue实例：只需要在bus初始化时获取一次，任何时间 、任何组件就可以从中直接使用了----进阶版：使用vuex
let bus = new Vue();

// 全局组件注册
Vue.component("my-component", {
  template: `<div class="custom-class" @click="test">我的自定义组件--全局组件</div>`,
  methods: {
    test() {
      // 通过 bus 把事件发出去
      bus.$emit("on-message", "来自全局子组件的数据");
    },
  },
});

// 全局注册指令
Vue.directive("focus", {
  // 指令选项
});

// 引入echarts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;
import "echarts/lib/chart/graph";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

// 插件
import VueBus from "./views/plugins/vue-bus.js";
Vue.use(VueBus);
// 使用时：this.$bus.$emit()  this.$bus.on

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
  mounted() {
    // 监听了 bus 的事件
    bus.$on("on-message", function (msg) {
      console.log(msg);
    });
  },
});
