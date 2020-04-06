## DragSort 组件

将数据进行拖动分类，是一种比较直观、符合直觉的交互效果。

### 基本用法

页面中的非浮层元素，不会自动消失。

:::demo 支持使用`v-model`将数据传入
```html
<template>
  <hi-drag-sort
    v-model="gaoding"
    :styleConfig="styleConfig">
    <template #default="{data}">
        <div class="card" :class="{selected:data.selected }">
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
            "background-color": '#ccc'
          },
          {
            width: '33.333%',
            height: '500px',
            "background-color": '#d463cb'
          },
          {
            width: '33.333%',
            height: '500px',
            "background-color": '#ccc'
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
| title     | 标题           | string | — | — |
| type | 主题 | string | success/warning/info/error | info |
| description | 辅助性文字。也可通过默认 slot 传入 | string | — | — |
| closable | 是否可关闭 | boolean | — | true |
| center | 文字是否居中 | boolean | — | true |
| close-text | 关闭按钮自定义文本 | string | — | — |
| show-icon | 是否显示图标 | boolean | — | false |
| effect | 选择提供的主题 | string | light/dark | light |

### Slot

| Name | Description |
|------|--------|
| — | 描述 |
| title | 标题的内容 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭alert时触发的事件 | — |
