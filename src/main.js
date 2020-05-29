import Vue from 'vue'
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import store from "@/store/store";

export const bus = new Vue();

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
