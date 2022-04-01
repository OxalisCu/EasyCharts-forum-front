<script setup>
import TopicCard from '../topiccard/TopicCard.vue'
</script>

<template>
  <el-row gutter="20">
    <el-col class="item" :span="6">
      <TopicCard />
    </el-col>
    <el-col class="item" :span="6">
      <TopicCard />
    </el-col>
    <el-col class="item" :span="6">
      <TopicCard />
    </el-col>
    <el-col class="item" :span="6">
      <TopicCard />
    </el-col>
  </el-row>
</template>

<style scoped>
.item {
  height: 200px;
}
</style>