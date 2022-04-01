<script setup>
import Menu from './components/menu/Menu.vue'
</script>

<template>
  <Menu class="menu"/>
  <el-row class="content" justify="center">
    <el-col :span="17">
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
  box-shadow: 0px 0px 3px #ccc;
  z-index: 999;
  background-color: #fff;
}

.content {
  padding-top: 60px;
  /*background-color: #f4f4f4;*/
}
</style>
