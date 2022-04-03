import {defineStore} from "pinia"
import {computed, ref} from "vue"
import {getPostDetail, getPostList, searchPostList} from "../api";

// 作用同 topic.js
export const usePostStore = defineStore('post', function() {
  // 返回结果
  let data = ref({
    total: 0,
    postList: []
  })
  let postList = computed(() => (data.value.postList))
  let listNum = computed(() => (data.value.postList.length))
  let totalNum = computed(() => (data.value.total))

  // 通过筛选条件获取 postList
  async function getList(params) {
    try {
      const res = await getPostList(params)
      data.value = res.data.data
    } catch(err) {
      data.value = {
        total: 0,
        postList: []
      }
    }
    return postList
  }

  // 通过关键词和筛选条件获取 postList
  async function searchList(params) {
    try {
      const res = await searchPostList(params)
      data.value = res.data.data
    } catch (err) {
      data.value = {
        total: 0,
        postList: []
      }
    }
    return postList
  }

  // 获取当前帖子数
  function getListNum() {
    return listNum
  }

  // 获取帖子总数
  function getTotalNum() {
    return totalNum
  }

  // 根据 postId 获取 postItem
  async function getDetail(postId) {
    // 从 list 中找，找到就返回
    let post = ref()
    post.value = postList.value.find(
      (item) => (item.postId === postId)
    )
    if(post.value) {
      return post
    }
    // 没找到重新请求并返回
    try {
      const res = await getPostDetail({postId,})
      post.value = res.data.data.postDetail
    } catch(err) {
      post.value = null
    }
    return post
  }

  return {
    getList, searchList, getDetail, getListNum, getTotalNum
  }
})