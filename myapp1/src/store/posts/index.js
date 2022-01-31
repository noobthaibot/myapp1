export default {
  namespaced: true,
  state: {
    posts: []
  },
  getters: {
    count (state) {
      return state.posts.lenght
    }
  },
  mutations: {

  },
  actions: {

  }
}
