import Vue from 'vue'
import Router from 'vue-router'
// import vueRsource from 'vue-resource'

// Vue.use(vueRsource);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve),  //组件懒加载
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/Login.vue'], resolve),  //组件懒加载
    },
    {
      path: '/',
      name: 'Layout',
      redirect: '/view1',
      component: resolve => require(['@/components/Layout.vue'], resolve),  //组件懒加载
      children: [
        {
          path: '/view1',
          name: 'View1',
          component: resolve => require(['@/view/view1/view1.vue'], resolve),  //组件懒加载
        },
        {
          path: '/view2',
          name: 'View2',
          component: resolve => require(['@/view/view2/view2.vue'], resolve),  //组件懒加载
        },
        {
          path: '/view3',
          name: 'View3',
          component: resolve => require(['@/view/view3/view3.vue'], resolve)  //组件懒加载
        },
        {
          path: '/view4',
          name: 'View4',
          component: resolve => require(['@/view/view4/view4.vue'], resolve)  //组件懒加载
        },
        {
          path: '/view5',
          name: 'View5',
          component: resolve => require(['@/view/view5/view5.vue'], resolve)  //组件懒加载
        },
        {
          path: '/view6',
          name: 'View6',
          component: resolve => require(['@/view/view6/view6.vue'], resolve)  //组件懒加载
        },
        {
          path: '/view7',
          name: 'View7',
          component: resolve => require(['@/view/view7/view7.vue'], resolve)  //组件懒加载
        },
        {
          path: '/view8',
          name: 'View8',
          component: resolve => require(['@/view/view8/view8.vue'], resolve)  //组件懒加载
        },
        {
          path: '/view9',
          name: 'View9',
          component: resolve => require(['@/view/view9/view9-1.vue'], resolve)  //组件懒加载
          // meta:{
          //   title:"xx"
          // }
        },
      ],
    },
  ]
})
