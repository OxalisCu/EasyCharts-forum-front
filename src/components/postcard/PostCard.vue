<script setup>

</script>

<template>
  <div class="post-card card-border card-hover">
    <el-row class="post-head">
      <el-col class="avatar" :span="2">
        <el-avatar :size="40" src="https://empty" @error="errorHandler">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
      </el-col>
      <el-col class="user-msg" :span="10">
        <el-row>
          <el-col :span="12">
            酢浆草Cu
          </el-col>
          <el-col :span="12">
            发表于 3-29 13:00
          </el-col>
        </el-row>
      </el-col>
      <el-col class="topic" :span="4">
        # 问题反馈
      </el-col>
    </el-row>
    <el-row class="post-content">
      <div class="title">
        出师表全文朗诵
      </div>
      <div class="text">
        今天下三分，益州疲弊，此诚危急存亡之秋也。今天下三分，益州疲弊，此诚危急存亡之秋也。今天下三分，益州疲弊，此诚危急存亡之秋也。
      </div>
    </el-row>
    <el-row class="post-operate" justify="space-between">
      <el-col class="left" :span="5">
        <el-row justify="space-between">
          <el-col class="view" :span="12">
            <Icon icon="carbon:view-filled"></Icon>
            <span>13</span>
          </el-col>
          <el-col class="comment" :span="12">
            <Icon icon="akar-icons:comment"></Icon>
            <span>1</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="right" :span="2">
        <Icon icon="ri:broadcast-fill"></Icon>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.post-card {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px;
  background-color: #fff;
}

.post-content {
  margin: 15px 0px 25px;
}

.post-content .title{
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.post-operate {
}
</style>