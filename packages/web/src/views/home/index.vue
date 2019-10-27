<template>
  <div class="page page-home">
    嗯哼，这是我的个人博客，没有UI设计，后面慢慢优化 .
    <br>
    手机模式：{{isPhone}}
    <br>
    测试vuex: {{showAdminButton}} <el-button @click="emitSetAdminButton">click</el-button> {{count}}
    <br>
    <el-button @click="download">下载</el-button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { isPhone, downFile } from '@90s/tools';
const treeData = require('../../../scripts/tree.json')
export default {
  name: 'home',
  data() {
    return {
      isPhone
    }
  },
  computed: {
    ...mapState('test', ['showAdminButton','count'])
  },
  methods: {
    ...mapActions('test', ['emitSetAdminButton']),
    download() {
      downFile('tree.json', JSON.stringify(treeData,null,2))
    }    
  }
}
</script>

<style lang="scss">
.page-home {
  padding: 20px;
  font-size: 16px;
  color: $colorMain;
}
</style>
