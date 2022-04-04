import { createApp } from 'vue'
import { store } from './store'

import App from './App.vue'
import Router from './router'

const app = createApp(App)

const plugins = [
    Router,
    store
]

plugins.forEach(plugin => {
    app.use(plugin)
})

app.mount('#app')

