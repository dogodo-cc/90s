<template>
  <div class="drag-select-demo">
    <div class="title">鼠标左键框选 - 已选中 {{selected.join('、')}}</div>
    <div class="drag-select" v-dragSelect="{className: 'item', onlyElTriger: false,cb: drag}">
      <div
        :class="{selected: item.selected, item: true}"
        :data-id="item.id"
        v-for="item in selectList"
        :key="item.id">
        <div>
          <!-- 多套一层div 测试点击更深的子元素的坐标准确性 -->
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HelloUI from '90s-ui';
const {dragSelect} = HelloUI;
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
    dragSelect
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
.drag-select-demo {
  margin: 40px 0;
  .title {
    margin: 4px 0;
    color: #333;
    font-size: 14px;
  }
 
  .drag-select {
    height: 400px;
    overflow-y: auto;
    user-select:none;
    background-color: #eee;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .item {
      width: 100px;
      height: 100px;
      background-color: #ccc;
      margin: 20px;
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
