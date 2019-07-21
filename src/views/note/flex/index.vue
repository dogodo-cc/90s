<template>
  <div class="page page-flex">
    <div class="wrap">
            <div class="item-box" :style="flexContainerValue">
                <div class="item" 
                v-for="(item,index) in items" 
                :key="index"
                :style="{width:`${item.w}`, height:`${item.h}`, lineHeight:`${item.h}`}">{{index + 1}}</div>
                <div v-if="show" class="item" :style="testItemStyle">
                    我是用来测试项目属性的方块
                </div>
            </div>
            <div class="control">
                <div class="control-attr">
                    <h3>容器的属性</h3>
                    <div class="attr" v-for="(attr,i) in flexContainer" :key="i">
                        <em class="name">
                            <el-tooltip :content="attr.text" placement="top"><span>{{attr.attribute}}</span></el-tooltip>
                        </em>
                        <div class="value-box">
                            <el-tooltip :content="attrV.text" :open-delay="2000" placement="top" v-for="attrV in attr.attributeValues" :key="attrV.value">
                                <el-radio v-model="flexContainerValue[attr.attribute]" :label="attrV.value">{{attrV.value}}</el-radio>
                            </el-tooltip>
                        </div>
                    </div>
                    <h3>项目的属性</h3>
                    <div class="attr" v-for="attr in flexItem" :key="attr.attribute">
                        <em class="name">
                            <el-tooltip :content="attr.text" placement="top"><span>{{attr.attribute}}</span></el-tooltip>
                        </em>
                        <div>
                            <el-input v-model="attr.value"></el-input>
                        </div>
                        <div v-if="attr.info" style="padding: 10px 15px;color:#ccc;font-size:20px;">
                            <el-popover  
                                placement="top-start"
                                title="介绍"
                                width="200"
                                trigger="hover"
                                :content="attr.info">
                                <i slot="reference" class="el-icon-question"></i>
                            </el-popover>
                        </div>
                    </div>
                    <div class="attr">
                        <em class="name">flex </em>
                        <div>{{flex}}</div>
                    </div>
                    <div class="attr">
                        <el-popover
                            class="name"  
                            placement="top-start"
                            title="介绍"
                            width="300"
                            trigger="hover"
                            content="align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch">
                            <em slot="reference">align-self</em>
                        </el-popover>
                        <div class="value-box">
                            <el-radio v-model="alignSelf" label="auto">auto</el-radio>
                            <el-radio v-model="alignSelf" label="flex-start">flex-start</el-radio>
                            <el-radio v-model="alignSelf" label="flex-end">flex-end</el-radio>
                            <el-radio v-model="alignSelf" label="center">center</el-radio>
                            <el-radio v-model="alignSelf" label="baseline">baseline</el-radio>
                            <el-radio v-model="alignSelf" label="stretch">stretch</el-radio>
                        </div>
                    </div>
                    <div class="attr">
                        <em class="name">测试项目属性</em>
                        <div><el-checkbox v-model="show">点我</el-checkbox></div>
                    </div>
                </div>
                <div class="add-del">
                    <ul>
                        <li>
                            <span>容器</span>
                            <el-input v-model="flexContainerValue.width"><template slot="append">width</template></el-input>
                            <el-input v-model="flexContainerValue['height']"><template slot="append">height</template></el-input>
                            <el-button type="primary" @click="add">增加</el-button>
                        </li>
                        <li v-for="(item,index) in items" :key="index">
                            <span>方块{{index + 1}}:</span>
                            <el-input v-model="item.w"><template slot="append">width</template></el-input>
                            <el-input v-model="item.h"><template slot="append">height</template></el-input>
                            <el-button type="danger" @click="del(index)">删除</el-button>
                        </li>
                    </ul>
                </div>
                <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png" alt="picture">
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          show:false,
          items:[{
              w:'100px',
              h:'100px'
          },{
              w:'100px',
              h:'100px',
          },{
              w:'100px',
              h:'100px',
          },{
              w:'100px',
              h:'100px',
          },{
              w:'100px',
              h:'100px',
          }],
          // 容器的属性
          flexContainer:[{
              attribute:'flex-direction',
              text:'决定主轴的方向（即项目的排列方向）',
              attributeValues:[
                  {
                      value:'row',
                      text:'主轴为水平方向，起点在左端',
                  },
                  {
                      value:'row-reverse',
                      text:'主轴为水平方向，起点在右端',
                  },
                  {
                      value:'column',
                      text:'主轴为垂直方向，起点在上沿',
                  },
                  {
                      value:'column-reverse',
                      text:'主轴为水平方向，起点在左端',
                  }
              ]
          },
          {
              attribute:'flex-wrap',
              text:'默认情况下，项目都排在一条线（又称"轴线"）上。它定义，如果一条轴线排不下，如何换行。',
              attributeValues:[{
                  value:'nowrap',
                  text:'默认，不换行'
              },{
                  value:'wrap',
                  text:'换行，第一行在上方'
              },{
                  value:'wrap-reverse',
                  text:'换行，第一行在下方'
              }]
          },{
              attribute:'justify-content',
              text:'定义了项目在主轴上的对齐方式',
              attributeValues:[{
                  value:'flex-start',
                  text:'默认值：左对齐'
              },{
                  value:'flex-end',
                  text:'右对齐'
              },{
                  value:'center',
                  text:'居中'
              },{
                  value:'space-between',
                  text:'两端对齐，项目之间的间隔都相等'
              },{
                  value:'space-around',
                  text:'每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍'
              }]
          },{
              attribute:'align-items',
              text:'定义项目在交叉轴上如何对齐',
              attributeValues:[{
                  value:'flex-start',
                  text:'交叉轴的起点对齐'
              },{
                  value:'flex-end',
                  text:'交叉轴的终点对齐'
              },{
                  value:'center',
                  text:'交叉轴的中点对齐',
              },{
                  value:'baseline',
                  text:'项目的第一行文字的基线对齐',
              },{
                  value:'stretch',
                  text:'默认值，如果项目未设置高度或设为auto，将占满整个容器的高度'
              }]
          },{
              attribute:'align-content',
              text:'定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用',
              attributeValues:[{
                  value:'flex-start',
                  text:'与交叉轴的起点对齐'
              },{
                  value:'flex-end',
                  text:'与交叉轴的终点对齐'
              },{
                  value:'center',
                  text:'与交叉轴的中点对齐'
              },{
                  value:'space-between',
                  text:'与交叉轴两端对齐，轴线之间的间隔平均分布'
              },{
                  value:'space-around',
                  text:'每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍'
              },{
                  value:'stretch',
                  text:'默认值,轴线占满整个交叉轴'
              }]
          }],
          flexContainerValue:{
              'flex-direction':'row',
              'flex-wrap':'nowrap',
              'justify-conten':'flex-start',
              'align-items':'stretch',
              'align-content':'stretch',
              'height':'600px',
              'width':'100%'
          },
          flexItem:[{
              attribute:'order',
              text:'定义项目的排列顺序。数值越小，排列越靠前，默认为0',
              info:'',
              value:0,
          },{
              attribute:'flex-grow',
              text:'定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大',
              info:'如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍',
              value:0,
          },{
              attribute:'flex-shrink',
              text:'定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小',
              info:'如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小',
              value:1,
          },{
              attribute:'flex-basis',
              text:'定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小',
              info:'它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。',
              value:'auto',
          }],
          alignSelf:'auto'
      }
  },
  computed:{
      flex:function(){
          let flexItem = this.flexItem;
          let flexGrow = flexItem.find(v => v.attribute === 'flex-grow').value;
          let flexShrink = flexItem.find(v => v.attribute === 'flex-shrink').value;
          let flexBasis = flexItem.find(v => v.attribute === 'flex-basis').value;
          return `${flexGrow} ${flexShrink} ${flexBasis}`
      },
      testItemStyle:function(){
          let s = {
              flex:this.flex,
              order:this.flexItem[0].value,
              'align-self':this.alignSelf,
              'background-color': '#ccc',
              'font-size':'12px'
          }
          return s;
      }
  },
  methods:{
      del(i){
          this.items.splice(i,1);
      },
      add(){
          this.items.push({w:'100px', h:'100px'});
      }
  } 
}
</script>

<style lang="scss" scoped>
.wrap {
            display: flex;
        }
        .control {
            width: 500px;
            border: 1px solid #ccc;
            padding: 0 15px;
        }
        .control .attr {
            display: flex;
            margin-bottom: 15px;
        }
        .control .attr .name{
            width: 100px;
        }
        .control .value-box {
            display: flex;
            flex: 1;
            flex-wrap: wrap;
        }
        .control .el-radio {margin: 0 10px 10px 0}
        .control .el-radio+.el-radio {margin-left: 0;}
        .control .add-del {
            height: 500px;
            margin-top: 30px;
            overflow-y: scroll;
        }
        .control .add-del li{
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .control .add-del li span {width: 70px;}
        .control .add-del li .el-input {width: 200px;margin-right: 15px;}


        .item-box{
            display: flex;
            background-color: #f8f8f8;
            flex-grow: 1;
        }
        .item {
            background-color: #eee;
            text-align: center;
            font-size: 30px;
            color: #333;
            order:2;
        }
</style>
