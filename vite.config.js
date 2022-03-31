import { defineConfig } from 'vite'
// import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // webstorm 不支持
  // resolve: {
  //   alias:{
  //     '@': path.resolve('./src')//别名设置
  //   }
  // },
})
