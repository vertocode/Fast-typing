<template>
  <stopwatch :is-active="stopwatchIsActive">
    <router-view />
  </stopwatch>
</template>

<script setup lang="ts">
import Stopwatch from '@/components/Stopwatch.vue'
import { useStore } from "vuex";

const store = useStore()

const stopwatchIsActive = store.state.stopwatchIsActive
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
