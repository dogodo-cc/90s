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
    
    <DragSortDemo></DragSortDemo>
    <DragSelectDemo></DragSelectDemo>
  </div>
</template>
<script>
import DragSelectDemo from './components/drag-select-demo.vue'
import DragSortDemo from './components/drag-sort-demo.vue';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import md5 from 'crypto-js/md5';
const zipFileLink = 'https://st-gdx.dancf.com/assets/20191212-122648-4842.zip';

export default {
  name: 'drap',
  components: {
    DragSelectDemo,
    DragSortDemo
  },
  data() {
    return {
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
}
</style>
