import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {router} from './router'
import {IconFont} from './iconfont'

const Vue = createApp(App)

Vue.config.productionTip = false;

Vue
  .use(Antd)
  .use(router)
  .component('icon-font', IconFont)
  .mount('#app')
