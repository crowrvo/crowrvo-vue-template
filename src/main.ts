import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import App from './App.vue'

const app = createApp(App)

const head = createHead()
app.use(head)

app.use(createPinia())

app.mount('#app')
