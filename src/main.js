import Vue from 'vue'
import App from './App.vue'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// router
import VueRouter from 'vue-router';
import router from './router'


Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router:router,
  render: h => h(App),
}).$mount('#app')
