import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: {
      title: 'home'
    },
    redirect: '/main',
  },
  {
    path: '/main',
    component: () => import('../components/Layout'),
    meta: {
      title: '八大菜系介绍'
    },
    children: [
      {
        path: '/main/luCai',
        component: () => import('../view/view2/view2'),
        meta: {
          title: '鲁菜'
        },
        children: [
          {
            path: '/main/luCai/history',
            component: () => import('../view/view3/view3'),
            meta: {
              title: '发展历史'
            },
            children: [
              {
                path: '/main/luCai/history/qinAndHan',
                component: () => import('../view/view4/view4'),
                meta: {
                  title: '秦汉时期'
                }
              },
              {
                path: '/main/luCai/history/northernWei',
                component: () => import('../view/view5/view5'),
                meta: {
                  title: '北魏时期'
                }
              }
            ]
          },
          {
            path: '/main/luCai/features',
            component: () => import('../view/view6/view6'),
            meta: {
              title: '风味特色'
            }
          }
        ]
      },
      {
        path: '/main/chuanCai',
        component: () => import('../view/view7/view7'),
        meta: {
          title: '川菜'
        },
        children: [
          {
            path: '/main/chuanCai/introduction',
            component: () => import('../view/view8/view8'),
            meta: {
              title: '川菜概论'
            }
          },
          {
            path: '/main/chuanCai/history',
            component: () => import('../view/view9/view9-1'),
            meta: {
              title: '发展历史'
            }
          }
        ]
      }
    ]

  },


]

const router = new VueRouter({
  routes
})

export {router, routes}
