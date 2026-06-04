import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'yangi',
          component: () => import ('../components/OurComp/OurCompHome.vue')
        },
        {
          path: 'taklif',
          component: () => import ('../components/OurComp/OurCompPustoy.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('../views/RadioView.vue')
    },
    {
      path: '/props/:id',
      name: 'props',
      component: () => import('../views/PropsView.vue'),
      children: [
        {
          path: '',
          name: 'show',
          component:() => import('../components/ShowComp/ShowCompMuallifning.vue')
        },
        {
          path: 'poxojie',
          name: 'poxojie',
          component:() => import('../components/ShowComp/ShowCompPoxojie.vue')
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/PhotoView.vue'),
      children: [
        {
          path: '',
          name: 'task',
          component: () => import('../components/PhotoComp/PhotoComp-task.vue')
        },
        {
          path: '/message',
          name: 'message',
          component: () => import('../components/PhotoComp/PhotoComp-message.vue')
        },
        {
          path: '/payments',
          name: 'payments',
          component: () => import('../components/PhotoComp/PhotoComp-payments.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../components/PhotoComp/PhotoComp-settings.vue')
        },
        {
          path: '/business',
          name: 'business',
          component: () => import('../components/PhotoComp/PhotoComp-business.vue')
        }
      ]
    }
  ]
})

export default router
