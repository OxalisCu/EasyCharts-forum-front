<script setup>
import {ref} from "vue";

const msgNum = ref(10)
</script>

<template>
  <el-badge class="msg click-btn" :value="msgNum" :max="99">
    <Icon class="icon" icon="ci:notification" />
  </el-badge>
</template>

<style scoped>
.msg {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
}

.icon {
  font-size: 22px;
  color: #666;
  outline: none;
}
</style>