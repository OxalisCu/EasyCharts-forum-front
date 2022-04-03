<script setup>
import {ref, toRefs} from "vue";
import {watch} from "vue";

const props = defineProps({
  keyword: String
})
const {keyword} = toRefs(props)

const emits = defineEmits([
  'keyword'
])

// 打开搜索框
const dialogVisible = ref(false)
function openDialog() {
  dialogVisible.value = true
}

// 提交关键词
const curWord = ref('')
curWord.value = keyword.value || ''

function submit() {
  emits('update:keyword', curWord.value)
  dialogVisible.value = false
}
</script>

<template>
  <div class="searchbox-simple click-btn" @click="openDialog">
    <Icon icon="bx:search"></Icon>
  </div>
  <el-dialog width="300px" v-model="dialogVisible" title="搜索帖子">
    <input class="area" v-model="curWord" placeholder="搜索帖子" type="text">
    <template #footer>
      <div class="dialog-foot">
        <el-button class="dialog-btn" type="primary" @click="submit">搜索</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
.searchbox-simple {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;
  border: 1px solid #eee;
}

.area {
  box-sizing: border-box;
  font-size: 16px;
  height: 38px;
  width: 100%;
  padding: 0 8px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #f6f6f6;
}

.area::selection {
  color: #666;
  background-color: #9CC3F5;
}

.dialog-foot {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-btn {
  width: 100px;
}
</style>