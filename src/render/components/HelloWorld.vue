<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { one } from '../api/tianapi'

const title = ref('欢迎来到每日一句')
const word = ref('')
const wordfrom = ref('')
const imgurl = ref('')
const loading = ref(true)

onMounted(() => {
  one().then(response => {
    console.log(response.data)
    const { newslist } = response.data
    word.value = newslist[0].word
    wordfrom.value = newslist[0].wordfrom
    imgurl.value = newslist[0].imgurl
    preload()
  })
})

const preload = () => {
  let image = new Image()
  image.src = imgurl.value
  image.onload = () => {
    loading.value = false
  }
  image.onerror = () => {
    loading.value = false
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="img-text-container">
    <div v-if="loading" class="loader"></div>
    <img v-else alt="picture" :src="imgurl" />
    <p class="word">{{ word }}</p>
    <p class="word wordfrom" v-if="wordfrom">——{{ wordfrom }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/loading.scss';

h1 {
  text-align: center;
}

.img-text-container {
  margin: auto;
  width: 70%;

  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.35);
    transition: 0.5s;

    &:hover {
      box-shadow: 0 25px 25px rgba(0, 0, 0, 0.55);
    }
  }

  .word {
    padding: 0 10px;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;

    &:hover {
      text-shadow: 0 10px 10px rgba(0, 0, 0, 0.35);
    }
  }

  .wordfrom {
    text-align: right;
  }
}
</style>
