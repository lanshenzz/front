// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import VueLazyload from 'vue-lazyload'
import G6 from '@antv/g6';

Vue.use(VueLazyload,{
  loading:require('@/assets/img/show1.jpg')
})
Vue.use(ElementUI);
axios.defaults.baseURL = '/api';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$G6 = G6;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
