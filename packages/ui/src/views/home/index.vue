<template>
  <div class="page page-home">
    ui 库.
    
  <Loading></Loading>

   
  </div>
</template>
<script>
import { isPhone } from '@90s/tools';
import Loading from '../../components/Loading/src/main.vue'

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
