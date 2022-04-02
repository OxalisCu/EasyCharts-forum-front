<script setup>

</script>

<template>
  <div class="create-card card-border card-hover">
    <div class="tip">
      <Icon class="icon" icon="gridicons:create"></Icon>
      <span>发布</span>
    </div>
    <el-button class="create-post" type="primary">
      <Icon class="icon" icon="system-uicons:write"></Icon>
      <span>发表帖子</span>
    </el-button>
    <div class="desc">
      <span>反馈、教程、闲聊、新功能</span>
      <Icon class="icon" icon="akar-icons:chevron-right"></Icon>
    </div>
  </div>
</template>

<style scoped>
.create-card {
  padding: 10px 20px;
}

.tip {
  padding: 10px 0;
  border-bottom: 1px solid #999;
  display: flex;
  align-items: center;
}

.tip .icon {
  font-size: 18px;
  margin-right: 5px;
}

.tip span {
  font-size: 16px;
}

.create-post {
  display: flex;
  margin: 15px 0 10px;
  width: 100%;
  height: 40px;
  font-size: 16px;
}

.create-post .icon {
  margin-right: 10px;
  font-size: 18px;
}

.desc {
  color: #666;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.desc .icon {
  margin-left: 5px;
}
</style>