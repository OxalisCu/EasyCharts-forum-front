<script setup>
import {toRefs} from "vue";
import defaultAvatar from '../../assets/default-avatar.jpg'

const props = defineProps({
  postDetail: Object
})

const {postDetail} = toRefs(props)
</script>

<template>
  <div class="post-card card-border card-hover">
    <el-row class="post-head" justify="space-between" align="middle">
      <el-col :xs="16" :sm="12" :md="14">
        <el-row align="middle">
          <el-col class="avatar">
            <el-avatar :src="postDetail.userMsg.avatar">
              <img :src="defaultAvatar" fit="cover" />
            </el-avatar>
          </el-col>
          <el-col :span="17">
            <el-row>
              <el-col class="username" :xs="24" :sm="12">
                {{postDetail.userMsg.name}}
              </el-col>
              <el-col class="time" :xs="24" :sm="12">
                {{postDetail.time}}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="right link-text" :xs="7" :sm="11" :md="8">
        <span># {{postDetail.topicMsg.title}}</span>
        <span v-if="postDetail.isMark"> | 精选</span>
        <span v-if="postDetail.isBroad"> | 公告</span>
      </el-col>
    </el-row>
    <el-row class="post-content">
      <el-col class="title link-text">
        {{postDetail.title}}
      </el-col>
      <el-col class="text">
        {{postDetail.content}}
      </el-col>
    </el-row>
    <el-row class="post-operate" justify="space-between">
      <el-col class="left" :span="10">
        <div class="view">
          <Icon class="icon" icon="carbon:view"></Icon>
          <span class="num">{{postDetail.viewNum}}</span>
        </div>
        <div class="comment">
          <Icon class="icon" icon="fa:comment-o"></Icon>
          <span class="num">{{postDetail.commentNum}}</span>
        </div>
      </el-col>
      <el-col class="right" :span="2">
        <Icon class="icon click-btn" icon="ant-design:setting-outlined"></Icon>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.post-card {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px;
  background-color: #fff;
}

.avatar {
  width: 35px;
  height: 35px;
  flex: none;
  margin-right: 13px;
}

.username {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.time {
  color: #999;
  font-size: 13px;
  margin: 4px 0 0;
}

.post-head .right {
  text-align: right;
}

.post-content{
  margin: 20px 0;
}

.post-content .title{
  font-size: 16px;
  padding: 5px 0 10px;
}

.post-content .text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.post-content .text {
  line-height: 24px;
}

.post-operate .left {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #999;
}

.post-operate .view,
.post-operate .comment {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.post-operate .icon {
  margin-right: 10px;
  font-size: 15px;
  color: #666;
}

.post-operate .comment .icon {
  font-size: 13px;
}

.right {
  text-align: right;
}

.right .icon {
  padding: 8px;
  border-radius: 5px;
}
</style>