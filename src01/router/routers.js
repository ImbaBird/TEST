//
// /**
//  * iview-admin中meta除了原生参数外可配置的参数:
//  * meta: {
//  *  title: { String|Number|Function }
//  *         显示在侧边栏、面包屑和标签栏的文字
//  *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
//  *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
//  *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
//  *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
//  *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
//  *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
//  *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
//  *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
//  * }
//  */
//
// export default[
//   {
//     path: '/test',
//     name: 'HelloWorld',
//     title:"",
//     component: resolve => require(['@/components/HelloWorld.vue'], resolve),  //组件懒加载
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     title:"登录",
//     component: resolve => require(['@/components/Login.vue'], resolve),  //组件懒加载
//   },
//   {
//     path: '/',
//     name: 'Layout',
//     redirect: '/view1',
//     title:"",
//     component: resolve => require(['@/components/Layout.vue'], resolve),  //组件懒加载
//     children: [
//       {
//         path: '/view1',
//         name: 'View1',
//         meta:{
//           title:"轮播",
//         },
//
//         component: resolve => require(['@/view/view1/view1.vue'], resolve),  //组件懒加载
//       },
//       {
//         path: '/view2',
//         name: 'View2',
//         meta:{
//           title:"Form",
//         },
//
//         component: resolve => require(['@/view/view2/view2.vue'], resolve),  //组件懒加载
//       },
//       {
//         path: '/view3',
//         name: 'View3',
//         meta:{
//           title:"Icon",
//         },
//
//         component: resolve => require(['@/view/view3/view3.vue'], resolve)  //组件懒加载
//       },
//       {
//         path: '/view4',
//         name: 'View4',
//         meta:{
//           title:"Table",
//           hideInMenu: false,
//         },
//
//         component: resolve => require(['@/view/view4/view4.vue'], resolve)  //组件懒加载
//       },
//       {
//         path: '/view5',
//         name: 'View5',
//         meta:{
//           title:"List",
//           hideInMenu: true,
//         },
//
//         component: resolve => require(['@/view/view5/view5.vue'], resolve),  //组件懒加载
//       },
//       {
//         path: '/view6',
//         name: 'View6',
//         title:"DDD",
//         component: resolve => require(['@/view/view6/view6.vue'], resolve),  //组件懒加载
//       },
//       {
//         path: '/view7',
//         name: 'View7',
//         title:"Down",
//         component: resolve => require(['@/view/view7/view7.vue'], resolve),  //组件懒加载
//       },
//       {
//         path: '/view8',
//         name: 'View8',
//         title:"Down",
//         component: resolve => require(['@/view/view8/view8.vue'], resolve),  //组件懒加载
//       },
//       {
//         path: '/view9',
//         name: 'View9',
//         component: resolve => require(['@/view/view9/view9-1.vue'], resolve),  //组件懒加载
//         meta:{
//           title: "xx",
//           hideInMenu: true,
//         },
//       },
//       {
//         path: '/view10',
//         name: 'View10',
//         component: resolve => require(['@/view/view10/view10.vue'], resolve),  //组件懒加载
//         meta:{
//           title: "导航",
//           hideInMenu: true,
//         },
//       },
//     ],
//   },
// ]
