<template>
  <div class="page page-drag-select">
    <span>鼠标左键拖动框选 - 已选中 {{selected.join('、')}}</span>
    <div class="drag-select" v-dragSelect="{className: 'item', onlyElTriger: false,cb: drag}">
      <div
        :class="{selected: item.selected, item: true}"
        :data-id="item.id"
        v-for="item in selectList"
        :key="item.id">
        <div>
          {{item.name}}
        </div>
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
      selected: []
    }
  },
  methods: {
    drag(selected) {
      this.selected = selected;
      this.selectList = this.selectList.map(child => {
        return {
          ...child,
          selected: selected.includes(child.id)
        }
      })
    },
  }
}
</script>

<style lang="scss">
.page-drag-select {
  font-size: 16px;
  color: $colorMain;
  margin: 30px 0;
  .drag-select {
    height: 400px;
    overflow-y: auto;
    user-select:none;
    background-color: #eee;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .item {
      width: 100px;
      height: 100px;
      background-color: #ccc;
      margin: 30px;
      color: #fff;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      &.selected {
        background-color: #D463CB;
      }
      > div  {
        width: 60px;
        height: 60px;
        line-height: 60px;
        background-color: green;
        margin: 20px;
      }
    }
  }
}
</style>
