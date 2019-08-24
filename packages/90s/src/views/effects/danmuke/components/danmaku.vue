<template>
  <div class="danmaku-wrap" ref="danmakuWrap" @transitionend="biuEnd">
    <template v-for="(runway, index) in runways">
      <danmaku-item
        v-for="(danmaku, i) in runway.seat"
        :data-way-index="index"
        :data-seat-index="i"
        :data-is-danmaku="true"
        :key="`${index}-${i}`"
        :danmaku="danmaku"
        :pic-max-height="picMaxHeight"
        :run-way-id="runway.id"
      ></danmaku-item>
    </template>
  </div>
</template>

<script>
import {uuid} from '@/utils/tool';
import DanmakuItem from "./danmaku-item.vue";
export default {
  components: { DanmakuItem },
  props: {
    danmakus: Array,
    locks: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // danmakuWait: [],
      danmakuGroup: [], // 总弹幕池
      runways: [
        {
          id: 1,
          lock: false,
          isFree: true,
          seat: [
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false }
          ]
        },
        {
          id: 2,
          lock: false,
          isFree: true,
          seat: [
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false }
          ]
        },
        {
          id: 3,
          lock: false,
          isFree: true,
          seat: [
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false }
          ]
        },
        {
          id: 4,
          lock: false,
          isFree: true,
          isFat: true,
          seat: [
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false }
          ]
        },
        {
          id: 5,
          lock: false,
          isFree: true,
          seat: [
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false }
          ]
        },
        {
          id: 6,
          lock: false,
          isFree: true,
          seat: [
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false }
          ]
        },
        {
          id: 7,
          lock: false,
          isFree: true,
          seat: [
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false },
            { biu: false }
          ]
        }
      ],
      picMaxHeight: 280 // 弹幕图片的最大高度
    };
  },
  watch: {
    danmakus: {
      handler(v) {
        const a = v.map(o => ({ ...o, id:uuid()}));
        this.danmakuGroup.push(...a);
      },
      immediate: true
    },
    locks: {
      handler(v) {
        this.runways.forEach(way => {
          way.lock = v.includes(way.id);
        });
      },
      immediate: true
    }
  },
  methods: {
    biuEnd(e) {
      const dataset = e.target.dataset;
      if (dataset.isDanmaku) {
        let wayI = parseInt(dataset.wayIndex, 10);
        let seatI = parseInt(dataset.seatIndex, 10);
        this.runways[wayI].seat[seatI].biu = false;
      }
    },
    // 没被锁 没弹幕正在进入 有空位
    findFreeWay() {
      let ways = [3,0,1,2,4,5,6]; // 优先从宽轨道查找
      const {runways} = this;
      for (const index of ways) {
        const way = runways[index];
        if(!way.lock && way.isFree && way.seat.some(s => !s.biu)) {
          return index;
        }
      }
      return -1;
      // 弃用： 因为它只会从第一个轨道开始找，在只有图片弹幕的时候，返回第一个轨道是不合理的
      // return this.runways.findIndex(v => {
      //   return !v.lock && v.isFree && v.seat.some(s => !s.biu);
      // })
    }
  },
  mounted() {
    const h = this.$refs.danmakuWrap.offsetHeight * 0.2;
    this.picMaxHeight = Math.ceil(h);

    const { danmakuGroup } = this;

    // 调度中心
    setInterval(() => {
      const freeWayIndex = this.findFreeWay();
      
      // 有空闲轨道 有弹幕
      if (freeWayIndex !== -1 && danmakuGroup.length > 0) {
        const freeWay = this.runways[freeWayIndex];
        let newDanmuke =  null;
        if (freeWay.isFat) {
          const imgDanmukeIndex = danmakuGroup.findIndex(v => v.isImg);
          newDanmuke = imgDanmukeIndex === -1 ?
                        danmakuGroup.shift() :
                        danmakuGroup.splice(imgDanmukeIndex,1)[0]; 
        } else {
          const txtDanmukeIndex = danmakuGroup.findIndex(v => !v.isImg);
          if (txtDanmukeIndex !== -1) {
            newDanmuke = danmakuGroup.splice(txtDanmukeIndex,1)[0]
          }
        }

        if (newDanmuke) {
          let freeSeatIndex = freeWay.seat.findIndex(v => !v.biu);
          // freeWay.seat.splice(freeSeatIndex, 1, {biu: true,...newDanmuke})
          // freeWay.seat[freeSeatIndex] = {biu: true,...newDanmuke};
          Object.assign(freeWay.seat[freeSeatIndex], {biu: true, ...newDanmuke});
          freeWay.isFree = false;
          window.setTimeout(() => {
            freeWay.isFree = true;
          }, 2600);
        }
      }

    }, 300);
  }
};
</script>

<style lang="scss">
.danmaku-wrap {
  overflow: hidden;
  user-select: none;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
