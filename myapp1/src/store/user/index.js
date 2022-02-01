<<<<<<< HEAD
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

export default {
  namespaced: true,
  state () {
    return {
      email: '',
      uid: ''
    }
  },
  getters: {
    isAuth (state) {
      return state.uid !== ''
=======
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
>>>>>>> 8937144cfd887e0c4e6b5d5249a55e11e9a480fc
    }
  },
  mutations: {

  },
  actions: {
<<<<<<< HEAD
    login (context, data) {
      const auth = getAuth()
      return signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          context.state.uid = userCredential.user.uid
          return 'ok'
        })
        .catch((error) => {
          const errorMessage = error.message
          console.error(errorMessage)
        })
    },
    sign (context, data) {
      const auth = getAuth()
      return createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          context.state.uid = userCredential.user.uid
          return 'ok'
        })
        .catch((error) => {
          const errorMessage = error.message
          console.error(errorMessage)
          return 'error'
          // ..
        })
    },
    logout (context) {
      context.state.email = ''
      context.state.uid = ''
    }

  }

=======

  }
>>>>>>> 8937144cfd887e0c4e6b5d5249a55e11e9a480fc
}
