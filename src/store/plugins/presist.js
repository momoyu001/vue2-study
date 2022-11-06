/*
 * @description: 直接在对应的modules中配置modules文件夹中的文件名即可
 * @author: shengchao.yuan
 * @Date: 2020-12-25 14:47:53
 * @LastEditTime: 2021-06-03 16:38:33
 * @LastEditors: shengchao.yuan
 */
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: []
})

export default [
  vuexLocal.plugin
]
