<template>
  <div class="page page-home">
    嗯哼，这是我的个人博客，没有UI设计，后面慢慢优化 .
    <br>
    {{a}} - 手机模式：{{isPhone}}
  </div>
</template>
<script>
import { a, isPhone } from '@90s/tools';
export default {
  name: 'home',
  data() {
    return {
      a,
      isPhone
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
