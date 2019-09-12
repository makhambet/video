import Vue from 'vue'
import Vuex from 'vuex'
import Posts from './store/Posts'
import Gets from './store/Gets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Gets,
    Posts
  }
})
