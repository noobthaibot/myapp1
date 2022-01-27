import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import MyInput from '@/components/ui/MyInput.vue'
import MyDialog from '@/components/ui/MyDialog.vue'

const app = createApp(App)
app.use(router)
app.component('MyInput', MyInput)
app.component('MyInput', MyDialog)

app.mount('#app')
