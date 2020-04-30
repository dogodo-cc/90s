## Filters 组件

对数据进行筛选

### 基本用法


:::demo 支持单选和多选
```html
<template>
  <div class="filters-demo">
    <hi-filters title="单选" :value="value1" @change="change" :options="opts"/>
    <hi-filters title="多选" :value="value2" :multiple="true" @change="change2" :options="opts2"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        opts: [{label: '校园',value: 1}, {label: '科技', value: 2}, {label: '复古', value: 3}],
        opts2: [
          {label: '校园',value: 1},
          {label: '科技', value: 2},
          {label: '复古', value: 3},
          {label: '可爱', value: 4},
          {label: '性感', value: 5},
          {label: '风景', value: 6},
          {label: '城市', value: 7},
          {label: '道路', value: 8},
          {label: '灯光', value: 9},
          {label: '数码', value: 10},
        ],
        value1: '',
        value2: [],
      };
    },
    methods: {
      change(v) {
        this.value1 = v;
      },
      change2(v) {
        this.value2 = v;
      }
    }
  };
</script>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title    | 筛选项标题         | string | — | — |
| value   | 当前选中的值 | Number, String, Array | — | - |
| options   | 列表 | Array | — | [] |
| showAll   | 是否显示全部按钮 | Boolean | true/false | true |
| multiple   | 是否多选 | Boolean | true/false | false |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 选中值改变的回调函数 | value |
