<template>
  <div>
    <div
      ref="box"
      class="box"
      @mouseenter="fn"
      @mouseleave="fn"
      >
      <span>{{text}}</span>
    </div>
    <DotRing></DotRing>
  </div>
</template>

<script>
import DotRing from '../components/dot-ring/index.vue'
/**
 * 知识点：
 * mouseover: 穿过指定元素或其子元素 对应： mouseout
 * mouseenter: 只有穿过指定元素 对应：mouseleave
**/
const dirMap = {
  'mouseenter': '进入',
  'mouseleave': '离开'
}
export default {
  name: 'mouse',
  components: {
    DotRing
  },
  data() {
    return {
      text: '',
      boxW: 0,
      boxH: 0,
      boxL: 0,
      boxT: 0,
    }
  },
  methods: {
    fn(e){
        let w = this.boxW,
            h = this.boxH,
            x = ( e.clientX - this.boxL - ( w / 2 ) ) * ( w > h ? ( h / w ) : 1 ),
            y = (e.clientY - this.boxT - (h / 2)) * (h > w ? (w / h) : 1),
            // 上(0) 右(1) 下(2) 左(3)
            direction = Math.round( ( ( ( Math.atan2( y, x ) * ( 180 / Math.PI ) ) + 180 ) / 90) + 3 ) % 4,
            dirName = ['上方','右侧','下方','左侧'];

        this.text = dirName[direction] + dirMap[e.type];
    }
  },
  mounted() {
    const {offsetWidth, offsetHeight, offsetLeft, offsetTop} = this.$refs.box;
    this.boxW = offsetWidth;
    this.boxH = offsetHeight;
    this.boxL = offsetLeft;
    this.boxT = offsetTop;
  }
}
</script>

<style lang="scss" scoped>
.box {
  width:300px;
  height:200px;
  line-height: 200px;
  text-align: center;
  background:grey;
  color:#fff;
  font-size: 14px;
  margin:30px auto
}
</style>


