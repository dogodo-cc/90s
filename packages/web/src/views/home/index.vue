<template>
  <div class="page page-home">
    嗯哼，这是我的个人博客，没有UI设计，后面慢慢优化 .
    <br>
    <br>
    {{msg}}
  </div>
</template>
<script>
import {hi} from '@90s/tools';
export default {
  name: 'home',
  data() {
    return {
      msg: hi()
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  padding: 20px;
  font-size: 16px;
}
</style>
