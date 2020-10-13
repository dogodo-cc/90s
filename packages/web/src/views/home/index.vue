<template>
  <div class="page page-home">
    嗯哼，这是我的个人博客，没有UI设计，后面慢慢优化 . 
    <br>
    手机模式：{{ isPhone }}
    <br>
    测试vuex: {{ showAdminButton }} <el-button @click="emitSetAdminButton">
      click
    </el-button> {{ count }}
    <br>

    <el-slider v-model="ratioW" style="width: 400px;" />

    <div v-hi-loading="loading"
         class="ratio-16-9"
         :style="{width: ratioW * 10 + 'px'}">
      <div class="ratio-box">
        <span>16:9</span>
      </div>
    </div>

    <div style="margin-top: 10px;">
      <el-button @click="downloadByLink">
        链接下载
      </el-button>
      <el-button type="primary" @click="download">
        内容下载
      </el-button>
      <el-button @click="loading = !loading">
        loading
      </el-button>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { mapState, mapActions } from 'vuex'
import { isPhone, downloadByContent, downloadByLink, getImageSize, array2tree } from '@90s/tools';
const treeData = require('../../../scripts/tree.json');
const imgLink = 'https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200419-223056-f167.png?x-oss-process=image/resize,w_675/interlace,1';

const arr = [
  {
    id: 1,
    name: '稿定',
  },
  {
    id: 2,
    name: '字节跳动',
  },
  {
    id: 3,
    name: '阿里巴巴',
  },
  {
    pid: 1,
    id: 'gd1',
    name: '设计能力',
  },
  {
    pid: 1,
    id: 'gd2',
    name: '企业中台',
  },
  {
    pid: 'gd1',
    id: '001',
    name: '元帅'
  },
  {
    pid: 'gd1',
    id: '002',
    name: '浣熊'
  },
  {
    pid: 'gd2',
    id: '003',
    name: '腰果'
  }
];
export default {
  name: 'Home',
  data() {
    return {
      isPhone,
      ratioW: 20,
      loading: false
    }
  },
  computed: {
    ...mapState('test', ['showAdminButton','count'])
  },
  async created() {
    const {width, height} = await getImageSize(imgLink);
    console.log('image size: ', width, height);

    console.log(array2tree(arr, 'id', 'pid'));
  },
  methods: {
    ...mapActions('test', ['emitSetAdminButton']),
    download() {
      downloadByContent('tree.json', JSON.stringify(treeData,null,2));
    },
    downloadByLink() {
      downloadByLink(imgLink, '下载文件');
    },
  }
}
</script>

<style lang="postcss">
.page-home {
  padding: 20px;
  font-size: 16px;
  color: var(--color-main);

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
