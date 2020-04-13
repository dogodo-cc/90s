<template>
  <div class="page page-home">
    设计工坊UI组件库，只是对ElementUI or AntUI的一个补充。
    
  <Loading></Loading>

   
  </div>
</template>
<script>
import { isPhone } from '@90s/tools';
import Loading from '../../components/Loading/src/index.vue'

export default {
  name: 'home',
  components: { Loading },
  data() {
    return {
      isPhone,
    }
  },
  methods: {
    
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
