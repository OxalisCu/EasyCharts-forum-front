<script setup>
import TopicCard from './TopicCard.vue'
import {onMounted, ref} from "vue";
import {useTopicStore} from "../../store/topic";

const topicStore = useTopicStore()
const topicList = ref([])

onMounted(async () => {
  topicList.value = (await topicStore.getList()).value
})

// 处理话题卡片左右滑动
const container = ref()
let cardWidth = ref(0)
let containerWidth = ref(0)
let gapWidth = ref(15)
let cardNum = ref(0)

let offset = ref(0)

// 获取卡片宽度、容器宽度，计算出容器内卡片数量
function getCardWidth(width) {
  cardWidth.value = width
  containerWidth.value = container.value.clientWidth
  cardNum.value = Math.round((containerWidth.value + gapWidth.value) / (cardWidth.value + gapWidth.value))
}

// 计算左右滑动距离
function handleSwiper(type) {
  const length = topicList.value.length
  switch (type) {
    case 'right':
      offset.value += length - offset.value - 2*cardNum.value < 0 ?
                      length - offset.value - cardNum.value : cardNum.value
      break
    case 'left':
      offset.value -= offset.value < cardNum.value ?
                      offset.value : cardNum.value
      break
  }
}
</script>

<template>
  <div class="topic-swiper" ref="container">
    <el-row
      class="topic-list"
      :gutter="15"
    >
      <el-col
        class="item"
        :xs="12" :sm="8" :md="6"
        v-for="topic in topicList"
        :key="topic.topicId"
        :style="{'transform': `translateX(${-offset*(cardWidth+gapWidth)}px)`}"
      >
        <TopicCard
          :topicDetail="topic"
          @cardWidth="getCardWidth"
        />
      </el-col>
    </el-row>
    <div class="left-btn" v-if="offset!=0" @click="handleSwiper('left')">
      <Icon icon="akar-icons:chevron-left"></Icon>
    </div>
    <div class="right-btn" v-if="offset+cardNum!=topicList.length" @click="handleSwiper('right')">
      <Icon icon="akar-icons:chevron-right"></Icon>
    </div>
  </div>

</template>

<style scoped>
.topic-swiper {
  position: relative;
}

.topic-list {
  flex-wrap: nowrap;
  height: 200px;
  padding: 2px 0px;
  overflow: hidden;
}

.item {
  transition: transform 0.3s ease-in-out;
}

.left-btn,
.right-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ddd;
  box-shadow: 0 0 2px #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.left-btn {
  left: -14px;
}

.right-btn {
  right: -14px;
}

@media screen and (max-width: 480px){
  .item {
    min-width: 100%;
  }
}
</style>