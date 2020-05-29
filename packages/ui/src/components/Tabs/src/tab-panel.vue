<template>
  <transition name="fade">
    <div v-show="active">
      <slot />
    </div>
  </transition>  
</template>

<script>
import { createComponentName } from "../../../utils/component";
export default {
  name: createComponentName('tab-panel'),
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    }
  },
  computed: {
    active() {
      return this.name === this.$parent.value;
    },
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>