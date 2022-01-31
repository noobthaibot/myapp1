function isValidToken (token) {
  return token !== ''
}

export default {
  namespaced: true,
  state: {
    token: '',
    name: ''
  },
  getters: {
    isAuth (state) {
      return isValidToken(state.token)
    }
  },
  mutations: {

  },
  actions: {

  }
}
