import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import App from './App.vue'
import 'uno.css'

const router = createRouter({
  routes,
  history: createWebHistory()
})

createApp(App).use(router).mount('#app')
