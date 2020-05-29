## Tabs 组件

对多组数据进行切换显示

### 水平切换


:::demo 直接使用 `v-model` 绑定被激活的项
```html
<template>
  <div class="tabs-demo">
    <hi-tabs v-model="tabActive">
      <hi-tab-panel name="first" label="选项一">
        1234
      </hi-tab-panel>
      <hi-tab-panel name="second" label="选项二">
        5678
      </hi-tab-panel>
      <hi-tab-panel name="third" label="选项gaoding">
        99fs9dfasfsf
      </hi-tab-panel>
    </hi-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabActive: 'first',
      };
    },
  };
</script>
```
:::

### 垂直切换


:::demo 给`positon`传入`left`
```html
<template>
  <div class="tabs-demo">
    <hi-tabs v-model="tabActive2" position="left">
      <hi-tab-panel name="first" label="选项一">
        1234
      </hi-tab-panel>
      <hi-tab-panel name="second" label="选项二">
        5678
      </hi-tab-panel>
      <hi-tab-panel name="third" label="选项gaoding">
        99fs9dfasfsf
      </hi-tab-panel>
    </hi-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabActive2: 'second'
      };
    },
  };
</script>
```
:::


### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label    | tab标题         | string | - | - |
| name   | tab对应的值 | Number, String | - | - |
| position   | 排列方向，用于hi-tabs | String | top/left | top |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| input | 切换tab的事件 | name |
