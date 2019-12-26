<template>
  <div class="draw">
    <div class="title">设计工坊尾牙抽奖</div>
    <div class="box">
        <div
          :class="{start: member === '开始',item: true}"
          v-for="(member, index) in members"
          :key="index"
          @click="start(member)">
          {{member}}
        </div>
        <div class="spin" :style="{transform: `translate(${x}px, ${y}px)`}"></div>
    </div>
  </div>
</template>

<script>
const before = ['希罗','腰果','重来','童童'];
const after = ['元帅','重来','坐标','王导'];
export default {
  name: 'draw',
  data() {
    return {
      x:0,
      y:0,
      members: [...before, '开始', ...after ],
      lock: false
    }
  },
  methods: {
    generateCirclePath(n, cell) {
      let arr = [];
      for(let i = 0; i < n; i++ ) {
        arr.push([i*cell, 0]);
      }
      for(let i = 0; i < n-1; i++) {
        arr.push([(n-1)*cell, (i+1)*cell]);
      }
      for (let i=0;i< n-1;i++) {
        arr.push([(n-i-2)*cell,(n-1)*cell])
      }
      for(let i=0; i<n-2; i++) {
        arr.push([0, (n-i-2)*cell]);
      }
      return arr;
    },
    run(path, n =1, speed = 60, i = 0, len = path.length, random = Math.floor(Math.random() * len)) {
      setTimeout(() => {
        if(n > 0) {
          this.lock = true;
          // 如果n为1,则设置中奖数值
          if(n === 1) {
            len = random
          }
          if(len <= i) {
              i = n === 1 ? len : 0
              n--
              speed += (300 - speed) / n
          }
          const [x, y] = path[i];
          this.x = x;
          this.y = y;
          this.run(path, n, speed, ++i, len, random)
        } else {
          this.lock = false;
        }
      }, speed);
    },
    start(v) {
      if (v !== '开始' || this.lock) return;
      const path = this.generateCirclePath(3, 100);
      this.run(path, 8)
    }
  }
}
</script>

<style lang="scss" scoped>
.draw {
  .title {
    font-size: 20px;
    padding: 20px 0;
    text-align: center;
  }
  .box {
      display: flex;
      flex-wrap: wrap;
      width: 300px;
      height: 300px;
      margin: 0 auto;
      position: relative;
      background-color: seagreen;
      color: #fff;
      user-select: none;
      .item {
          width: 100px;
          text-align: center;
          line-height: 100px;
          font-size: 20px;
      }
      .start {
        background-color:aquamarine;
        cursor: pointer;
      }
      // 滑块
      .spin {
          position: absolute;
          left: 0;
          top: 0;
          display: inline-block;
          width: 100px;
          height: 100px;
          background-color: rgba(0,0,0,.2);
      }
  }
}

</style>