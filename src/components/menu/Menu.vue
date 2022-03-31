<script setup>
import Logo from '../logo/Logo.vue'
import SearchBox from "../searchbox/SearchBox.vue";
</script>

<template>
  <div class="menu">
    <Logo />
    <SearchBox />
    <a-tooltip class="avatar" title="Ant User" placement="top">
      <a-avatar>
        Ox
      </a-avatar>
    </a-tooltip>
  </div>
</template>

<style scoped>
.menu {
  height: 60px;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: #ddd 0px 0px 10px;
}

.menu .avatar {
  width: 40px;
  height: 40px;
}
</style>