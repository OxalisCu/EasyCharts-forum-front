<script setup>

</script>

<template>
  <el-popover class="msgbox" placement="bottom" :width="300" trigger="hover">
    <template #reference>
      <el-badge class="msg" :value="200" :max="99">
        <Icon class="icon" icon="ci:notification" />
      </el-badge>
    </template>
    <p>
      msg
    </p>
  </el-popover>
</template>

<style scoped>
.msgbox {
}

.icon {
  font-size: 22px;
  color: #666;
  outline: none;
}
</style>