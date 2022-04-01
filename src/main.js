import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import ElementPlus from 'element-plus'
import {Icon} from '@iconify/vue'
import './styles/index.css'
import directives from './directives/index.js'
import store from './store/index.js'

const app = createApp(App)

app.config.productionTip = false;

app
  .component("Icon", Icon)
  .use(ElementPlus)
  .use(router)
  // .use(directives)
  .use(store)
  .mount('#app')