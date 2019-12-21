<template>
  <div class="drag-sort-demo">
    <div class="title">拖动分类 (按住shift键可多选) - (支持鼠标左键框选)</div>
    <DragSort
      v-model="gaoding"
      :styleConfig="styleConfig">
      <template #default="slotProps">
        <component :is="getComponent(slotProps.data.sex)" :data="slotProps.data"></component>
      </template>
    </DragSort>
  </div>
</template>

<script>
import DragSort from '@/components/DragSort/index.vue'
import CardBoy from './CardBoy.vue'
import CardGirl from './CardGirl.vue'
export default {
  name: 'drag-sort-demo',
  components: {
    DragSort
  },
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
    }
  },
  methods: {
    getComponent(sex) {
      return sex === 1 ? CardBoy : CardGirl
    }
  }
}
</script>

<style lang="scss">
.drag-sort-demo {
  .title {
    margin: 4px 0;
    color: #333;
    font-size: 14px;
  }
}
</style>