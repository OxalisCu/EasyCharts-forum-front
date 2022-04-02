import {defineStore} from "pinia"
import {getTopicList, getTopicDetail} from "../api/index.js"
import {reactive} from "vue"

export const useTopicStore = defineStore('topic', function() {
  let topicList = reactive([])

  // 获取 topicList
  async function getList() {
    const res = await getTopicList()
    topicList = reactive(res.data.data.topiclist)
    return topicList
  }

  // 根据 topicId 获取 topicItem
  async function getDetail(topicId) {
    // 从 list 中找，找到返回
    let topic = reactive(topicList.find((item) => (item.topicId === topicId)))
    if(topic) {
      return topic
    }
    // 没找到重新请求并返回
    const res = await getTopicDetail(topicId)
    topic = reactive(res.data.data.topicdetail)
    return topic
  }

  return {
    getList, getDetail
  }
})