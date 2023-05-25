import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
