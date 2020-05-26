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
import bem from '@/mixins/bem.js';
import {filterEmpty} from './util';
export default {
  name: 'Tabs',
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

<style lang="scss">
.Tabs {
  &.is-top {
    .Tabs__bar {
      display: flex;
      border-bottom: 1px solid #dadde1;
    }
    .Tabs__line {
      height: 4px;
      width: 0;
      left: 0;
      bottom: -1px;
    }
  }
  &.is-left {
    display: flex;
    .Tabs__bar {
      border-right: 1px solid #dadde1;
    }
    .Tabs__line {
      top: 0;
      right: -1px;
    }
    .Tabs__content {
      flex: 1;
    }
  }
  &__bar {
    position: relative;
  }
  &__line {
      position: absolute;
      width: 4px;
      height: 40px;
      border-radius: 1px;
      background-color: #2254f4;
      z-index: 1;
      transform-origin: 0 0;
      transition: transform .3s cubic-bezier(.645, .045, .355, 1),
      width .3s cubic-bezier(.645, .045, .355, 1),
      top .3s cubic-bezier(.645, .045, .355, 1),
      left .3s cubic-bezier(.645, .045, .355, 1);
  }
  &__tab {
    color: #444950;
    font-size: 14px;
    cursor: pointer;
    margin-right: 24px;
    padding: 12px 0;
    &.active {
      color: #000;
      font-weight: 700;
    }
  }

  &__content {
    overflow: hidden;
  }
}
</style>