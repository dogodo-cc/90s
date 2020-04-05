<template>
  <div :class="bem()">
    <div
      :class="bem('circle')"
        v-for="i in 3"
        :key="i"
        :style="style"
    />
  </div>  
</template>

<script>
import bem from '../../../mixins/bem';
export default {
  name: 'hi-loading',
  mixins: [bem],
  props: {
    color: {
      type: String,
      default: '#2254f4'
    },
    size: {
      type: Number,
      default: 16,
    },
    margin: {
      type: Number,
      default: 4
    }
  },
  computed: {
    style() {
      const {size, color, margin} = this;
      return {
        width: size + 'px',
        height: size + 'px',
        'background-color': color,
        margin: `0 ${margin}px`
      };
    }
  }
}
</script>

<style lang="scss">
  @keyframes bouncedelay {
    0%, 80%, 100% {
        transform: scale(0.0);
    }
    40% {
        transform: scale(1.0);
    }
  }

  .hi-loading {
    text-align: center;
    font-size: 0;
    
    &__circle {
      border-radius: 50%;
      display: inline-block;
      animation: bouncedelay 1.4s infinite ease-in-out;
      animation-fill-mode: both;

      &:nth-child(1) {
          animation-delay: -0.32s;
      }
      &:nth-child(2) {
          animation-delay: -0.16s;
      }
    }
  }
</style>