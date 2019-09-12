import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/style.css'
import '@/assets/css/media.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    // localStorage.clear()
    console.log(localStorage)
    this.$store.dispatch('GET', 'products')
    this.$store.dispatch('GET', 'cats')
    this.$store.dispatch('GET_EXCEPTION', 'basket_list')
    this.$store.dispatch('GET_EXCEPTION', 'favorite_list')
  },
}).$mount('#app')
