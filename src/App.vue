<script setup>
import Menu from './components/menu/Menu.vue'
</script>

<template>
  <Menu class="menu"/>
  <el-row class="content" justify="center">
    <el-col :xs="22" :sm="22" :md="22" :lg="18" :xl="15">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.menu {
  height: 60px;
  width: 100%;
  position: fixed;
  box-shadow: 0 0 3px #ccc;
  z-index: 999;
  background-color: #fff;
}

.content {
  padding-top: 60px;
  /*background-color: #f4f4f4;*/
}
</style>
