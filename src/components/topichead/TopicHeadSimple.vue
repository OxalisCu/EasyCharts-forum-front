<script setup>
import {onMounted, toRefs, ref} from "vue";
import defaultCover from '../../assets/default-cover.jpg'

const props = defineProps({
  topicDetail: Object
})
const {topicDetail} = toRefs(props)

const show = ref(false)
function showMsg() {
  show.value = !show.value;
}
</script>

<template>
  <div class="topic-head-simple card-border card-hover">
    <div class="back">
      <el-image class="topic-cover" :src="topicDetail?.cover" fit="cover">
        <template #error>
          <el-image :src="defaultCover" fit="cover"></el-image>
        </template>
      </el-image>
    </div>
    <div class="content-wrap">
      <div :class="['content-msg', {'show': show}]">
        <div class="left">
          <div class="title">{{topicDetail?.title || "无名"}}</div>
          <div class="msg">
            <span class="tip">帖子数</span>
            <span>{{topicDetail?.postNum || 0}}</span>
          </div>
          <div class="desc">
            {{topicDetail?.desc || "暂无简介"}}
          </div>
        </div>
        <div class="right">
          <div class="btn click-btn" @click="showMsg">
            <Icon v-if="!show" class="top" icon="bytesize:chevron-top"></Icon>
            <Icon v-else class="bottom" icon="bytesize:chevron-bottom"></Icon>
          </div>
          <div class="setting click-btn">
            <Icon class="icon" icon="ant-design:setting-outlined"></Icon>
          </div>
          <CreateCardSimple
            class="create-card"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topic-head-simple {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  padding: 10px 12px 15px 12px;
}

.back {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
}

.topic-cover {
  display: block;
  height: 100%;
}

.content-wrap {
  position: absolute;
  width: calc(100% - 24px);
  height: calc(200px - 25px);
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
}

.content-msg {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  padding: 5px 10px;
  backdrop-filter: blur(10px);
  position: absolute;
  top: 130px;
  transition: top 0.3s;
}

.content-msg.show {
  top: 0px;
}

.left {
  flex: auto;

}

.right {
  flex: none;
  width: 60px;
}

.btn {
  height: 35px;
  width: 35px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #666;
}

.title {
  line-height: 40px;
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.msg {
  line-height: 30px;
}

.msg .tip {
  margin-right: 10px;
}

.desc {
  margin-top: 13px;
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
  /*margin: 0 5px 5px 0px;*/
}
</style>