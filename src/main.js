// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRecyclerviewNew from 'vue-recyclerview'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(VueRecyclerviewNew)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }

}).$mount('#app')
