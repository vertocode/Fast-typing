<template>
  <Overlay>
    <template #header>
      <h1>header</h1>
    </template>
    <template #default>
      <h1>Default</h1>
    </template>
    <template #footer>
      <h1>Footer</h1>
    </template>
  </Overlay>
</template>

<script lang="ts" setup>
import Overlay from '@/components/Overlay.vue'

</script>
