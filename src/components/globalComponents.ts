import { App } from 'vue'
import menu from './menu'
import chooseArea from './chooseArea'

const components = [
  menu,
  chooseArea
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}