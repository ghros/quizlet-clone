import { createApp } from 'vue'
import 'icons/styles.css'
import './assets/sass/styles.sass'
import './assets/sass/icons.sass'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
