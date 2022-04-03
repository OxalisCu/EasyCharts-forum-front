<script setup>
import TopicSwiper from '../components/topicswiper/TopicSwiper.vue'
import {useTopicStore} from "../store/topic.js"
import {onMounted, ref} from "vue"
import PostFilterSimple from "../components/postfilter/PostFilterSimple.vue"
import CreateCard from '../components/createcard/CreateCard.vue'
import PostList from '../components/postlist/PostList.vue'
import {usePostStore} from "../store/post"

const topicStore = useTopicStore()
const topicNum = ref(0)

const postStore = usePostStore()
const postTotalNum = ref(0)

onMounted(async () => {
  topicNum.value = topicStore.getNum()
  postTotalNum.value = postStore.getTotalNum()
})

</script>

<template>
  <div class="home-page">
    <!--  话题列表的提示  -->
    <el-row class="topic-tip" justify="space-between" align="middle">
      <el-col :span="12" class="tip-text">
        <span class="text">话题列表</span>
      </el-col>
      <el-col class="right" :span="12">
        {{topicNum}} 个话题
      </el-col>
    </el-row>
    <!--  话题列表  -->
    <TopicSwiper />
    <!--  帖子广场  -->
    <el-row class="post-square" :gutter="15">
      <!--  发布和公告  -->
      <el-col class="other" :xs="24" :sm="8" :md="6">
        <el-row class="pub-tip" justify="space-between" align="middle">
          <span class="text">发布与公告</span>
        </el-row>
        <CreateCard class="create-card" />
        <BroadCard />
      </el-col>
      <!--  帖子列表  -->
      <el-col class="post-list" :xs="24" :sm="16" :md="18">
        <!--   帖子列表提示和筛选器     -->
        <el-row class="post-tip" justify="space-between" align="middle">
          <el-col class="text" :span="6">
            帖子浏览
          </el-col>
          <el-col :span="5">
            <PostFilterSimple />
          </el-col>
          <el-col class="right" :span="11">
            {{postTotalNum}} 篇帖子
          </el-col>
        </el-row>
        <!--   帖子   -->
        <el-row class="posts">
          <PostList />
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
  line-height: 30px;
  padding: 14px 5px 6px;
}

.topic-tip::before,
.post-tip::before,
.pub-tip::before {
  content: '';
  width: 4px;
  height: 20px;
  line-height: 30px;
  background-color: #333;
  position: absolute;
  border-radius: 2px;
}

.text {
  margin-left: 12px;
  position: relative;
}

.right {
  text-align: right;
}

.post-square {
  flex-direction: row-reverse;
}

.posts .item {
  margin-bottom: 10px;
}

.create-card {
  margin-bottom: 10px;
}
</style>