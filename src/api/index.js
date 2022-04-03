import request from "./axios"

// 请求所有话题列表
export async function getTopicList(params) {
  return request('/api/topicList', {
    method: 'get',
    responseType: 'json',
    params: {
      ...params
    }
  })
}

// 请求话题详情
export async function getTopicDetail(params) {
  return request('/api/topicDetail', {
    method: 'get',
    responseType: 'json',
    params: {
      ...params
    }
  })
}

// 请求帖子列表
export async function getPostList(params) {
  return request('/api/postList', {
    method: 'post',
    responseType: 'json',
    params: {
      ...params
    }
  })
}

// 根据关键词请求帖子列表
export async function searchPostList(params) {
  return request('/api/searchPostList', {
    method: 'post',
    responseType: 'json',
    params: {
      ...params
    }
  })
}

// 请求帖子详情
export async function getPostDetail(params) {
  return request('/api/postDetail', {
    method: 'get',
    responseType: 'json',
    params: {
      ...params
    }
  })
}

// 请求评论列表
export async function getCommentList(params) {
  return request('/api/commentList', {
    method: 'get',
    responseType: 'json',
    params: {
      ...params
    }
  })
}

// 获取用户详情
export async function getUserDetail(params) {
  return request('/api/userDetail', {
    method: 'get',
    responseType: 'json',
    params: {
      ...params
    }
  })
}