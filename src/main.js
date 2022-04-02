import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import {Icon} from '@iconify/vue'
import './styles/index.css'
import {createPinia} from "pinia";

const app = createApp(App)
const pinia = createPinia()

app.config.productionTip = false;

app.config.errorHandler = function (err) {
  console.log(err)
}

app.config.warnHandler = function (warn) {
  console.log(warn)
}

app
  .component("Icon", Icon)
  .use(ElementPlus)
  .use(router)
  .use(pinia)
  // .use(directives)
  .mount('#app')