<template>
  <div class="page page-home">
    嗯哼，这是我的个人博客，没有UI设计，后面慢慢优化 .
    <br>
    {{a}} - 手机模式：{{isPhone}}
    <br>
    测试vuex: {{showAdminButton}} <el-button @click="emitSetAdminButton">click</el-button> {{count}}
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { a, isPhone } from '@90s/tools';
export default {
  name: 'home',
  data() {
    return {
      a,
      isPhone
    }
  },
  computed: {
    ...mapState('test', ['showAdminButton','count'])
  },
  methods: {
    ...mapActions('test', ['emitSetAdminButton'])
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
