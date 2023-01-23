import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import routes from './routes/routes';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({ history: createWebHashHistory(), routes });

createApp(App).use(router).mount('#app');