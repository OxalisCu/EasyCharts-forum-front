<script setup>
import {onMounted, toRefs, ref} from "vue";
import defaultCover from '../../assets/default-cover.jpg'

const props = defineProps({
  topicDetail: Object
})
const {topicDetail} = toRefs(props)
</script>

<template>
  <el-row class="topic-head card-border card-hover">
    <el-col class="left" :xs="10" :sm="8" :md="6">
      <el-image class="topic-cover" :src="topicDetail.cover" fit="cover">
        <template #error>
          <el-image class="topic-cover" :src="defaultCover" fit="cover"></el-image>
        </template>
      </el-image>
    </el-col>
    <el-col class="middle" :xs="10" :sm="12" :md="15">
      <div class="title">{{topicDetail.title}}</div>
      <div class="msg">
        <span class="tip">帖子数</span>
        <span>{{topicDetail.postNum}}</span>
      </div>
      <div class="desc">
        {{topicDetail.desc}}
      </div>
    </el-col>
    <el-col class="right" :xs="4" :sm="4" :md="3">
      <div class="setting click-btn">
        <Icon class="icon" icon="ant-design:setting-outlined"></Icon>
      </div>
      <CreateCardSimple
        class="create-card"
      />
    </el-col>
  </el-row>
</template>

<style scoped>
.topic-head {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  padding: 16px 20px;
}

.left {
  overflow: hidden;
  border-radius: 5px;
  height: 100%;
}

.topic-cover {
  display: block;
  height: 100%;
}

.middle {
  box-sizing: border-box;
  padding: 0 20px;
}

.title {
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
}

.msg {
  color: #666;
  line-height: 30px;
}

.msg .tip {
  margin-right: 10px;
}

.desc {
  margin-top: 15px;
  line-height: 26px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
}

.setting {
  height: 35px;
  width: 35px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #666;
}

.create-card {
  margin: 0 5px 5px 0px;
}
</style>