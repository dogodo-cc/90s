<template>
  <div class="page-404">
    <div class="pic" />
    <p>
      <router-link to="/">
        返回首页
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="postcss">
.page-404 {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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

