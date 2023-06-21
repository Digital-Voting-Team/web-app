import {createApp} from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import i18n from "./i18n"

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
