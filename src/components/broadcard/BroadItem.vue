<script setup>
import {toRefs} from "vue";

const props = defineProps({
  broadDetail: Object
})

const {broadDetail} = toRefs(props)
console.log('broadDetail', broadDetail)
</script>

<template>
  <div class="broad-item">
    <div class="title">
      {{broadDetail.title}}
    </div>
    <el-row class="msg">
      <el-col class="username" :span="12">
        {{broadDetail.usermsg.name}}
      </el-col>
      <el-col class="post-time" :span="12">
        {{broadDetail.time}}
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.broad-item {
  padding: 5px 5px;
  border-radius: 5px;
}

.broad-item:hover {
  background-color: #eee;
}

.title {
  font-weight: bold;
  margin-bottom: 8px;
}

.msg {
  color: #666;
}

.username {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.post-time {
  text-align: right;
}
</style>