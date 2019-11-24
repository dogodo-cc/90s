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

    <div class="drag-select" v-dragSelect:item="drag">
      <div :class="{selected: item.selected}" class="item" v-for="item in selectList" :key="item.id">{{item.name}}</div>
    </div>
    
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { isPhone, downFile, downloadByLink } from '@90s/tools';
import DragSelect from '@/directives/drag-select.js'
const treeData = require('../../../scripts/tree.json')
export default {
  name: 'home',
  directives: {
    DragSelect
  },
  data() {
    return {
      isPhone,
      ratioW: 20,
      selectList: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(i => {
        return  {
          id:i,
          name: i
        }
      })
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
    drag(selected) {
      this.selectList = this.selectList.map((child,index) => {
        return {
          ...child,
          selected: selected.includes(index)
        }
      })
    }    
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

  .drag-select {
    height: 400px;
    overflow-y: auto;
    user-select:none;
    background-color: #eee;
    margin: 20px 0;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .item {
      pointer-events: none;
      width: 100px;
      height: 100px;
      line-height: 100px;
      background-color: #ccc;
      margin: 30px;
      color: #fff;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      &.selected {
        background-color: #D463CB;
      }
    }
  }
}
</style>
