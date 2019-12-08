<template>
  <div class="page page-drag-select">
    <div class="drag-select" v-dragSelect:item="drag">
      <div
        :class="{selected: item.selected, item: true}"
        v-for="item in selectList"
        :key="item.id">
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<script>
import DragSelect from '@/directives/drag-select.js'
const creatArray = (len) => {
  let i = 0;
  let arr = [];
  while(i < len) {
    arr.push({ id:i,name: i})
    i++
  }
  return arr;
}
export default {
  name: 'drag-select',
  directives: {
    DragSelect
  },
  data() {
    return {
      selectList: creatArray(19),
    }
  },
  methods: {
    drag(selected) {
      this.selectList = this.selectList.map((child,index) => {
        return {
          ...child,
          selected: selected.includes(index)
        }
      })
    },
  }
}
</script>

<style lang="scss">
.page-drag-select {
  padding: 20px;
  font-size: 16px;
  color: $colorMain;
  .drag-select {
    height: 400px;
    overflow-y: auto;
    user-select:none;
    background-color: #eee;
    margin: 20px 0;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .item {
      pointer-events: none;
      width: 100px;
      height: 100px;
      line-height: 100px;
      background-color: #ccc;
      margin: 30px;
      color: #fff;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      &.selected {
        background-color: #D463CB;
      }
    }
  }
}
</style>
