<template>
  <div :class="[bem(), position === 'top' ? 'is-top' : 'is-left']">
    <div ref="nav"
         :class="bem('bar')">
      <div
        v-for="item in tabs"
        :key="item.name"
        :class="[bem('tab'), {active: value === item.name}]"
        @click="choseTab(item.name)">
        {{ item.label }}
      </div>
      <div
        ref="lineBar"
        :class="bem('line')" />
    </div>
    <div :class="bem('content')">
      <slot>渲染了一个空的Tab组件</slot>
    </div>
  </div>
</template>

<script>
import bem from "../../../mixins/bem";
import { createComponentName } from "../../../utils/component";
import {filterEmpty} from '@/utils/';
export default {
  name: createComponentName('tabs'),
  mixins: [bem],
  props: {
    value: {
      type: String,
      default: ''
    },
    position: {
      validator(v) {
        return ['top', 'left'].includes(v);
      },
      default: 'top'
    }
  },
  data() {
    return {
      tabs: []
    }
  },
  watch: {
    value: {
      handler() {
        this.$nextTick(() => {
          this.moveLineBar();
        })
      },
      immediate: true,
    }
  },
  mounted() {
    const panels = filterEmpty(this.$slots.default);
    this.tabs = panels.map(p => {
      return p.componentInstance.$options.propsData;
    });
  },
  methods: {
    choseTab(v) {
      this.$emit('input', v);
    },
    moveLineBar() {
      const { nav: $nav, lineBar: $lineBar } = this.$refs;
      if (!$nav || !$lineBar) return;

      const panel = $nav.querySelector('.active');
      if (!panel) return;

      if (this.position === 'top') {
        $lineBar.style.transform = `translate3d(${panel.offsetLeft}px, 0px, 0px)`;
        $lineBar.style.width = `${panel.offsetWidth}px`;
      } else {
        $lineBar.style.transform = `translate3d(0px, ${panel.offsetTop}px, 0px)`;
        $lineBar.style.height = `${panel.offsetHeight}px`;
      }
    },
  }
}
</script>