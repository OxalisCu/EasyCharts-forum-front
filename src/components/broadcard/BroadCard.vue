<script setup>

</script>

<template>
  <div class="broad-card card-hover card-border">
    <div class="tip">
      <Icon icon="ri:broadcast-fill"></Icon>
      <span>公告</span>
    </div>
    <div class="broad-list">
      <div class="item">
        <div class="title">
          新人反馈指南
        </div>
        <el-row class="msg">
          <el-col class="username" :span="12">
            酢浆草Cu
          </el-col>
          <el-col class="post-time" :span="12">
            2019-12-01
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.broad-card {
  box-sizing: border-box;
  padding: 10px 20px;
  background-color: #fff;
  width: 100%;
}

.tip {
  line-height: 40px;
  border-bottom: 1px solid #999;
}

.item {
  padding: 10px 0;
  border-radius: 5px;
}

.item:hover {
  background-color: #eee;
}
</style>
