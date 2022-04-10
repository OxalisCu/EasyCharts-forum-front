import Home from '../view/Home.vue'
import TopicDetail from '../view/TopicDetail.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/topicDetail',
    name: 'topicDetail',
    component: TopicDetail,
  }
]