<script setup>
import BroadItem from './BroadItem.vue'
import PlaceHolder from '../placeholder/PlaceHolder.vue'
import {onMounted, ref, toRefs} from "vue";
import {useBroadStore} from "../../store/broad"

const props = defineProps({
  topicId: Number
})
const {topicId} = toRefs(props)

const broadStore = useBroadStore()
const broadList = ref([])

onMounted(async () => {
  broadList.value = (await broadStore.getList(topicId.value)).value
})
</script>

<template>
  <div class="broad-card card-hover card-border">
    <div class="tip">
      <Icon class="icon" icon="ri:broadcast-fill"></Icon>
      <span>公告</span>
    </div>
    <div class="broad-list" v-if="broadList.length">
      <BroadItem
        class="broad-item"
        v-for="item in broadList"
        :key="item.postId"
        :broadDetail="item"
      />
    </div>
    <PlaceHolder
      class="placeholder"
      v-if="!broadList.length"
    />
  </div>
</template>

<style scoped>
.broad-card {
  padding: 10px 20px;
}

.tip {
  padding: 10px 0;
  border-bottom: 1px solid #999;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.tip .icon {
  font-size: 18px;
  margin-right: 5px;
}

.broad-list {
  padding-top: 10px;
}

.placeholder {
  padding: 25px 5px 15px;
}

.broad-item {
  margin-bottom: 5px;
}
</style>
