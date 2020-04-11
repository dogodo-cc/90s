<template>
 <transition name="hi-loading-fade" @after-leave="handleAfterLeave">
   <div
    v-show="visible"
    :class="[bem(), customClass, { 'is-fullscreen': fullscreen }]"
    :style="{ backgroundColor: background || '' }"
    >
    <div :class="bem('circle-box')">
      <div
        :class="bem('circle')"
        v-for="i in 3"
        :key="i"
        :style="style"
      />
    </div>
    <p :class="bem('text')" v-if="text">{{text}}</p>
  </div>  
 </transition>
</template>

<script>
import bem from '../../../mixins/bem';
import {createComponentName} from '../../../utils/component';
export default {
  name: createComponentName('loading'),
  mixins: [bem],
  data() {
    return {
      color: '',
      size: 16,
      margin: 4,
      text: null,
      background: null,
      visible: false,
      fullscreen: true,
      customClass: ''
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
  },
  methods: {
    handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText(text) {
      this.text = text;
    }
  }
}
</script>