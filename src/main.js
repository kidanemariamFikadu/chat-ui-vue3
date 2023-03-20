import { createApp } from 'vue'
import VTooltip from 'v-tooltip'
import App from './App.vue'
import '@/assets/css/chat.css'

const app = createApp(App)

app.use(VTooltip)

createApp(App).mount('#app')