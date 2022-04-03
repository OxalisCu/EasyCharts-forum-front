<script setup>
import {onMounted, ref} from "vue"
import {getSentence} from "../../api"

const sentence = ref({
  text: '本来无一物，何处惹尘埃',
  from: '惠能'
})

onMounted(() => {
  refreshSentence()
})

async function refreshSentence() {
  sentence.value = await getSentence()
}
</script>

<template>
  <div class="placeholder">
    <div class="tip">
      <Icon class="icon click-btn" icon="ci:refresh" @click="refreshSentence"></Icon>
      <span>啥也没有，看看句子 _(:з」∠)_</span>
    </div>
    <div class="sentence">{{sentence.text}}</div>
    <div class="from">from {{sentence.from}}</div>
  </div>
</template>

<style scoped>
.placeholder {
  width: 100%;
  text-align: center;
}

.tip {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tip .icon {
  font-size: 18px;
  padding: 5px;
  margin-right: 5px;
  border-radius: 5px;
}

.sentence {
  font-size: 18px;
  letter-spacing: 5px;
  line-height: 30px;
  margin: 20px 0 12px;
}

.from {

}
</style>