<template>
  <div class="danmaku-item" :class="{ biu: danmaku.biu }" :style="{ top: `${top}%` }">
    <div class="item">
      <div class="pic"><img :src="danmaku.avatar" alt="avatar"></div>
      <div class="content">
        <template v-if="danmaku.isImg">
          <div class="img-box">
            <img
              :src="danmaku.pic"
              :height="picMaxHeight"
            />
          </div>
        </template>
        <template v-else>
          <h4>{{ danmaku.userName }}</h4>
          <p>{{ danmaku.msg }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    danmaku: {
      type: Object,
      default: () => ({ msg: "欢迎使用弹幕工具！" })
    },
    runWayId: Number,
    picMaxHeight: Number
  },
  computed: {
    top() {
      return this.runWayId < 5
        ? 12.5 * (this.runWayId - 1)
        : 12.5 * this.runWayId;
    }
  }
};
</script>

<style lang="scss" scoped>
.danmaku-item {
  position: absolute;
  left: 0;
  white-space: nowrap;
  transform: translateX(800px); // TODO: 根据画布来自动设置
  will-change: transform;
  backface-visibility: hidden;
  &.biu {
    transform: translateX(-100%);
    transition: transform 9s linear;
  }

  .item {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 20px;
    padding:5px;
    .pic {
      width: 44px;
      height: 44px;
      margin-right: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .content {
      padding-right: 20px;
      h4 {
        font-size: 16px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
      }
      img {
        max-height: 100%;
      }
    }
  }
}
@media screen and (max-width:780px) {
  .danmaku-item {
    transform: translateX(500px);
    &.biu {
      transition: transform 6s linear;
    }
    .item {
      padding: 2px;
      .pic {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .content {
        padding-right: 10px;
        h4 {
          font-size: 12px;
          margin-bottom: 5px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
