import Vue from "vue";
import Router from "vue-router";
import store from "../store";

Vue.use(Router);
export const constantRoutes = [
  {
    path: "/",
    redirect: "/communication",
    // component: () => import('@/views/index')
  },
  {
    path: "/communication",
    name: "communication",
    meta: { title: "父子组件传值" },
    component: () => import("@/views/communication"),
  },
  {
    path: "/other",
    name: "other",
    meta: { title: "vue测试" },
    component: () => import("@/views/other"),
  },
  {
    path: "/classAndStyle",
    name: "classAndStyle",
    meta: { title: "动态绑定class和style" },
    component: () => import("@/views/classAndStyle"),
  },
  {
    path: "/directive",
    name: "directive",
    meta: { title: "内置指令" },
    component: () => import("@/views/directive"),
  },
  {
    path: "/formModel",
    name: "formModel",
    meta: { title: "form表单和v-model" },
    component: () => import("@/views/formModel"),
  },
  {
    path: "/customCom",
    name: "customCom",
    meta: { title: "组件" },
    component: () => import("@/views/customCom"),
  },
  {
    path: "/customDirective",
    name: "customDirective",
    meta: { title: "自定义指令" },
    component: () => import("@/views/customDirective"),
  },
  {
    path: "/renderFunction",
    name: "renderFunction",
    meta: { title: "render函数" },
    component: () => import("@/views/renderFunction"),
  },
  {
    path: "/relationGraph",
    name: "relationGraph",
    meta: { title: "关系图" },
    component: () => import("@/views/relationGraph"),
  },
  {
    path: "/echarts",
    name: "echarts",
    meta: { title: "echarts图" },
    component: () => import("@/views/echarts"),
  },
  {
    path: "/webpack",
    name: "webpack",
    meta: { title: "webpack" },
    component: () => import("@/views/webpack"),
  },
  {
    path: "/plugins",
    name: "plugins",
    meta: { title: "plugins" },
    component: () => import("@/views/plugins"),
  },
  {
    path: "/elementUI",
    name: "elementUI",
    meta: { title: "elementUI" },
    component: () => import("@/views/elementUI"),
  },
  {
    path: "/publish/:id",
    name: "publish",
    meta: { title: "发布订阅模式" },
    component: () => import("@/views/publish"),
    props: {
      testRouteProp1: true,
      testRouteProp2: true,
    },
  },
  {
    path: "/testDom/:id",
    name: "testDom",
    meta: { title: "testDom" },
    component: () => import("@/views/testDom/testDom.vue"),
    props: true,
  },
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

store.dispatch("routes/addRoutes", constantRoutes);

const router = createRouter();

export default router;
