import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueNativeSock from 'vue-native-websocket'
Vue.use(VueNativeSock, 'ws://localhost:8028/ws/chat', { store: store, format: 'json'})

//import '../node_modules/reset-css/reset.css'

Vue.config.productionTip = false;

new Vue({
  router,
    store,
  render: h => h(App)
}).$mount('#app');
