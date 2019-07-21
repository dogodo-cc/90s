<template>
  <div class="page-404">
    <div>
      <div class="pic"></div>
      <p><router-link to="/">返回首页</router-link></p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'not-found'
}
</script>

<style lang="scss" scoped>
.page-404 {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .pic {
    width: 200px;
    height: 200px;
    background: svg-load('./assets/404.svg') no-repeat center center;
  }
  p {
    text-align: center;
    padding-top: 20px;
  }
}
</style>

