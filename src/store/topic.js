import {defineStore} from "pinia"
import {getTopicList, getTopicDetail} from "../api/index.js"
import {computed, ref} from "vue"

// 1、利用 store 管理 topicList 数据，减少网络请求次数
// 当从首页进入话题详情页，此时的 topicDetail 数据一定在 topicList 中，所以可以减少重新请求 topicDetail 数据
// 如果是通过 url 直接进入话题详情页，则 topicDetail 数据可能未请求过，需发送请求
// 另外，还可以缓存 topicList 数据，比如如果是在一分钟内重复进入首页，则直接利用 store 中 topicList 数据，超过一分钟才发送网络请求，这里未实现
// 2、包装网络请求和结果数据，将获取数据与发送请求过程隔离，比如通过 getNum 对 num 随用随取，不需关心怎么请求获取到的 num
export const useTopicStore = defineStore('topic', function() {
  let topicList = ref([])
  let num = computed(() => (topicList.value.length))

  // 获取 topicList
  async function getList() {
    try {
      const res = await getTopicList()
      topicList.value = res.data.data.topicList
    }catch(err) {
      topicList.value = []
    }
    return topicList
  }

  // 获取话题数，返回结果是响应式的
  function getNum() {
    return num
  }

  // 根据 topicId 获取 topicItem
  async function getDetail(topicId) {
    // 从 list 中找，找到返回
    let topic = ref()
    topic.value = topicList.value.find(
      (item) => (item.topicId === topicId)
    )
    if(topic.value) {
      return topic
    }
    // 没找到重新请求并返回
    try {
      const res = await getTopicDetail({topicId,})
      topic.value = res.data.data.topicDetail
    } catch (err) {
      topic.value = null
    }
    return topic
  }

  return {
    getList, getNum, getDetail
  }
})