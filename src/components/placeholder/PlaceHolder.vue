<script setup>
import {onMounted, ref} from "vue"
import {getSentence} from "../../api"

const sentence = ref({
  text: '本来无一物，何处惹尘埃',
  from: '惠能'
})

onMounted(async () => {
  sentence.value = await getSentence()
})
</script>

<template>
  <div class="placeholder">
    <div class="tip">啥也没有，看看句子 _(:з」∠)_</div>
    <div class="sentence">{{sentence.text}}</div>
    <div class="from">from {{sentence.from}}</div>
  </div>
</template>

<style scoped>
.placeholder {
  width: 100%;
  text-align: center;
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