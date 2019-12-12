<template>
  <div class="page page-drag">
    <div class="zip-file">
      <el-button @click="getZipFile">获取zip文件</el-button>
      <div>
        <component
          v-bind="getTag(item).bind"
          :is="getTag(item).is"
          v-for="item in allImages"
          :key="item.hash"></component>
      </div>
    </div>
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
        v-dragSelect="{className: 'item', onlyElTriger: true, cb: dragSelect}"
        >

        <div
          class="item"
          draggable="true"
          @click.shift="select(member.id, index, true)"
          @click.exact.stop="select(member.id, index)"
          @dragstart="dragStart"
          :data-origin-index="index"
          :data-id="member.id"
          v-for="member in team.members"
          :key="member.id">
           <component :is="getComponent(member.sex)" :data="member"></component>
        </div>
      </div>
    </div>

    <DragSelect></DragSelect>
    <img src="https://st-gdx.dancf.com/assets/20191209-163143-7009.png" alt="" style="display:none">
  </div>
</template>
<script>
import DragSelect from './components/drag-select.vue'
import CardBoy from './components/CardBoy.vue'
import CardGirl from './components/CardGirl.vue'
import DragSelectDirective from '@/directives/drag-select.js'
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import md5 from 'crypto-js/md5';
const image = 'https://st-gdx.dancf.com/assets/20191209-163143-7009.png';
const zipFileLink = 'https://st-gdx.dancf.com/assets/20191212-122648-4842.zip';
function createDragImage(ev) {
  var img = new Image(); 
  img.src = image; 
  ev.dataTransfer.setDragImage(img, 64, 64);
}
export default {
  name: 'drap',
  components: {
    DragSelect,
  },
  directives: {
    dragSelect: DragSelectDirective
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
          members: [{
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
        }]
        },
        {
          title: 'editor',
          members: [{
          id: 6,
          name: '小米',
          sex: 1,
          selected: false
        },
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
        }]
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
      allImages: []
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
    getComponent(sex) {
      return sex === 1 ? CardBoy : CardGirl
    },
    select(id, index, multiple = false) {
      if (this.selected.index === index) {
        const includes = this.selected.ids.includes(id);
        if (multiple) {
          if (includes) {
            const _i = this.selected.ids.findIndex(v => v === +id);
            this.selected.ids.splice(_i, 1);
          } else {
            this.selected.ids.push(id);
          }
        } else {
          if (includes) {
            this.selected.ids = this.selected.ids.length > 1 ? [id] : [];
          } else {
            this.selected.ids = [id];
          }
        }
      } else {
        this.selected = {
          index,
          ids: [id]
        }
      }
    },
    dragStart(ev) {
      const { originIndex, id } = ev.target.dataset;

      const includes = this.selected.ids.includes(+id);
      if (includes && +originIndex === this.selected.index) {
        // do nothing
      } else {
        this.select(+id, +originIndex);
      }

      if (this.selected.ids.length > 1) { 
        createDragImage(ev); // 操作一张 需要显示复制的图片
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
      if ([originIndex, NaN].includes(targetGroupIndex)) return;

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
    getTag(item) {
      let component = {
        is: 'div',
        bind: {

        }
      }
      if (item.fileType === 'png') {
        component = {
          is: 'img',
          bind: {
            src: item.url,
            width: '100px'
          }
        }
      }

      if (item.fileType === 'mp3') {
        component = {
          is: 'audio',
          bind: {
            src: item.url,
            controls: 'controls'
          }
        }
      }

      if (item.fileType === 'mp4') {
        component = {
          is: 'video',
          bind: {
            src: item.url,
            controls: 'controls',
            width: 300,
            height: 220,
          }
        }
      }

      return component;
    },
    getZipFile(){
      new Promise((resolve, reject) => {
        JSZipUtils.getBinaryContent(zipFileLink, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
      }).then(res => JSZip.loadAsync(res)).then(zip => {
        const files = zip.files;
        const entries = Object.entries(files);
        const allPromises = entries.map(([fileName, file]) => {
          // console.log(file)
          const fileType = fileName.substr(fileName.lastIndexOf('.') + 1);
          if (!(fileName.substr(-4) === 'json')) {
              return file.async('blob').then(blob => {
                let url = '';
                if (fileType === 'mp3') {
                  let audioBlob = new Blob([blob], { type: 'audio/mpeg' });
                  url = URL.createObjectURL(audioBlob);
                } else if (fileType === 'mp4') {
                  let videoBlob = new Blob([blob], { type: 'video/mp4' });
                  url = URL.createObjectURL(videoBlob);
                } else {
                  url = URL.createObjectURL(blob);
                }
                return file.async('binarystring').then((binary) => {
                    const md5Str = md5(binary).toString();
                    return { fileType, hash: md5Str, name: fileName, url };
                });
              });
          } else {
              return false;
          }
        });
        return Promise.all(allPromises)
        }).then(res => {
            this.allImages = res.filter(v => v);
          }, err => {
            console.log(err); // eslint-disable-line
          });
        }
    },
}
</script>

<style lang="scss">
.page-drag {
  padding: 20px;
  font-size: 16px;
  color: $colorMain;

  video {
    background-color: #000;
    margin: 0 5px;
  }

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
      .item {
        position: relative;
        margin: 10px;
        // 为了让永远都是这个容器获取到鼠标事件，我加了一层伪元素
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
    .team-2 {
      background-color:#D463CB;
    }
  }
}
</style>
