<template>
  <div class="carousel" :style="{width: width + 'px'}">
    <div class="carousel-wrap" :style="wrapStyle">
      <div class="carousel-inner"
           :style="innerStyle"
           @transitionend="transitionend">
        <component
          :is="slideTag(item.link).is"
          v-for="(item, index) in slideList"
          :key="item.id || index"
          class="slide-item"
          :class="{active: currentIndex === index}"
          v-bind="slideTag(item.link).bind"
          :style="slideStyle">
          <img draggable="false"
               :src="item.url"
               :alt="item.title">
        </component>
      </div>
    </div>

    <div class="pagination"
         :class="[{
           'pagination-left': paginationDirection === 'left',
           'pagination-center': paginationDirection === 'center',
           'pagination-right': paginationDirection === 'right'
         }, paginationType]">
      <div v-for="(item, index) in list"
           :key="item.id || index"
           :style="{'margin-left': index === 0 ? 0 : paginationMargin + 'px'}"
           class="pagination-item"
           :class="{active: paginationActive(index),}"
           @click="paginationClick(index)">
        <img v-if="paginationType === 'thumbnail'"
             draggable="false"
             :src="item.url"
             :alt="item.title">
      </div>
    </div>
  </div>
</template>

<script>
import autoplay from './mixins/autoplay';

export default {
  name: 'Carousel',
  mixins: [autoplay],
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 300
    },
    effect: {
      type: String,
      validator: function(value) {
        return ["slide", "fade"].includes(value);
      },
      default: "slide"
    },
    direction: {
      type: String,
      validator: function(value) {
        return ["horizontal", "vertical"].includes(value);
      },
      default: "horizontal"
    },
    easing: {
      type: String,
      validator: function(value) {
        return ["ease", "linear", "ease-in", "ease-out", "ease-in-out"].includes(value)
          || value.includes("cubic-bezier");
      },
      default: "ease"
    },
    /**
     * 是否循环
     */
    loop: {
      type: Boolean,
      default: false
    },
    // 运动时间
    duration: {
      type: Number,
      default: 400
    },
    paginationDirection: {
      type: String,
      validator: function(value) {
        return ['left', 'center', 'right'].includes(value);
      },
      default: 'center'
    },
    paginationMargin: {
      type: Number,
      default: 10
    },
    paginationType: {
      type: String,
      validator: function(value) {
        return ['dot', 'thumbnail' ].includes(value);
      },
      default: 'dot'
    }
  },
  data() {
    return {
      currentIndex: 0,
      isReset: false, // 如果处于重置状态，不需要动画效果，用于loop模式的重置
    }
  },
  computed: {
    slideList() {
      const {list, isSlideLoop} = this;

      if (isSlideLoop) {
        const first = {...list[0], id: 'first'};
        const last = {...list[list.length - 1], id: 'last'};
        return [last, ...list, first];
      }
      return list;
    },
    slideNum() {
      return this.slideList.length;
    },
    wrapStyle() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
      }
    },
    innerStyle() {
      const {effect, direction, width, height, slideNum, transform, duration, easing, isReset} = this;
      if (effect === 'fade') {
        return {
          ...this.wrapStyle,
          position: 'relative',
        };
      } else {
        const style = {
          transform: transform,
          transition: isReset ? '' : `transform ${duration}ms ${easing} 0s`,
        }
        if (direction === 'horizontal') {
          return {
            width: width * slideNum + 'px',
            height: height + 'px',
            display: 'flex',
            ...style
          }
        } else {
          return {
            width: width + 'px',
            height: height * slideNum + 'px',
            ...style
          }
        }
      }
    },
    slideStyle() {
      const {effect, wrapStyle, duration} = this;
      if (effect === 'fade') {
        return {
          ...wrapStyle,
          position: 'absolute',
          top: 0,
          left: 0,
          transition: `opacity ${duration}ms linear 0s`,
          opacity: 0
        }
      }
      return wrapStyle;
    },
    transform() {
      const {effect, direction, width, height, currentIndex} = this;
      return effect === 'slide'
        ? direction === 'vertical'
          ? `translate3d(0px, ${-height * currentIndex}px, 0px)`
          : `translate3d(${-width * currentIndex}px, 0px, 0px)`
        : 'translate3d(0px, 0px, 0px)';
    },
    isSlideLoop() {
      return this.loop && this.effect === 'slide';
    }
  },
  watch: {
    currentIndex(v) {
      if (this.loop) {
        if (v === 0 || v === this.slideNum - 1) {
          return;
        }
        this.$emit('change', v - 1);
      } else {
        this.$emit('change', v);
      }
    }
  },
  created() {
    const {loop} = this;
    if (loop) {
      this.currentIndex = 1;
    }
  },
  methods: {
    slideTag(v) {
      if(v) {
        return {
          is: 'a',
          bind: {
            href: v,
            target: '_blank'
          }
        }
      }
      return {
        is: 'div'
      }
    },
    advancePage(dir = 'forward') {
      const {currentIndex, slideNum} = this;
      if (dir === 'forward') {
        this.currentIndex = currentIndex < (slideNum - 1) ? (currentIndex + 1) : 0;
      } else {
        this.currentIndex = currentIndex > 0 ? (currentIndex - 1) : slideNum - 1;
      }
    },
    reset(v) {
      this.isReset = true;
      this.currentIndex = v;
      this.pauseAutoplay();
      this.$nextTick(() => {
        this.isReset = false;
        this.startAutoplay();
      })
    },
    transitionend() {
      const {isSlideLoop, currentIndex, slideNum} = this;
        
      if (isSlideLoop) {
        if (currentIndex === slideNum - 1) {
          this.reset(1); // 已经滑动到最后一个，需要重置到原数组第一个
        } else if (currentIndex === 0) {
          this.reset(slideNum - 2); // 已经滑动到最第一个，需要重置到原数组最后一个
        }
      } 
    },
    paginationActive(i) {
      const {isSlideLoop, currentIndex, list, slideNum} = this;
      if (isSlideLoop) {
        if (i === 0) {
          return [1, slideNum - 1].includes(currentIndex);
        }
        if (i === list.length - 1) {
          const last = i + 1;
          return [last, 0].includes(currentIndex);
        }
        return i === currentIndex - 1;
      }
      return i === currentIndex;
    },
    paginationClick(i) {
      this.currentIndex = this.isSlideLoop ? i + 1 : i;
    }
  }
}
</script>

<style lang="scss">
.carousel {
    position: relative;
}
.carousel-wrap {
    overflow: hidden;
}
.slide-item {
    display: block;
    overflow: hidden;
    &.active {
        opacity: 1!important;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.pagination {
    display: flex;

    &.pagination-left {
        justify-content: flex-start;
    }
    &.pagination-center {
        justify-content: center;
    }
    &.pagination-right {
        justify-content: flex-end;
    }

    &.thumbnail {
        margin-top: 20px;

        .pagination-item {
            width: 80px;
            height: 30px;
            border: 1px solid #ccc;
            &.active {
                border: 1px solid blue;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                cursor: pointer;
            }
        }
    }

    &.dot {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;

        .pagination-item {
            cursor: pointer;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #ccc;
            &.active {
                background-color: blue;
            }
        }
    }
}
</style>