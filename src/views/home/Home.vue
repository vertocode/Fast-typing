<template>
  <Overlay>
    <template #textToStart>
      <img src="https://vladam.ai/assets/img/logo-green-play.png" alt="play-image">
      <span>Click or press any key to start</span>
    </template>
    <template #textToWrite>
      <p>Lorem impudum dasdhu sdhaus hsuh uashduash duashd uashd uhd auhd asu dhsaudhas
        dhsuadhsudhas hdu ashdusha udash dush duashd uash
        hdusdhsudhasud uashdus hdasud hsu
        hduasdhasu hdsaua d has ud hasudh
        adshuhasudhasudhsa ahdushdu sahuhsdu</p>
    </template>
  </Overlay>
</template>

<script lang="ts" setup>
import Overlay from '@/components/Overlay.vue'

</script>

<style>
img {
  width: 15px;
  margin-right: 5px;
  margin-top: 20px;
}
</style>