/*
 * @Author: shengchao.yuan
 * @Date: 2021-01-04 09:22:09
 * @LastEditors: shengchao.yuan
 * @LastEditTime: 2021-06-03 17:26:12
 * @Description: file content
 */
import router from './router'
import NProgress from 'nprogress' // 页面加载进度条
import 'nprogress/nprogress.css' // 页面加载进度条样式
import getPageTitle from '@/utils/get-page-title'
import store from '@/store'
NProgress.configure({ showSpinner: false }) // 初始化进度条的默认设置
// 取消上一个页面的请求
store.commit('cancelToken/clearCancelToken')
router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = getPageTitle(to.meta.title)
  next()
})

router.afterEach(() => {
  NProgress.done()
})
