<template>
  <div>
    <div ref="box" class="box">
      <span>{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mouse',
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
        var w = this.boxW,
            h = this.boxH,
            x = ( e.clientX - this.boxL - ( w / 2 ) ) * ( w > h ? ( h / w ) : 1 ),
            y = (e.clientY - this.boxT - (h / 2)) * (h > w ? (w / h) : 1),
            // 上(0) 右(1) 下(2) 左(3)
            direction = Math.round( ( ( ( Math.atan2( y, x ) * ( 180 / Math.PI ) ) + 180 ) / 90) + 3 ) % 4,
            dirName = new Array('上方','右侧','下方','左侧');
        if( e.type == 'mouseover' || e.type == 'mouseenter' ){
            this.text = dirName[direction] + '进入';
        }else{
            this.text = dirName[direction] + '离开';
        }
    }
  },
  mounted() {
    this.boxW = this.$refs.box.offsetWidth;
    this.boxH = this.$refs.box.offsetHeight;
    this.boxL = this.$refs.box.offsetLeft;
    this.boxT = this.$refs.box.offsetTop;
    this.$refs.box.addEventListener('mouseover',this.fn,false);
    this.$refs.box.addEventListener('mouseout',this.fn,false);
  }
}
</script>

<style lang="scss" scoped>
.box {
  width:400px;
  height:300px;
  text-align: center;
  line-height: 300px;
  background:grey;
  color:#fff;
  margin:30px auto
}
</style>


