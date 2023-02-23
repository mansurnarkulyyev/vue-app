import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss';
import router from './router.js'

createApp(App).use(router).mount('#app')