<template>
<div class="uxms-draw">
  <el-switch class="switch" v-model="useAudio"/>
  <div class="title">设计工坊&哥伦布尾牙抽奖</div>
  <div class="draw-turntable">
    <div
      class="turntable"
      :style="{
        transform: `rotate(${totalDeg}deg)`,
        transition: `transform ${time}ms cubic-bezier(0, .31, .57, 1.03)`
      }"
      @transitionend="isPlaying = false">
      <div
        :class="['piece', `piece-${index}`]"
        v-for="(item, index) in pieces"
        :key="index"
        >
        <div class="content">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <div class="start" @click="start"></div>
  </div>
  <audio preload ref="audio" src="https://st-gdx.dancf.com/assets/20200111-170134-3df4.mov"></audio>
</div>  
</template>

<script>
export default {
  name: 'draw',
  data() {
    return {
      pieces: ['冻结','冰粉','王导','再来', '元帅','腰果','冻结','希罗','童童','坐标','焦糖','牛仔'],
      radis: 30,
      time: 0,
      totalDeg: 0,
      isPlaying: false,
      useAudio: true,
    }
  },
  computed: {
    $audio() {
      return this.$refs.audio;
    }
  },
  methods: {
    start() {
      if(this.isPlaying) return;
      this.isPlaying = true;
      this.time = 0;
      this.totalDeg = 0;

      setTimeout(() => {
        const random = Math.floor(Math.random() * 12);
        this.totalDeg = 360 * 5 + this.radis * random + this.radis / 2;
        this.time = 10 * 1000;
        this.playAudio();
        console.log(this.pieces[random], random);// eslint-disable-line
      }, 100)
    },
    playAudio() {
      if (!this.useAudio) return;
      const {$audio} = this;
      if ($audio.paused) {
        $audio.play();
      }
    }
  }
}
</script>

<style lang="scss">
.uxms-draw {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 20px;
    padding: 20px 0;
    text-align: center;
  }
  .switch {
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
.draw-turntable {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 30px auto;

  .turntable {
    position: relative;
    width: 100%;
    height: 100%;
    left: 50%;
    transform-origin: left center;
    .piece {
      position: absolute;
      left: 0;
      top: 0;
      width: 150px;
      height: 300px;
      border-radius: 0 150px 150px 0;
      transform-origin: left center;
      .content {
        width: 50%;
        height: 50%;
        transform: rotate(15deg);
        transform-origin: left top;
        text-align: center;
        span {
          color: #fff;
        }
      }
      &:nth-child(even) {
        background-image: linear-gradient(120deg, green,green 75px, transparent 75px);
      }
      &:nth-child(odd) {
        background-image: linear-gradient(120deg, #ccc, #ccc 75px, transparent 75px);
      }
    }
    @for $index from 0 to 11 {
      .piece-#{$index} {
        transform: rotate(-30deg * ($index + 1));
      }
    }
  }
  .start {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -25px;
    margin-top: -25px;
    &::after {
      display: block;
      position: absolute;
      left: 50%;
      top: -18px;
      margin-left: -10px;
      content: '';
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 20px solid #fff;
    }
  }
}

</style>