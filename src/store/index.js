import {defineStore} from "pinia"
import topic from './topic.js'

const items = {
  topic,
}

const store = {};

Object.keys(items).forEach((key) => {
  store[key] = defineStore(key, items[key])
});

export default store;

// 用法
// const topic = store.topic()
// topic.getList()