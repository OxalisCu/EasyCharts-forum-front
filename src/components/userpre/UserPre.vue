<script setup>

</script>

<template>
  <el-popover placement="bottom" :width="400" trigger="hover">
    <template #reference>
      <el-avatar :size="38" src="https://empty" @error="errorHandler">
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </template>
    <p>
      Seeeeeee me!
    </p>
  </el-popover>
</template>