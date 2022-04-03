<script setup>
import {ref, watch} from "vue";

// 获取搜索框输入
const keyword = ref("")
watch(keyword, () => {
  console.log(keyword.value)
})

// 判断输入框是否聚焦
const isFocus = ref(false)
function handleFocus (e) {
  isFocus.value = true;
}
function handleBlur (e) {
  isFocus.value = false;
}
</script>

<template>
  <div :class="['searchbox', {'focus': isFocus}]">
    <div class="input">
      <input class="area" v-model="keyword" @focus="handleFocus" @blur="handleBlur" placeholder="搜索帖子" type="text">
      <div class="btn">
        <Icon icon="bx:search"></Icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.searchbox {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}

.input {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  height: 38px;
  padding: 4px;
  border-radius: 5px;
  background-color: #f6f6f6;
}

.input .area {
  box-sizing: border-box;
  flex: auto;
  height: 36px;
  padding: 0 5px;
  margin-right: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: #f6f6f6;
}

.input .area::selection {
  color: #666;
  background-color: #9CC3F5;
}

.searchbox.focus .input {
  background-color: #fff;
  border: none;
}

.searchbox.focus .area {
  background-color: #f6f6f6;
}

.input .btn {
  flex: none;
  width: 32px;
  height: 32px;
  margin: 0 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  color: #666;
}

.input .btn:hover {
  background-color: #f6f6f6;
}
</style>