import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { setupElementPlus } from './plugins/element-plus'

const app = createApp(App);

// 使用element-plus插件
// setupElementPlus(app);

app
.use(router)
.use(store)
.mount('#app')
