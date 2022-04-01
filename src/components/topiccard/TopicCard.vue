<script setup>
const url = "https://cdn.w3cbus.com/community.mdclub.org/upload/topic-cover/ec/cb/0f65328a002b40efa0ce8722201042ce.jpg?x-oss-process=image/resize,m_fill,w_360,h_202,limit_0/format,webp"
</script>

<template>
  <div class="topic-card card-border card-hover">
    <el-image class="topic-cover" :src="url" fit="cover">
      <template #error>
        <div>
          <Icon icon="clarity:picture-line"></Icon>
        </div>
      </template>
    </el-image>
    <div class="msg" v-waves>
      <div class="top">
        <span class="topic-title">问题反馈</span>
        <span>进入</span>
      </div>
      <div class="bottom">
        帖子数 100
      </div>
    </div>
  </div>
</template>

<style scoped>
.topic-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
}

.topic-card .topic-cover {
  display: block;
  height: 55%;
  width: 100%;
}

.topic-card .msg {
  height: 45%;
  box-sizing: border-box;
  padding: 5px 20px;
}

.topic-card .top {
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.topic-card .bottom {
  height: 40%;
}
</style>