import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import MyInput from '@/components/ui/MyInput.vue'
import MyDialog from '@/components/ui/MyDialog.vue'
import MyRadiobutton from '@/components/ui/MyRadiobutton.vue'
import MySelect from '@/components/ui/MySelect.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.component('MyInput', MyInput)
app.component('MyInput', MyDialog)
app.component('MyRadiobutton', MyRadiobutton)
app.component('MySelect', MySelect)

app.mount('#app')
