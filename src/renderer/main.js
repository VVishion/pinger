import Vue from 'vue'

import Window from './Window'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { Window },
  router,
  store,
  template: '<Window/>'
}).$mount('#window')
