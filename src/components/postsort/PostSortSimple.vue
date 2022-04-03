<script setup>
import {onMounted, ref, toRefs} from "vue"

const props = defineProps({
  sortIndex: Number
})
const {sortIndex} = toRefs(props)

const emits = defineEmits([
  'sortIndex'
])

const sortList = ref([
  {
    'id': 0,
    'desc': '推荐'
  },
  {
    'id': 1,
    'desc': '精选'
  },
  {
    'id': 2,
    'desc': '从新到旧'
  },
  {
    'id': 3,
    'desc': '从旧到新'
  },
  {
    'id': 4,
    'desc': '公告'
  },
])

const curIndex = ref(0)
curIndex.value = sortIndex.value

console.log(curIndex.value)

function selectIndex(index) {
  curIndex.value = index;
}

function updateIndex() {
  emits('update:sortIndex', curIndex.value)
  dialogVisible.value = false
}

const dialogVisible = ref(false)
function openDialog() {
  dialogVisible.value = true;
}
</script>

<template>
  <div class="post-filter-simple click-btn" @click="openDialog">
    <Icon class="icon" icon="clarity:filter-solid"></Icon>
    <div>{{sortList[sortIndex].desc}}</div>
  </div>
  <el-dialog width="300px" v-model="dialogVisible" title="筛选帖子">
    <div class="sort-list">
      <div
        :class="{'sort-item': true, 'selected': curIndex===item.id}"
        v-show="index!=4"
        v-for="(item, index) in sortList"
        :key="item.desc"
        @click="selectIndex(index)"
      >
        <span>{{item.desc}}</span>
        <Icon class="icon" icon="akar-icons:check"></Icon>
      </div>
    </div>
    <template #footer>
      <div class="dialog-foot">
        <el-button class="dialog-btn" type="primary" @click="updateIndex">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
.post-filter-simple {
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
}

.icon {
  margin-right: 8px;
  color: #666;
}

.dialog-foot {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-btn {
  width: 100px;
}

.sort-item {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
}

.sort-item.selected {
  background-color: #e0f0e9;
}

.sort-item .icon {
  display: none;
  font-size: 16px;
}

.sort-item.selected .icon {
  display: inline-block;
}
</style>