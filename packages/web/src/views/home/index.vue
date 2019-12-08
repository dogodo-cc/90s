<template>
  <div class="page page-home">
    嗯哼，这是我的个人博客，没有UI设计，后面慢慢优化 .
    <br>
    手机模式：{{isPhone}}
    <br>
    测试vuex: {{showAdminButton}} <el-button @click="emitSetAdminButton">click</el-button> {{count}}
    <br>
    <el-button @click="download">下载</el-button>

    <el-slider style="width: 400px;" v-model="ratioW"></el-slider>

    <div class="ratio-16-9" :style="{width: ratioW * 10 + 'px'}">
      <div class="ratio-box">
        <span>16:9</span>
      </div>
    </div>

    <el-button @click="downloadByLink">通过链接下载</el-button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { isPhone, downFile, downloadByLink } from '@90s/tools';
const treeData = require('../../../scripts/tree.json');

export default {
  name: 'home',
  data() {
    return {
      isPhone,
      ratioW: 20,
    }
  },
  computed: {
    ...mapState('test', ['showAdminButton','count'])
  },
  methods: {
    ...mapActions('test', ['emitSetAdminButton']),
    download() {
      downFile('tree.json', JSON.stringify(treeData,null,2))
    },
    downloadByLink() {
      downloadByLink('https://st0.dancf.com/csc/3/fonts/55/20180421-115128-59.woff');
      window.setTimeout(() => {
        downloadByLink('https://st0.dancf.com/csc/3/fonts/55/20180421-115128-58.ttf');
      }, 1000)
    },
  }
}
</script>

<style lang="scss">
.page-home {
  padding: 20px;
  font-size: 16px;
  color: $colorMain;

  .ratio-16-9 {
    position: relative;
    background-image: linear-gradient(-225deg, #D463CB 0%, #EC7979 100%);
    &::before {
      content: '';
      padding-top: 56.25%;
      display: block;
    }
    .ratio-box {
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #fff;
        font-size: 16px;
      }
  }
}
</style>
