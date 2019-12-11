<template>
  <div class="page page-drag">
    <span>拖动分类，按住shift键可多选</span>
    <div class="drag-sort">
      <div
        :class="[`team-${index + 1}`, 'team']"
        v-for="(team,index) in gaoding"
        :key="team.title"
        :data-title="team.title + ' 项目'"
        :data-origin-index="index"
        @dragover="dragOver"
        @drop="drop"
        v-dragSelect="{className: 'item', onlyElTriger: true,cb: dragSelect}"
        >
        <div :class="{item:true, selected: member.selected}"
          draggable="true"
          @click.shift="select(member.id, index, true)"
          @click.exact.stop="select(member.id, index)"
          @dragstart="dragStart"
          :data-origin-index="index"
          :data-id="member.id"
          v-for="member in team.members"
          :key="member.id">
          {{member.name}}</div>
      </div>
    </div>

    <DragSelect></DragSelect>
    <img src="https://st-gdx.dancf.com/assets/20191209-163143-7009.png" alt="" style="display:none">
  </div>
</template>
<script>
import DragSelect from './components/drag-select.vue'
import DragSelectDirective from '@/directives/drag-select.js'
const image = 'https://st-gdx.dancf.com/assets/20191209-163143-7009.png';
function createDragImage(ev) {
  var img = new Image(); 
  img.src = image; 
  ev.dataTransfer.setDragImage(img, 64, 64);
}
export default {
  name: 'drap',
  components: {
    DragSelect
  },
  directives: {
    dragSelect: DragSelectDirective
  },
  data() {
    return {
      selected: {
        index:0,
        ids: []
      },
      gaoding: [
        {
          title: 'uxms',
          members: [{
          id:1,
          name: '元帅'
        },{
          id:2,
          name: '童童'
        },{
          id:3,
          name: '浣熊'
        },{
          id:4,
          name: '腰果'
        },{
          id:5,
          name: '坐标'
        }]
        },
        {
          title: 'editor',
          members: [{
          id: 6,
          name: '小米'
        },
        {
          id: 7,
          name: '诺亚'
        },
        {
          id: 8,
          name: '流浪人'
        }]
        },
        {
          title: 'ai',
          members: [
          {
            id:9,
            name: '豆丁'
          }
        ]
        }
      ]
    }
  },
  watch: {
    selected: {
      handler: function(val) {
        this.gaoding = this.gaoding.map((team, i) => {
          if (i === val.index) {
            team.members = team.members.map(v => {
              v.selected = val.ids.includes(v.id);
              return v;
            })
          } else {
            team.members = team.members.map(v => {
              v.selected = false;
              return v;
            })
          }
          return team;
        })
      },
      deep: true
    }
  },
  methods: {
    select(id, index, multiple = false) {
      if (this.selected.index === index) {
        const includes = this.selected.ids.includes(id);
        if (multiple) {
          if (includes) {
            const _i = this.selected.ids.findIndex(v => v.id === +id);
            this.selected.ids.splice(_i, 1);
          } else {
            this.selected.ids.push(id);
          }
        } else {
          this.selected.ids = includes ? [] : [id];
        }
      } else {
        this.selected.index = index;
        this.selected.ids = [id];
      }
    },
    dragStart(ev) {
      const { originIndex, id } = ev.target.dataset;
      const length = this.selected.ids.length;

      if (length === 0) {
        this.select(+id, +originIndex);
      }

      if (length > 1) { 
        createDragImage(ev);
      } 

      const { dataTransfer } = ev;
      dataTransfer.dropEffect = "move";
      dataTransfer.setData("text", `${originIndex}-${id}`);
    },
    dragOver(ev) {
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      const data = ev.dataTransfer.getData("text");
      const [originIndex] = data.split('-').map(v => +v);
      const targetGroupIndex = +ev.target.dataset.originIndex;
      if (originIndex === targetGroupIndex) return;

      const originTeam = this.gaoding[originIndex].members;
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
.page-drag {
  padding: 20px;
  font-size: 16px;
  color: $colorMain;

  .drag-sort {
    height: 500px;
    display: flex;
    .team {
      background-color: #ccc;
      align-self: stretch;
      width: 33.333%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      position: relative;
      &::after {
        display: block;
        position: absolute;
        bottom: 10px;
        left: 10px;;
        content: attr(data-title)
      }
      &:drag-over {
        border: 1px solid black;
      }
    }
    .team-2 {
      background-color:#D463CB;
    }
    .item {
      width: 80px;
      height: 80px;
      line-height: 80px;
      margin: 10px;
      text-align: center;
      background-color: green;
      color: #fff;
      &.selected {
        background-color: blue;
      }
    }
  }
}
</style>
