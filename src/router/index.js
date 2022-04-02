import { createRouter, createWebHashHistory} from 'vue-router';
import routes from './router.config';
import {clearPending} from "../api/axios";

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 在路由跳转之前，清除所有请求
router.beforeEach((to, from, next) => {
  clearPending()
  next()
})

export default router