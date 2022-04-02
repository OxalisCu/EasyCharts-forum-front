import {defineStore} from "pinia"
import {getTopicList, getTopicDetail} from "../api/index.js"
import {ref} from "vue"

export const useTopicStore = defineStore('topic', function() {
  let topicList = ref([])

  // 获取 topicList
  async function getList() {
    const res = await getTopicList()
    topicList.value = res.data.data.topiclist
    return topicList
  }

  // 根据 topicId 获取 topicItem
  async function getDetail(topicId) {
    // 从 list 中找，找到返回
    let topic = ref()
    topic.value = topicList.value.find((item) => (item.topicId === topicId))
    if(topic.value) {
      return topic
    }
    // 没找到重新请求并返回
    const res = await getTopicDetail(topicId)
    topic.value = res.data.data.topicdetail
    return topic
  }

  return {
    getList, getDetail
  }
})