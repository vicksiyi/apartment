import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import { components, plugins } from './plugins/element'

const app = createApp(App);

// 按需引入组件
components.forEach(component => {
    app.component(component.name, component)
})

plugins.forEach(plugin => {
    app.use(plugin)
})

app.use(store).use(router).mount('#app')
