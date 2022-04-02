<script setup>
import BroadItem from './BroadItem.vue'
import {reactive} from "vue";

const broadList = reactive([
  {
    "postid": 6006,
    "title": "没我族效",
    "content": "风油院张质十改理置代但保与究不便界志。研便设准听究而路放度用共儿。放山石队做县公线动见任队领型程东。引领质况南别所红上清前效表更线。",
    "time": 1443953078547,
    "viewnum": 37,
    "commentnum": 26,
    "ismark": 1,
    "isnotice": 0,
    "usermsg": {
      "userid": 6007,
      "name": "郝强",
      "avatar": "http://xdpg.aero/fgjbvvlbu"
    },
    "topicmsg": {
      "topicid": 6008,
      "title": "面运系断位真",
      "desc": "安价北需选林单任广空七信识用。",
      "postnum": 21
    }
  },
  {
    "postid": 6009,
    "title": "关离段得克明",
    "content": "共照太山组向建化义此原战团教当队。成华六不属毛整率清对代易如在新每层。所清军细文等心展张划立队活。利各单三员素家图五马成容外同次五。路第引才美干北维开公压准。想华张那报且传然系究难路样长记我。",
    "time": 692214725761,
    "viewnum": 23,
    "commentnum": 74,
    "ismark": 0,
    "isnotice": 1,
    "usermsg": {
      "userid": 6010,
      "name": "唐勇",
      "avatar": "http://pnojiqm.mg/ffpcrx"
    },
    "topicmsg": {
      "topicid": 6011,
      "title": "设七斗经长走",
      "desc": "角感来基利志规议可展料问率间。",
      "postnum": 73
    }
  },
])
</script>

<template>
  <div class="broad-card card-hover card-border">
    <div class="tip">
      <Icon class="icon" icon="ri:broadcast-fill"></Icon>
      <span>公告</span>
    </div>
    <div class="broad-list">
      <BroadItem
        class="broad-item"
        v-for="item in broadList"
        :key="item.postid"
        :broadDetail="item"
      />
    </div>
  </div>
</template>

<style scoped>
.broad-card {
  padding: 10px 20px;
}

.tip {
  padding: 10px 0;
  border-bottom: 1px solid #999;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.tip .icon {
  font-size: 18px;
  margin-right: 5px;
}

.broad-list {
  padding-top: 10px;
}

.broad-item {
  margin-bottom: 5px;
}
</style>
