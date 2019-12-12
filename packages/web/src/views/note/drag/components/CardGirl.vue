<template>
  <div :class="{'card-girl':true, selected: data.selected}">
    {{data.name}}
  </div>
</template>

<script>
export default {
  name: 'CardGirl',
  props: {
    data: {
      type: Object,
      default: () => ({name: 'name', selected: false})
    }
  }
}
</script>

<style lang="scss">
.card-girl {
  // pointer-events: none;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: green;
  color: #fff;
  position: relative;
  &::after {
    content: 'girl';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 24px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    background-color: antiquewhite;
    color: #333;
  }
  &.selected {
    background-color: blue;
  }
}

</style>  