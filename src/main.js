import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App).use(router).mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)