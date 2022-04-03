<script setup>
import {ref} from "vue"
import defaultAvatar from '../../assets/default-avatar.jpg'

const avatar = ref('')
const isLogin = ref(false)
</script>

<template>
  <el-popover
    class="user-pre card-border card-hover"
    placement="bottom"
    trigger="hover"
    v-if="isLogin"
  >
    <template #reference>
      <el-avatar class="avatar" :src="avatar">
        <el-image :src="defaultAvatar" />
      </el-avatar>
    </template>
    <div class="pre">
      <div class="user-page link-text">个人主页</div>
      <div class="log-out">退出</div>
    </div>
  </el-popover>
  <div class="not-login link-text">
    未登录
  </div>
</template>

<style scoped>
.avatar {
  border: 1px solid #eee;
  width: 40px;
  align-self: center;
}

.pre {
  box-sizing: border-box;
  padding: 5px 0px;
  text-align: center;
}

.user-page,
.log-out {
  padding: 5px 0px;
  cursor: pointer;
  font-weight: bold;
}

.log-out:hover {
  color: var(--el-color-error)
}

.not-login {
  width: 45px;
  cursor: pointer;
}
</style>