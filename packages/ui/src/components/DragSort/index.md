## DragSort 组件

将数据进行拖动分类，是一种比较直观、符合直觉的交互效果。

### 基本用法

对一个对象数组进行拖动分类

:::demo 支持使用`v-model`将数据传入
```html
<template>
  <hi-drag-sort
    v-model="gaoding"
    :styleConfig="styleConfig">
    <template #default="{data}">
        <div class="card" :class="{selected: data.selected }">
          {{data.name}}
          <span>{{data.sex === 1 ? 'boy' : 'girl'}}</span>
        </div>
    </template>
  </hi-drag-sort>
</template>
<script>
  export default {
    data() {
      return {
        gaoding: [
          {
            title: 'uxms',
            childrens: [
              {
                id:1,
                name: '元帅',
                sex: 1,
                selected: false
              },{
                id:2,
                name: '童童',
                sex: 0,
                selected: false
              },{
                id:3,
                name: '浣熊',
                sex: 1,
                selected: false
              },{
                id:4,
                name: '腰果',
                sex: 0,
                selected: false
              },{
                id:5,
                name: '坐标',
                sex: 0,
                selected: false
              }
            ]
          },
          {
            title: 'editor',
            childrens: [
              {
                id: 6,
                name: '小米',
                sex: 1,
                selected: false},
              {
                id: 7,
                name: '诺亚',
                sex: 1,
                selected: false
              },
              {
                id: 8,
                name: '流浪人',
                sex: 1,
                selected: false
              }
            ]
          },
          {
            title: 'ai',
            childrens: [
              {
                id:9,
                name: '豆丁',
                sex: 1,
                selected: false
              }
            ]
          }
        ],
        styleConfig: [
          {
            width: '33.333%',
            height: '500px',
            "background-color": '#eee'
          },
          {
            width: '33.333%',
            height: '500px',
            "background-color": 'rgb(235, 221, 221)'
          },
          {
            width: '33.333%',
            height: '500px',
            "background-color": '#eee'
          }
        ]
      };
    },
    methods: {
      
    }
  };
</script>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model     | 需要被分类的对象数组           | array | — | — |


### Slot

| Name | Description |
|------|--------|
| — | 描述 |
| default | 自定义的拖动卡片组件 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 拖动完成 | `orginalIndex`, `targetIndex`, `ids` 原组的索引和目标组的索引，且把被分类的id返回 |
