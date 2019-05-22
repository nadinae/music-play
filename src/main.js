// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/js/px2rem.js'
import './common/css/common.css'
import VueLazyload from 'vue-lazyload'
import store from './store'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  loading: require('./common/image/icon.png'),
})

Vue.config.productionTip = false
Vue.use(MintUI)
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
