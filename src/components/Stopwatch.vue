<template>
  <div id="stopwatch">
    <div id="timer">
      <span>{{ timer.minutes }}</span>:<span>{{ timer.seconds }}</span>
    </div>
    <button @click="startTimer">Start</button>
  </div>
  <div>
    <slot></slot>
  </div>
  <div id="restartTimer" v-if="props.isActive">
    <button @click="restartTimer">Restart</button>
  </div>
</template>


<script setup lang="ts">
import { useTimer } from 'vue-timer-hook'

interface Props { isActive: boolean }

const props = defineProps<Props>()

const time: any = new Date()
time.setSeconds(time.getSeconds() + 60)
const timer: any = useTimer(time, false)

const startTimer = () => {
  timer.start()
}

const restartTimer = () => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 70)
  timer.restart(time)
}

</script>
<style scoped lang="scss">
#stopwatch {
  #timer {
    color: #e7de79;
    font-family: "Arial",sans-serif;
    font-weight: bold;
  }
}
</style>