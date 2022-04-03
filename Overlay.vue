<template>
  <div id="overlay-main" tabindex="1" :class="isActive" @keydown="off" @click="off">
    <div id="text">
      <img src="https://vladam.ai/assets/img/logo-green-play.png" alt="play-image">
      <span>Click or press any key to start</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// const to define if it's active or disable
const isActive = ref('overlay-active')

// function to disable overlay when click somewhere
const off = () => {
  isActive.value = 'overlay-disable'
}
</script>

<style scoped lang="scss">
#overlay-main {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}
#text {
  span {
    font-family: "Fira Code",sans-serif;
    font-weight: bold;
    color: white;
    margin-bottom: 8px;
  }
  img {
    width: 15px;
    margin-right: 5px;
    margin-top: 20px;
  }
}

.overlay-active {
  display: block;
}
.overlay-disable {
  display: none;
}
</style>
