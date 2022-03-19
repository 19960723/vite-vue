import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "./styles/index.scss"
import globalCom from  "/@/components/globalComponents.ts"
import * as Icons from '@element-plus/icons-vue'
const app = createApp(App);

for (let i in Icons) {
  // 注册全部组件
  app.component(`el-${i}`, Icons[i])
  
}

app
.use(router)
.use(store)
.use(globalCom)
.mount('#app')
