import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import(/* webpackChunkName: "about" */ './views/Delivery.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "about" */ './views/Contacts.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/profile.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/Product.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import(/* webpackChunkName: "about" */ './views/Favorite.vue')
    },
    {
      path: '/all-products',
      name: 'AllProduct',
      query: {
        page: null
      },
      component: () => import(/* webpackChunkName: "about" */ './views/All.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import(/* webpackChunkName: "about" */ './views/Registration.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import(/* webpackChunkName: "about" */ './views/Thanks.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  } 
})
