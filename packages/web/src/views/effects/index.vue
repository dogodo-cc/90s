<template>
  <div class="effect-page">
    <SvgPath></SvgPath>
    <!-- <StarBg></StarBg> -->
    <HoverPress>
      <img width="400" height="300" src="https://cdn.dancf.com/uxms/www/image/3-5_e8021f69.png" alt="">
    </HoverPress>
  </div>
</template>

<script>
import SvgPath from './components/svg-path/index.vue';
import HoverPress from './components/hover-press/index.vue';
// import StarBg from './star/index.vue'
export default {
  name: 'effects',
  components: {
    SvgPath,
    // StarBg,
    HoverPress
  }
}
</script>

<style lang="scss">
.effect-page {
  height: 100vh;
  // background-color: #000;
}
</style>
