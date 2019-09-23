<template>
  <svg 
    class="component-custom-icon"
    :class="{ 'icon-spin': spin, name: true }"
    aria-hidden="true" :style="boxStyle">
      <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script>
export default {
    name: 'icon',

    props: {
        name: String,

        width: [Number, String],

        height: [Number, String],

        color: String,

        spin: Boolean, // 是否添加旋转动画
    },

    computed: {
        boxStyle() {
            const { width: w, height: h, color } = this;
            const box = {};
            if (color) {
                box.color = color;
            }
            if (w) {
                box.width = typeof w === 'number' ? `${w}px` : w;
            }
            if (h) {
                box.height = typeof h === 'number' ? `${h}px` : h;
            }
            return box;
        },
    },
};
</script>

<style lang="scss">
@keyframes animate-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.component-custom-icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  fill: currentColor;

  &.icon-spin {
    animation: animate-spin 1.8s 0s infinite linear;
  }
}
</style>
