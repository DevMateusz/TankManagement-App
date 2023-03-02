import { createApp } from 'vue'
import store from './store/index'
import router from './router/index'
import App from './App.vue'
import './assets/main.css'


createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
