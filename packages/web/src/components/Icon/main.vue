<template>
  <svg 
    class="component-custom-icon"
    :class="{ 'icon-spin': spin, name: true }"
    aria-hidden="true"
    :style="boxStyle">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    name: {
      type: String,
      required: true
    },

    width: {
      type:[Number, String],
      required: true
    },

    height: {
      type:[Number, String],
      required: true
    },

    color: {
      type: String,
      default: '#000'
    },

    spin: {
      type: Boolean, // 是否添加旋转动画
      default:false
    }
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

<style lang="postcss">
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
