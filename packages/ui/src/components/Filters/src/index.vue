<template>
  <div :class="bem()">
    <div :class="bem('title')">
      <slot name="title">
        <span v-show="title" :class="bem('title')">{{title}}</span>
      </slot>
    </div>
    <div :class="bem('list', {'close': !expansion})" ref="list">
      <span v-if="showAll" :class="bem('item', { active: getAllActive })" @click="clickAll">全部</span>
      <span
        :class="bem('item', {active: getItemActive(option.value)})"
        v-for="option in options"
        :key="option.value"
        :data-id="option.value"
        @click="clickItem(option.value)"
      >{{option.label}}</span>
    </div>
    <div :class="bem('control')">
      <div :class="bem('expansion')" v-if="showControl" @click="toggle">
        {{expansion ? '收起' : '展开'}}
        <svg-icon color="#666666" :name="expansion ? 'line-up' : 'line-down'" />
      </div>
    </div>
  </div>
</template>

<script>
import bem from "../../../mixins/bem";
import { createComponentName } from "../../../utils/component";
import { cloneDeep } from "../../../utils/index";

export default {
  name: createComponentName("filters"),
  mixins: [bem],
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String, Array],
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    showAll: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showControl: false,
      expansion: false,
      minHeight: "30px",
      maxHeight: ""
    };
  },
  computed: {
    getAllActive() {
      return this.multiple ? !this.value.length : !this.value;
    },
    $list() {
      return this.$refs["list"];
    }
  },
  methods: {
    getItemActive(v) {
      if (this.multiple) {
        return this.value.includes(v);
      } else {
        return this.value === v;
      }
    },
    change(v) {
      this.$emit("change", v);
    },
    clickAll() {
      this.change(this.multiple ? [] : "");
    },
    clickItem(v) {
      if (this.multiple) {
        let selected = cloneDeep(this.value);
        if (!Array.isArray(selected)) {
          selected = selected.split(",");
        }
        const index = selected.findIndex(o => o === v);
        if (index === -1) {
          selected.push(v);
          this.change(selected);
        } else {
          selected.splice(index, 1);
          this.change(selected);
        }
      } else {
        this.change(v);
      }
    },
    toggle() {
      const { minHeight, maxHeight, expansion } = this;
      this.$list.style.height = expansion ? minHeight : maxHeight;
      this.expansion = !expansion;
    }
  },
  mounted() {
    const listWidth = this.$list.offsetWidth - 40; // padding: 0 20px;
    const listHeight = this.$list.offsetHeight;
    this.maxHeight = listHeight + "px";

    // 将被折叠起来的选项
    let willHiddenList = [];
    const listItems = this.$list.querySelectorAll(".hi-filters__item");

    const listContentWidth = Array.from(listItems).reduce((total, next) => {
      if (total >= listWidth) {
        next.classList.add("will-hidden");

        // 判断被折叠起来的项目是否为激活项
        let value = next.dataset.id;
        value = isNaN(+value) ? value : +value;
        willHiddenList.push(value);
      }
      const width = next.offsetWidth;
      total += width + 8;
      return total;
    }, 0);
    this.showControl = listContentWidth > listWidth;

    this.expansion = this.multiple
      ? this.value.some(v => willHiddenList.includes(v))
      : willHiddenList.includes(this.value);

    this.$list.style.height = this.expansion ? this.maxHeight : this.minHeight;
  }
};
</script>