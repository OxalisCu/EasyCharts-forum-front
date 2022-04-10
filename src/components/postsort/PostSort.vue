<script setup>
import {useSortStore} from "../../store/sort";
import {onMounted, toRefs, ref} from "vue";

const props = defineProps({
  sortIndex: Number
})
const {sortIndex} = toRefs(props)

const emits = defineEmits([
  'sortIndex'
])

const sortStore = useSortStore()
const sortList = ref([])

onMounted(async () => {
  sortList.value = (await sortStore.getList()).value
})

function selectIndex(index) {
  emits('update:sortIndex', index)
}
</script>

<template>
  <div class="post-sort">
    <div
      class="sort-item"
      v-show="index!=4"
      v-for="(item, index) in sortList"
      :key="item.desc"
      @click="selectIndex(index)"
    >
      <span class="text link-text">{{item.desc}}</span>
      <span :class="['bottom', {'selected': sortIndex===item.id}]"></span>
    </div>
  </div>
</template>

<style scoped>
.post-sort {
  line-height: 36px;
  display: flex;
}

.sort-item {
  position: relative;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

.bottom {
  position: absolute;
  bottom: 2px;
  width: 0;
  height: 3px;
  background-color: #333;
  border-radius: 5px;
  transition: width 0.1s;
}

.bottom.selected {
  width: 22px;
}
</style>