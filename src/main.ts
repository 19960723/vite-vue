import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";

import globalCom from  "/@/components/globalComponents.ts"
import store from './store'
// import "./styles/index.scss"
import * as Icons from '@element-plus/icons-vue'
const app = createApp(App);

for (let i in Icons) {
  // 注册全部组件
  app.component(`el-${i}`, (Icons as any)[i])
}

app
.use(router)
.use(createPinia())
.use(globalCom)
.mount('#app')
