<script setup>
import {toRefs} from "vue";
import Default from '../../assets/default.png'

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
            <el-avatar :src="postDetail.usermsg.avatar">
              <img :src="Default" />
            </el-avatar>
          </el-col>
          <el-col :span="17">
            <el-row>
              <el-col class="username" :xs="24" :sm="12">
                {{postDetail.usermsg.name}}
              </el-col>
              <el-col class="time" :xs="24" :sm="12">
                {{postDetail.time}}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="right" :xs="7" :sm="11" :md="8">
        <span># {{postDetail.topicmsg.title}}</span>
        <span v-if="postDetail.ismark"> | 精选</span>
        <span v-if="postDetail.isnotice"> | 公告</span>
      </el-col>
    </el-row>
    <el-row class="post-content">
      <div class="title">
        {{postDetail.title}}
      </div>
      <div class="text">
        {{postDetail.content}}
      </div>
    </el-row>
    <el-row class="post-operate" justify="space-between">
      <el-col class="left" :span="10">
        <div class="view">
          <Icon class="icon" icon="carbon:view"></Icon>
          <span class="num">{{postDetail.viewnum}}</span>
        </div>
        <div class="comment">
          <Icon class="icon" icon="fa:comment-o"></Icon>
          <span class="num">{{postDetail.commentnum}}</span>
        </div>
      </el-col>
      <el-col class="right" :span="2">
        <Icon class="icon" icon="ant-design:setting-outlined"></Icon>
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
  cursor: pointer;
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
  font-weight: bold;
}

.post-content{
  margin: 20px 0;
}

.post-content .title{
  font-size: 16px;
  font-weight: bold;
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
</style>