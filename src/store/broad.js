import {defineStore} from "pinia"
import {computed, ref} from "vue"
import {getPostDetail, getPostList} from "../api";

// 数据与请求分离
// 虽然 broad 也是从 topic 里筛选出来，调用一样接口，但是为了获取方便，这里直接进行数据管理
export const useBroadStore = defineStore('broad', function() {
  const broadList = ref([])
  let num = computed(() => (broadList.value.length))

  // 通过筛选条件（话题 id）获取 broadList
  async function getList(topicId) {
    const params = {
      pagesize: 100,
      pageindex: 1,
      sort: 4,
    }
    // 没有传 topicId 则获取所有公告
    if(topicId) {
      params.topicid = topicId
    }
    const res = await getPostList(params)
    broadList.value = res.data.data.postlist

    return broadList
  }

  // 获取公告数
  function getNum() {
    return num
  }

  // 通过 postId 获取公告详情
  async function getDetail(postId) {
    // 从 list 中找，找到返回
    let broad = ref()
    broad.value = broadList.value.find(
      (item) => (item.postid === postId)
    )
    if(broad.value) {
      return broad
    }
    // 没找到重新请求并返回
    const res = await getPostDetail({postid: postId})
    broad.value = res.data.data.postdetail
    return broad
  }

  return {
    getList, getNum, getDetail
  }
})