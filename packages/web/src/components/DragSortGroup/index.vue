<template>
   <div
    :class="[`group-${index}`, 'drag-sort-group']"
    :style="groupStyle"
    :data-title="group.title"
    :data-origin-group-index="index"
    @dragover="dragOver"
    @drop="drop">
    <div
      class="group-item"
      draggable="true"
      v-for="item in group.members"
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
</template>
<script>
const image = 'https://st-gdx.dancf.com/assets/20191209-163143-7009.png';
const createDragImage = (ev) => {
  var img = new Image(); 
  img.src = image; 
  ev.dataTransfer.setDragImage(img, 64, 64);
}
const getSize = size => {
    return typeof size === 'number' ? `${size}px` : size;
};
const cloneDeep = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

export default {
  name: 'DragSortGroup',
  props: {
    index: {
      type: Number,
      default: 0
    },
    selected: {
      type: Object,
      default: () => {
        return {
          index: 0,
          ids:[]
        }
      }
    },
    group: {
      type: Object,
      default: () => {
        return {
          title: '组名称',
          childrens: [
            {
              id: 0,
              name: '组成员',
              sex: 1,
              selected: false
            }
          ]
        }
      }
    },
    width: {
      type: [Number, String],
      default: '33.333%'
    },
    height: {
      type: [Number, String],
      default: 500
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    groupStyle() {
      return {
        width: getSize(this.width),
        height: getSize(this.height)
      }
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
            selected.ids.splice(_i, 1);
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
      this.$emit('select', selected);
    },
    dragStart(ev) {
      const { originGroupIndex, id } = ev.target.dataset;
      let selectedLength = this.selected.ids.length;

      const includes = this.selected.ids.includes(+id);
      if (includes && +originGroupIndex === this.selected.index) {
        // do nothing
      } else {
        this.select(+id, +originGroupIndex);
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
      if ([originGroupIndex, NaN].includes(targetGroupIndex)) return;
      this.$emit('group-drop', originGroupIndex, targetGroupIndex);
    },
  }
}
</script>

<style lang="scss">
.drag-sort-group {
  background-color: #ccc;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
  &:nth-child(even) {
    background-color:#D463CB;
  }
  &::after {
    display: block;
    position: absolute;
    bottom: 10px;
    left: 10px;;
    content: attr(data-title)
  }
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

</style>
