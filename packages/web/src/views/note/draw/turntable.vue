<template>
<div class="uxms-draw">
  <img class="header" @click="useAudio = !useAudio" src="./images/head.png" alt="">
  <div class="draw-turntable">
    <div
      class="turntable"
      :style="{
        transform: `rotate(${totalDeg}deg)`,
        transition: `transform ${time}ms cubic-bezier(0, .31, .57, 1.03)`
      }"
      @transitionend="isPlaying = false">
      <template v-if="false">
        <div
          :class="['piece', `piece-${index}`]"
          v-for="(item, index) in pieces"
          :key="index"
          >
          <div class="content">
            <span>{{item}}</span>
          </div>
        </div>
      </template>
    </div>
    <div class="start" @click="start">
      <img src="./images/btn.png" alt="">
    </div>
  </div>
  <audio preload ref="audio" src="https://st-gdx.dancf.com/assets/20200111-170134-3df4.mov"></audio>
  <img class="footer" src="./images/foot.png" alt="">
</div>  
</template>

<script>
export default {
  name: 'draw',
  data() {
    return {
      pieces: ['牛仔', '焦糖','冻结','元帅','腰果','希罗','再来','童童','坐标','冰粉','再来','王导'],
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
        this.totalDeg = 360 * 8 + this.radis * random + this.radis / 2;
        this.time = 10 * 1000;
        this.playAudio();
        console.log(this.pieces.resever()[random], random);// eslint-disable-line
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
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  background: url('./images/bg.png') top center no-repeat;
  background-size: cover;
  .header {
    position: fixed;
    top: 0;
    max-width: 100%;
  }
  .footer {
    position: fixed;
    bottom: 0;
    max-width: 100%;
  }
}
.draw-turntable {
  position: relative;
  width: 300px;
  height: 300px;

  .turntable {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('./images/turntable.png') center center no-repeat;
    background-size: cover;
    transform-origin: center center;
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
    img {
      max-width: 100%;
      width: 100%;
      margin-top: -9px;
    }
  }
}

</style>