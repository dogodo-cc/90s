<template>
  <div>
    <div class="drag-sort-wrap">
      <div
        v-for="(group, index) in value"
        :key="index"
        :class="[`group-${index}`, 'drag-sort-group']"
        :style="styleConfig[index]"
        >
        <div class="group-header">
          <slot name="header">{{group.title}}</slot>
        </div>
        <div
          class="group-body"
          :data-origin-group-index="index"
          @dragover="dragOver"
          @drop="drop"
          v-DragSelect="{className: 'group-item', onlyElTriger: true, cb: dragSelect}"
          >
          <div
            class="group-item"
            draggable="true"
            v-for="item in group.childrens"
            :key="item.id"
            @click.shift="select(item.id, index, true)"
            @click.exact.stop="select(item.id, index)"
            @dragstart="dragStart"
            :data-origin-group-index="index"
            :data-id="item.id"
            >
              <slot :data="item"></slot>
          </div>
        </div>
        <div class="group-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <img alt="预加载拖动多个文件时展示的图片" style="display:none" src="https://st-gdx.dancf.com/assets/20191209-163143-7009.png" />  
  </div>
</template>

<script>
import DragSelect from '@/directives/drag-select.js'
const image = 'https://st-gdx.dancf.com/assets/20191209-163143-7009.png';
const createDragImage = (ev) => {
  var img = new Image(); 
  img.src = image; 
  ev.dataTransfer.setDragImage(img, 64, 64);
}
const cloneDeep = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}
export default {
  name: 'DragSort',
  directives: {
    DragSelect
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    styleConfig: {
      type: Array,
      default() {
        return [{}]
      }
    }
  },
  data() {
    return {
      selected: {
        index: 0,
        ids: []
      },
    }
  },
  watch: {
    selected: {
      handler: function(val) {
        const {index, ids} = val;
        let value = cloneDeep(this.value);
        value = value.map((group, i) => {
          group.childrens = group.childrens.map(v => {
            v.selected = i === index ? ids.includes(v.id) : false;
            return v;
          })
          return group;
        })
        this.$emit('input', value);
      },
      deep: true
    }
  },
  methods: {
    select(id, index, multiple = false) {
      let selected = cloneDeep(this.selected);
      if (selected.index === index) {
        const includes = selected.ids.includes(id);
        if (multiple) {
          if (includes) {
            const _i = selected.ids.findIndex(v => v === id);
            _i !== -1 && selected.ids.splice(_i, 1);
          } else {
            selected.ids.push(id);
          }
        } else {
          if (includes) {
            selected.ids = selected.ids.length > 1 ? [id] : [];
          } else {
            selected.ids = [id];
          }
        }
      } else {
        selected = {
          index,
          ids: [id]
        }
      }
      this.selected = selected;
    },
    dragSelect(selected) {
      const index = this.value.findIndex(v => {
        return v.childrens.some(o => selected.includes(o.id))
      })
      
      if (index !== -1) {
        this.selected = {
          index,
          ids: selected
        }
      }
    },
    dragStart(ev) {
      let { originGroupIndex, id } = ev.target.dataset;
      id = +id || id; // 兼容string number 的id类型
      let selectedLength = this.selected.ids.length;

      const includes = this.selected.ids.includes(id);
      if (includes && +originGroupIndex === this.selected.index) {
        // do nothing
      } else {
        this.select(id, +originGroupIndex);
        selectedLength = 1; // 手动设置length，避免下面获取到到length 更新不及时的问题
      }

      if (selectedLength > 1) { 
        createDragImage(ev); // 超过一张 需要显示复制的图片
      } 

      const { dataTransfer } = ev;
      dataTransfer.dropEffect = "move";
      dataTransfer.setData("text", `${originGroupIndex}-${id}`);
    },
    dragOver(ev) {
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      const data = ev.dataTransfer.getData("text");
      const [originGroupIndex] = data.split('-').map(v => +v);
      const targetGroupIndex = +ev.target.dataset.originGroupIndex;
      // 如果相同 或者找不到 不执行drop
      if ([originGroupIndex, NaN].includes(targetGroupIndex)) return;

      let value = cloneDeep(this.value);
      const originTeam = value[originGroupIndex].childrens;
      while(this.selected.ids.length) {
        const id = this.selected.ids.shift();
        const itemIndex = originTeam.findIndex(v => v.id === id);
        itemIndex !== -1 && value[targetGroupIndex].childrens.push(originTeam.splice(itemIndex,1)[0]);
      }
      this.$emit('input', value)
    },
  }
}
</script>

<style lang="scss">
.drag-sort-wrap {
  display: flex;
  .drag-sort-group {
    display: flex;
    flex-direction: column;
    .group-body {
      flex: 1;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      .group-item {
        position: relative;
        margin: 10px;
        // 为了保证永远都是这个容器获取到鼠标事件，我加了一层伪元素
        &::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top:0;
          right: 0;
          bottom:0;
          // background-color: rgba(0, 0, 0, .2)
        }
      }
    }
  }
}
</style>