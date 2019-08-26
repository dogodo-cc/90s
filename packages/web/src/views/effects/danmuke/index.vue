<template>
  <div class="page page-danmuke">
    <div class="stage">
      <Danmaku :danmakus="danmakus" :locks="locks"></Danmaku>
    </div>
    <div class="control">
      <el-radio-group v-model="stage" @change="changeStage" size="small">
        <el-radio-button label="full">全屏</el-radio-button>
        <el-radio-button label="up">上屏</el-radio-button>
        <el-radio-button label="middle">中屏</el-radio-button>
        <el-radio-button label="down">下屏</el-radio-button>
      </el-radio-group>
      <div>
        <el-button type="primary" @click="getMessage" style="margin-top: 15px">获取数据</el-button>
        <el-button type="primary" @click="sendPic" style="margin-top: 15px">发送图片</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Danmaku from "./components/danmaku.vue";
import {danmakus,pic} from './danmuke.js';
const stageMap = {
        'full': [],
        'up': [5, 6, 7],
        'middle': [1, 2, 6, 7],
        'down': [1, 2, 3]};

export default {
  name: 'danmuke-page',
  components: {Danmaku},
  data() {
    return {
      stage: 'full',
      locks: [],
      danmakus: []
    }
  },
  methods: {
    changeStage(v) {
      this.locks = stageMap[v] || [];
    },
    getMessage() {
      this.danmakus = danmakus.map(v => v)
    },
    sendPic() {
      this.danmakus = [pic].map(v => v);
    }
  },
  created() {
    this.danmakus = danmakus;
  }
}
</script>

<style lang="scss">
.page-danmuke {
  display: flex;
  .stage {
    width: 800px;
    height: 500px;
    background-color: aliceblue;
  }
  .control {
    padding:10px 0 0 10px;
  }
}

@media screen and (max-width:780px) {
  .page-danmuke {
    .stage {
      width: 500px;
      height: calc(100vh - 50px);
    }
  }
}
</style>
