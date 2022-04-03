<script setup>
import PostCard from './PostCard.vue'
import PlaceHolder from '../placeholder/PlaceHolder.vue'
import {usePostStore} from "../../store/post.js"
import {onMounted, ref, toRefs, watch} from "vue";

// 获取筛选条件
const props = defineProps({
  sort: Number,
  topicId: Number,
  keyword: String
})

const {sort, topicId, keyword} = toRefs(props)

// 分页信息
const pageSize = ref(10)
const pageIndex = ref(1)
const totalNum = ref(0)

// 获取帖子列表
const postStore = usePostStore()
const postList = ref([])

onMounted(async () => {
  await getPostList()
})

watch(
  () => [pageSize, pageIndex, sort, topicId, keyword],
  () => {
    getPostList()
  },
  {deep: true}
)

async function getPostList() {
  if(keyword.value) {
    // 搜索帖子
    const searchParams = {
      pageSize,
      pageIndex,
      sort: sort.value && 0,
      topicId: topicId.value && 0,
      keyword: keyword.value && '',
    }
    postList.value = (await postStore.searchList(searchParams)).value
    totalNum.value = postStore.getTotalNum().value
  }else {
    // 获取帖子列表
    const getParams = {
      pageSize,
      pageIndex,
      sort: sort.value && 0,
      topicId: topicId.value && 0,
    }
    postList.value = (await postStore.getList(getParams)).value
    totalNum.value = postStore.getTotalNum().value
  }
}
</script>

<template>
  <div class="post-list" v-if="postList.length">
    <PostCard
      class="item"
      v-for="post in postList"
      :key="post.postId"
      :postDetail="post"
    />
    <div class="post-pagination">
      <el-pagination
        class="pagination"
        :hide-on-single-page="true"
        v-model:page-size="pageSize"
        v-model:current-page="pageIndex"
        :total="totalNum"
        :pager-count="4"
        background
        layout="prev, pager, next"
      />
    </div>
  </div>
  <div class="holder card-border card-hover" v-else>
    <PlaceHolder />
  </div>
</template>

<style scoped>
.post-list {
  width: 100%;
}

.holder {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  margin-bottom: 10px;
}

.post-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination {
  margin: 20px 0px;
}
</style>