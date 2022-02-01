import {
  createApp
} from 'vue'
import {
  initializeApp
} from 'firebase/app'

import App from './App.vue'
import router from './router'
import store from './store'
import MyInput from '@/components/ui/MyInput.vue'
import MyDialog from '@/components/ui/MyDialog.vue'
import MyRadiobutton from '@/components/ui/MyRadiobutton.vue'
import MySelect from '@/components/ui/MySelect.vue'
<<<<<<< HEAD

const firebaseConfig = {
  apiKey: 'AIzaSyDroAdg79XwaNyiku3AnFjsU72xRtt50c0',
  authDomain: 'lazurenko-app.firebaseapp.com',
  projectId: 'lazurenko-app',
  storageBucket: 'lazurenko-app.appspot.com',
  messagingSenderId: '1085136761704',
  appId: '1:1085136761704:web:6b634e745da88035f5dcdd',
  measurementId: 'G-ND1LLVS1CP'
}

initializeApp(firebaseConfig)
=======
>>>>>>> 8937144cfd887e0c4e6b5d5249a55e11e9a480fc

const app = createApp(App)

app.use(router)
app.use(store)
app.component('MyInput', MyInput)
app.component('MyInput', MyDialog)
app.component('MyRadiobutton', MyRadiobutton)
app.component('MySelect', MySelect)

app.mount('#app')
