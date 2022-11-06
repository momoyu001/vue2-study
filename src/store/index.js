/*
 * @description: 描述说明
 * @author: shengchao.yuan
 * @Date: 2020-12-01 17:23:35
 * @LastEditTime: 2020-12-25 14:49:14
 * @LastEditors: shengchao.yuan
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import plugins from './plugins/presist'
Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  plugins: [...plugins]
})

export default store
