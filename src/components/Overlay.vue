<template>
  <stopwatch id="overlay-main">
    <div :class="isActive" @keydown="off" @click="off">
      <div class="text" v-if="isActive === 'overlay-active'">
        <div id="textToStart">
          <slot name="textToStart"></slot>
        </div>
      </div>
      <div class="text">
        <div id="textToWrite">
          <slot name="textToWrite"></slot>
        </div>
      </div>
    </div>
  </stopwatch>
</template>

<script lang="ts" setup>
import Stopwatch from '@/components/Stopwatch.vue'
import { useStore } from "vuex";
import { ref } from 'vue'

const store = useStore()

// const to define if it's active or disable
const isActive = ref('overlay-active')

// function to disable overlay when click somewhere
const off = () => {
  isActive.value = 'overlay-disable'
  store.commit('changeStateOfStopwatchIsActive')
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
  background-color: rgba(0,0,0,0.1);
  z-index: 1;
  cursor: pointer;
}
.text {
  height: 10em;
  #textToWrite {
    margin: auto;
    width: 80vw;
  }
}
</style>
