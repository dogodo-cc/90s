<template>
  <div class="case-list">
    <a :href="item.href" target="_blank" v-for="item in list" :key="item.title">{{item.title}}</a>
  </div> 
</template>
<script>
import {list} from './list';
export default {
  name: 'case',
  data() {
    const nav = list.map(v => {
        return {
          href: `https://www.90s.co/${v}/index.html`,
          title: v
          }
      });
    return {
      list: nav
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log({to, from}); // eslint-disable-line
    next(vm=>{
      console.log(vm.list); // eslint-disable-line
    })
  }
}
</script>

<style lang="scss" scoped>
.case-list {
  display: flex;
  flex-wrap: wrap;
  a {
    display: block;
    width: 160px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 10px;
    font-size: 18px;
  }
}
</style>




