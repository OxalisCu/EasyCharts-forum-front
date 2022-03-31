<script setup>
import Menu from './components/menu/Menu.vue'
</script>

<template>
  <Menu />
  <router-view class="content"></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background-color: #fff;
}

.content {
  width: 1100px;
  margin: 15px auto;
}
</style>
