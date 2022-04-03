import {defineStore} from "pinia"
import {getSortList} from "../api/index"
import {ref} from "vue"

// 话题的筛选条件，也是由后端返回
// 做一个缓存处理，因为筛选条件确定后基本不会更新
export const useSortStore = defineStore('sort', function() {
  const sortList = ref([])

  // 获取 sortList
  async function getList() {
    // 不为空，则返回
    if(!sortList.value.length) {    // 否则请求
      try {
        const res = await getSortList()
        sortList.value = res.data.data.sortList
      } catch (err) {}
    }
    return sortList
  }

  return {
    getList
  }
})