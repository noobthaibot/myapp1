import { createStore } from 'vuex'
import postsStore from './posts/index'
import userStore from './user/index'

export default createStore({
  modules: {
    posts: postsStore,
    user: userStore
  },
  state: {
    likes: 0
  },
  getters: {
    likesCaption (state) {
      return `Всего лайков: ${state.likes}`
    }
  },
  mutations: {
    incLikes (state) {
      state.likes++
    }
  },
  actions: {

  }
})
