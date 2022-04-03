import axios from 'axios'
import {getMessage} from "./status"
import {ElMessage} from "element-plus"

// 服务器地址
const baseURL = "https://console-mock.apipost.cn/app/mock/project/e77f9e91-4df0-4fe2-93ae-b8e4004afb0a"
// const baseURL = "https://demo.com"

// 声明一个 map 用于存储每个请求的 标识 和 取消函数
const pending = new Map()

// 添加请求
const addPending = (config) => {
  const url = [
    config.method,
    config.url,
    JSON.stringify(config.params),
    JSON.stringify(config.data)
  ].join('&')
  config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
    // pending 中不存在这个请求则添加进去
    if(!pending.has(url)) {
      pending.set(url, cancel)
    }
  })
}

// 移除请求
const removePending = (config) => {
  const url = [
    config.method,
    config.url,
    JSON.stringify(config.params),
    JSON.stringify(config.data)
  ].join('&')
  // 如果存在当前请求标识，则取消请求
  if(pending.has(url)) {
    const cancel = pending.get(url)
    cancel(url)
    pending.delete(url)
  }
}

// 清空所有请求（在路由跳转时使用）
export const clearPending = () => {
  for(const [url, cancel] of pending) {
    cancel(url)
  }
  pending.clear()
}

// 实例化和初始化 axios
const request = axios.create({
  baseURL,
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  // 是否跨站点访问控制请求
  withCredentials: false,
  timeout: 30000,
  // 请求格式化
  transformRequest: [(data) => {
    data = JSON.stringify(data)
    return data
  }],
  transformResponse: [(data) => {
    if(typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data)
    }
    return data
  }]
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // 请求开始前，对之前请求做检查取消操作
  removePending(config)
  // 将当前请求加入 pending
  addPending(config)
  // 获取 token
  let token = localStorage.getItem('token')
  if(token) {
    config.headers.Authorization = `${token}`
  }
  return config
}, (error) => {
  console.log('request interceptor error', error);
  ElMessage.error('网络错误！')
  Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use((response) => {
  // 在请求结束后，移除本次请求
  removePending(response.config)
  const status = response.status
  let msg = ''
  if(status < 200 || status >= 300) {
    // 处理 http 错误，抛到业务代码
    msg = getMessage(status)
    if(typeof response.data === 'string') {
      response.data = {msg}
    } else {
      response.data.msg = msg
    }
    console.log("network error", response)
    ElMessage.error('网络错误！')
    Promise.reject(response)
  }
  return response
}, (error) => {
  // 移除请求
  removePending(error.config || {})
  // 请求被取消
  if(axios.isCancel(error)) {
    console.log('repeated request: ' + error.message)
    ElMessage.error('重复请求')
  } else {
    console.log('response interceptor error', error);
    ElMessage.error('网络错误！')
  }
  Promise.reject(error)
})

export default request