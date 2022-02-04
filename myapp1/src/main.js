import {
  createApp
} from 'vue'
import {
  initializeApp
} from 'firebase/app'

import { getDatabase, ref, onValue } from 'firebase/database'
import App from './App.vue'
import router from './router'
import store from './store'
import MyInput from '@/components/ui/MyInput.vue'
import MyDialog from '@/components/ui/MyDialog.vue'
import MyRadiobutton from '@/components/ui/MyRadiobutton.vue'
import MySelect from '@/components/ui/MySelect.vue'

const firebaseConfig = {
  apiKey: 'AIzaSyDroAdg79XwaNyiku3AnFjsU72xRtt50c0',
  authDomain: 'lazurenko-app.firebaseapp.com',
  projectId: 'lazurenko-app',
  databaseURL: 'https://lazurenko-app-default-rtdb.europe-west1.firebasedatabase.app/',
  storageBucket: 'lazurenko-app.appspot.com',
  messagingSenderId: '1085136761704',
  appId: '1:1085136761704:web:6b634e745da88035f5dcdd',
  measurementId: 'G-ND1LLVS1CP'
}

initializeApp(firebaseConfig)
const db = getDatabase()
const postsRef = ref(db, '/posts')

onValue(postsRef, (snapshot) => {
  console.log(snapshot.val())
  store.commit('posts/clear')
  const postsObject = snapshot.val()
  console.log(postsObject)
  for (const [value] of Object.entries(postsObject)) {
    store.commit('posts/addPost', value)
  }
  // snapshot.val().forEach(item => store.commit('posts/addPost'), item)
})

const app = createApp(App)

app.use(router)
app.use(store)
app.component('MyInput', MyInput)
app.component('MyInput', MyDialog)
app.component('MyRadiobutton', MyRadiobutton)
app.component('MySelect', MySelect)

app.mount('#app')
