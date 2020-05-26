<template>
  <div class="page page-css-animate">
    <div class="animate-step" />
  </div>
</template>

<style lang="scss">
.page-css-animate {
  padding: 15px;
}
.animate-step {
  outline: 1px dashed #ccc;
  width: 147px;
  height: 92.5px;
  animation: ball 1s steps(7) infinite;
  background: url('./assets/ball.png') 0 0 no-repeat;
}

@keyframes ball {
  to { background-position: 0 -647.5px; }
}
</style>
