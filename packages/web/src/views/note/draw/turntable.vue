<template>
<div class="uxms-draw">
  <img class="header" @click="useAudio = !useAudio" src="https://st-gdx.dancf.com/assets/20200113-202612-7b5c.png" alt="">
  <div class="turntable-box">
    <div
      class="turntable"
      :style="{
        transform: `rotate(${totalDeg}deg)`,
        transition: `transform ${time}ms cubic-bezier(0, .31, .57, 1.03)`
      }"
      @transitionend="isPlaying = false">
    </div>
    <div class="start" @click="start">
      <audio preload ref="audio" src="https://st-gdx.dancf.com/assets/20200111-170134-3df4.mov"></audio>
      <img src="https://st-gdx.dancf.com/assets/20200113-202647-01a4.png" alt="">
    </div>
  </div>
  <img class="footer" src="https://st-gdx.dancf.com/assets/20200113-202629-1375.png" alt="">
</div>  
</template>

<script>
export default {
  name: 'draw',
  data() {
    return {
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
      }, 30)
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
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: url('https://st-gdx.dancf.com/assets/20200113-202526-e195.png') top center no-repeat;
  background-size: cover;
  flex-direction: column;

  .turntable-box {
    position: relative;
    width: 300px;
    height: 300px;

    .turntable {
      position: relative;
      width: 100%;
      height: 100%;
      background: url('https://st-gdx.dancf.com/assets/20200113-202551-0521.png') center center no-repeat;
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
      transform: translate(-50%, -50%);
      img {
        max-width: 100%;
        width: 100%;
        margin-top: -9px;
      }
    }
  }
  .header {
    max-width: 100%;
  }
  .footer {
    max-width: 100%;
  }
}

</style>