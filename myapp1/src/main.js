import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import MyInput from '@/components/ui/MyInput.vue'

const app = createApp(App)
app.use(router)
app.component('MyInput', MyInput)

app.mount('#app')
