import { defineConfig } from 'vite'
// import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // webstorm 不支持
  // resolve: {
  //   alias:{
  //     '@': path.resolve('./src')//别名设置
  //   }
  // },
  css: {
    // 按需导入时自定义主题
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/styles/element.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // 自动导入 ELement UI 组件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({importStyle: 'sass'})],
    }),
  ],
})
