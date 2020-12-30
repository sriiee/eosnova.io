import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents);

Vue.prototype.$EventBus = new Vue();

require("./assets/style.css");
require("./assets/media.css");


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
