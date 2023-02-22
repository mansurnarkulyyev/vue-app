import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import './assets/scss/index.scss';
// import VueRouter from 'vue-router';
import router from './router.js'

// Vue.use(VueRouter);

createApp(App).use(router).mount('#app')