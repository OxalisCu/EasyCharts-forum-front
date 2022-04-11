<script setup>
import {useRoute, useRouter} from "vue-router"
import {onMounted, ref} from 'vue'
import TopicHead from '../components/topichead/TopicHead.vue'
import PostSort from '../components/postsort/PostSort.vue'
import PostList from '../components/postlist/PostList.vue'
import {useTopicStore} from "../store/topic";

const route = useRoute()
const topicId = Number(route.query.topicId || 0)

const topicStore = useTopicStore()
const topicDetail = ref()

onMounted(async () => {
  topicDetail.value = (await topicStore.getDetail(topicId.value)).value
  console.log(topicDetail.value)
})

// 帖子筛选
const sortIndex = ref(0)

// 搜索
const keyword = ref('')
</script>

<template>
  <div class="topic-detail-page">
    <!--  话题头部信息  -->
    <el-row class="topic-head">
      <TopicHead
        class="head"
        :topic-detail="topicDetail"
      />
      <TopicHeadSimple
        class="head-simple"
        :topic-detail="topicDetail"
      />
    </el-row>
    <!--  帖子广场  -->
    <el-row class="post-square" :gutter="15">
      <el-col class="other" :xs="24" :sm="8" :md="6">
        <!--  搜索帖子  -->
        <SearchBox class="search" />
        <!--  公告  -->
        <BroadCard class="broad" />
      </el-col>
      <el-col class="post-list" :xs="24" :sm="16" :md="18">
        <!--  筛选帖子  -->
        <PostSort
          class="sort"
          v-model:sort-index="sortIndex"
        />
        <!--  帖子列表  -->
        <PostList
          class="list"
          v-model:sort="sortIndex"
          :topic-id="topicId"
          :keyword="keyword"
        />
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.head {
  display: flex;
}

.head-simple {
  display: none;
}

.topic-detail-page {
  margin-top: 15px;
}

.post-square {
  flex-direction: row-reverse;
}

.sort {
  box-sizing: border-box;
  padding: 10px 0;
}

.search {
  box-sizing: border-box;
  padding: 10px 2px;
}

.broad {

}

@media screen and (max-width: 500px) {
  .head {
    display: none;
  }

  .head-simple {
    display: flex;
  }
}
</style>