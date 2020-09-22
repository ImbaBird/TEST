import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App'; // 路由挂载
import Router from './router'; // 路由列表
// import iView from 'iview';
// import 'iview/dist/styles/iview.css'; // 使用 CSS
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import store from './store'

Vue.use(VueRouter);
// Vue.use(iView);

Vue.use(ViewUI);

// Vue.config.productionTip = false
// 路由配置
// let router = new VueRouter();
// router.map(Router);
// router.start(App, '#app');

new Vue({
  el: '#app',
  router: Router,
  store,
  components: {App}, // 映射组件标签
  template: '<App/>' //指定需要渲染到页面的模板
})
