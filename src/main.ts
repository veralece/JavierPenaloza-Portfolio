import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import routes from './routes/routes';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount('#app');