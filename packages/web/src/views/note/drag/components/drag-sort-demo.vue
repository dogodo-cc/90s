<template>
  <div>
    <span>拖动分类，按住shift键可多选</span>
    <div class="drag-group-wrap">
      <DragSortGroup
        v-for="(group, index) in gaoding"
        :key="index"
        :index="index"
        :group="group"
        :selected="selected"
        @select="select"
        @group-drop="drop"
        v-dragSelect="{className: 'group-item', onlyElTriger: true, cb: dragSelect}">
        <template #default="slotProps">
          <component :is="getComponent(slotProps.data.sex)" :data="slotProps.data"></component>
        </template>
      </DragSortGroup>
    </div>
    <img alt="拖动多个文件时展示的图片，预加载" style="display:none" src="https://st-gdx.dancf.com/assets/20191209-163143-7009.png" />  
  </div>
</template>

<script>
import DragSelectDirective from '@/directives/drag-select.js'
import DragSortGroup from '@/components/DragSortGroup/index.vue'
import CardBoy from './CardBoy.vue'
import CardGirl from './CardGirl.vue'
export default {
  name: 'drag-sort-demo',
  components: {
    DragSortGroup
  },
  directives: {
    dragSelect:DragSelectDirective
  },
  data() {
    return {
      selected: {
        index: 0,
        ids: []
      },
      gaoding: [
        {
          title: 'uxms',
          members: [
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
          members: [
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
          members: [
            {
              id:9,
              name: '豆丁',
              sex: 1,
              selected: false
            }
          ]
        }
      ],
    }
  },
  watch: {
    selected: {
      handler: function(val) {
        this.gaoding = this.gaoding.map((group, i) => {
          if (i === val.index) {
            group.members = group.members.map(v => {
              v.selected = val.ids.includes(v.id);
              return v;
            })
          } else {
            group.members = group.members.map(v => {
              v.selected = false;
              return v;
            })
          }
          return group;
        })
      },
      deep: true
    }
  },
  methods: {
    getComponent(sex) {
      return sex === 1 ? CardBoy : CardGirl
    },
    select(v) {
      this.selected = v;
    },
    drop(originGroupIndex, targetGroupIndex) {
      const originTeam = this.gaoding[originGroupIndex].members;
      while(this.selected.ids.length) {
        const id = this.selected.ids.shift();
        const itemIndex = originTeam.findIndex(v => v.id === id);
        this.gaoding[targetGroupIndex].members.push(originTeam.splice(itemIndex,1)[0]);
      }
    },
    dragSelect(selected) {
      const index = this.gaoding.findIndex(v => {
        return v.members.some(o => selected.includes(o.id))
      })
      
      if (index !== -1) {
        this.selected = {
          index,
          ids: selected
        }
      }
    },
  }
}
</script>

<style lang="scss">
.drag-group-wrap {
  display: flex;
}
</style>