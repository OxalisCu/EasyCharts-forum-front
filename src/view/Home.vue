<script setup>
import TopicSwiper from '../components/topicswiper/TopicSwiper.vue'
</script>

<template>
  <div class="home-page">
    <el-row class="topic-tip" justify="space-between" align="middle">
      <el-col :span="2">
        <div class="text">话题列表</div>
      </el-col>
      <el-col :span="4">
        <el-row class="right" justify="end">
          <Icon class="icon" icon="tabler:sum"></Icon>
          <div class="text">共 5 个话题</div>
        </el-row>
      </el-col>
    </el-row>
    <TopicSwiper />
    <el-row class="post-square" :gutter="20">
      <el-col class="post-list" :span="18">
        <el-row class="post-tip" justify="space-between" align="middle">
          <el-col :span="4">
            <div class="text">帖子浏览</div>
          </el-col>
          <el-col :span="8">
            <el-row class="right" justify="end">
              <PostFilterSimple />
            </el-row>
          </el-col>
        </el-row>
        <el-row class="posts">
          <PostCard class="item" />
          <PostCard class="item" />
          <PostCard class="item" />
        </el-row>
      </el-col>
      <el-col class="other" :span="6">
        <el-row justify="center">
          <el-button class="create-post" type="primary">发表帖子</el-button>
          <BroadCard />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.home-page {
}

.topic-tip,
.post-tip {
  height: 60px;
}

.text {
  font-size: 16px;
  margin-left: 10px;
  position: relative;
}

.topic-tip::before,
.post-tip::before {
  content: '';
  width: 4px;
  height: 20px;
  background-color: #333;
  position: absolute;
  left: 0px;
}

.right .icon {
  color: #333;
  font-size: 22px;
}

.post-square {
  margin-top: 10px;
}

.posts .item {
  margin-bottom: 10px;
}

.create-post {
  margin: 10px 0;
  width: 80%;
  height: 40px;
}
</style>