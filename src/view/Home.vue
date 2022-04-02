<script setup>
import TopicSwiper from '../components/topicswiper/TopicSwiper.vue'
import {useTopicStore} from "../store/topic.js"
import {onMounted} from "vue"
import PostFilterSimple from "../components/postfilter/PostFilterSimple.vue"
import CreateCard from '../components/createcard/CreateCard.vue'

const topicStore = useTopicStore()

onMounted(async () => {
  // const topicList = await topicStore.getList()
  // const topicDetail = await topicStore.getDetail()
  // console.log(topicList)
  // console.log(topicDetail)
})

</script>

<template>
  <div class="home-page">
    <!--  话题列表的提示  -->
    <el-row class="topic-tip" justify="space-between">
      <el-col :span="12" class="tip-text">
        <span class="text">话题列表</span>
      </el-col>
      <el-col :span="12">
        <el-row class="right" justify="end">
          5 个话题
        </el-row>
      </el-col>
    </el-row>
    <!--  话题列表  -->
    <TopicSwiper />
    <!--  帖子广场  -->
    <el-row class="post-square" :gutter="15">
      <!--  发布和公告  -->
      <el-col class="other" :xs="24" :sm="8" :md="6">
        <div class="pub-tip">
          <span class="text">发布与公告</span>
        </div>
        <CreateCard class="create-card" />
        <BroadCard />
      </el-col>
      <!--   话题列表   -->
      <el-col class="post-list" :xs="24" :sm="16" :md="18">
        <!--   话题列表提示和筛选器     -->
        <el-row class="post-tip" justify="space-between">
          <el-col class="text" :span="10">
            帖子浏览
          </el-col>
          <el-col :span="10">
            <el-row class="right" justify="end">
              <PostFilterSimple />
            </el-row>
          </el-col>
        </el-row>
        <!--    话题列表    -->
        <el-row class="posts">
          <PostCard class="item" />
          <PostCard class="item" />
          <PostCard class="item" />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.home-page {
}

.topic-tip,
.post-tip,
.pub-tip {
  font-size: 16px;
  padding: 20px 5px 15px;
}

.topic-tip::before,
.post-tip::before,
.pub-tip::before {
  content: '';
  width: 4px;
  height: 20px;
  line-height: 20px;
  background-color: #333;
  position: absolute;
}

.text {
  margin-left: 10px;
  position: relative;
}

.right .icon {
  color: #333;
  font-size: 22px;
}

.post-square {
  margin-top: 10px;
  flex-direction: row-reverse;
}

.posts .item {
  margin-bottom: 10px;
}

.create-card {
  margin-bottom: 10px;
}
</style>