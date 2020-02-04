<template>
  <div class="effect-page">
    <SvgPath></SvgPath>
    <StarBg v-if="false"></StarBg>
  </div>
</template>

<script>
import SvgPath from './components/svg-path/index.vue';
import StarBg from './star/index.vue'
export default {
  name: 'effects',
  components: {
    SvgPath,
    StarBg
  }
}
</script>

<style>
.effect-page {
  height: 100vh;
  background-color: #000;
}
</style>
