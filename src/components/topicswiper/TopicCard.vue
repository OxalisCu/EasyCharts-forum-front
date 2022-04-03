<script setup>
import {onMounted, toRefs, ref} from "vue"
import defaultCover from '../../assets/default-cover.jpg'

const props = defineProps({
  topicDetail: Object
})

const emits = defineEmits([
  'cardWidth'
])

// 接受数据渲染
const {topicDetail} = toRefs(props)

// 子组件挂载到 dom 上后将宽度传给父组件
const card = ref()
onMounted(() => {
  emits('cardWidth', card.value.clientWidth)
})
</script>

<template>
  <div class="topic-card card-border card-hover" ref="card">
    <el-image class="topic-cover" :src="topicDetail.cover" fit="cover">
      <template #error>
        <el-image :src="defaultCover" fit="cover"></el-image>
      </template>
    </el-image>
    <div class="msg">
      <div class="top link-text">
        <span class="topic-title">{{topicDetail.title}}</span>
        <span>进入</span>
      </div>
      <div class="bottom">
        <span>帖子数</span>
        <span>{{topicDetail.postNum}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topic-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  font-size: 16px;
}

.topic-card .bottom {
  height: 40%;
}

.bottom>span:first-child {
  margin-right: 10px;
}
</style>