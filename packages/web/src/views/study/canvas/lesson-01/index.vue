<template>
  <div>
    <Carousel :list="list"
              :width="400"
              :height="300"
              :loop="loop"
              :effect="effect"
              :autoplay="autoplay"
              :autoplay-direction="autoplayDirection"
              :autoplay-timeout="autoplayTimeout"
              :direction="direction"
              :pagination-type="paginationType"
              @change="change" />

    <div style="margin-top: 30px">
      当前索引: {{ index }}
    </div>
    <div style="width: 600px;margin-top: 30px">
      <fieldset>
        <legend>效果</legend>
        <el-radio v-model="effect" label="slide">
          滑动
        </el-radio>
        <el-radio v-model="effect" label="fade">
          淡入
        </el-radio>
      </fieldset>
      <fieldset>
        <legend>分页样式</legend>
        <el-radio v-model="paginationType" label="thumbnail">
          缩略图
        </el-radio>
        <el-radio v-model="paginationType" label="dot">
          圆点
        </el-radio>
      </fieldset>
      <fieldset>
        <legend>方向</legend>
        <el-radio v-model="autoplayDirection" label="forward">
          正序
        </el-radio>
        <el-radio v-model="autoplayDirection" label="backward">
          倒序
        </el-radio>
      </fieldset>
      <fieldset>
        <legend>动画方向</legend>
        <el-radio v-model="direction" label="horizontal">
          水平
        </el-radio>
        <el-radio v-model="direction" label="vertical">
          垂直
        </el-radio>
      </fieldset>
      <fieldset>
        <legend>设置</legend>
        <el-checkbox v-model="loop">
          开启循环
        </el-checkbox>
        <el-checkbox v-model="autoplay">
          自动播放
        </el-checkbox>
      </fieldset>
      <fieldset>
        <legend>时间间隔</legend>
        <el-slider
          v-model="autoplayTimeout"
          style="width: 200px;"
          :min="2000"
          :max="5000"
          :step="500" />
      </fieldset>
    </div>
    <canvas v-show="false"
            id="canvas"
            width="300"
            height="300">can not supported</canvas>
  </div>
</template>

<script>
import {Carousel} from '../../Carousel/index.js';
export default {
  name: "CanvasLesson01",
  components: {
    Carousel,
  },
  data() {
    return {
      timer: null,
      list: [
        {
          id: 1,
          title: '标题1',
          link: 'wwww.gaoding.com',
          url: 'https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200530-145409-fb1f.png?x-oss-process=image/resize,w_675/interlace,1'
        },
        {
          id: 2,
          title: '标题2',
          link: '',
          url: 'https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200731-092523-be81.png?x-oss-process=image/resize,w_675/interlace,1,image/format,webp'
        },
        {
          id: 3,
          title: '标题3',
          link: '',
          url: 'https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200731-092740-d459.png?x-oss-process=image/resize,w_675/interlace,1,image/format,webp'
        },
        {
          id: 4,
          title: '标题4',
          link: 'wwww.gaoding.com',
          url: 'https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200730-201530-dd59.png?x-oss-process=image/resize,w_675/interlace,1,image/format,webp'
        }
      ],
      effect: 'slide',
      loop: true,
      autoplay: true,
      index: 0,
      autoplayDirection: 'forward',
      autoplayTimeout: 2000,
      direction: 'horizontal',
      paginationType: 'thumbnail',
    }
  },
  mounted() {
    var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      FONT_HEIGHT = 15,
      MARGIN = 35,
      HAND_TRUNCATION = canvas.width / 25,
      HOUR_HAND_TRUNCATION = canvas.width / 10,
      NUMBERAL_SPACING = 20,
      RADIUS = canvas.width / 2 - MARGIN,
      HAND_RADIUS = RADIUS + NUMBERAL_SPACING;

    function drawCircle() {
      context.beginPath();
      context.arc(
        canvas.width / 2,
        canvas.height / 2,
        RADIUS,
        0,
        Math.PI * 2,
        true
      );
      context.stroke();
    }
    function drawNumerals() {
      var numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var angle = 0;
      var numeralWidth = 0;
      numerals.forEach(function(numeral) {
        angle = (Math.PI / 6) * (numeral - 3);
        numeralWidth = context.measureText(numeral).width;
        context.fillText(
          numeral,
          canvas.width / 2 + Math.cos(angle) * HAND_RADIUS - numeralWidth / 2,
          canvas.height / 2 + Math.sin(angle) * HAND_RADIUS + FONT_HEIGHT / 3
        );
      });
    }
    function drawCenter() {
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, true);
      context.fill();
    }
    function drawHand(loc, isHour) {
      var angle = Math.PI * 2 * (loc / 60) - Math.PI / 2,
        handRadius = isHour
          ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION
          : RADIUS - HAND_TRUNCATION;
      context.moveTo(canvas.width / 2, canvas.height / 2);
      context.lineTo(
        canvas.width / 2 + Math.cos(angle) * handRadius,
        canvas.height / 2 + Math.sin(angle) * handRadius
      );
      context.stroke();
    }
    function drawHands() {
      var date = new Date();
      var hour = date.getHours();
      hour = hour > 12 ? hour - 12 : hour;
      drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true, 0.5);
      drawHand(date.getMinutes(), false, 0.5);
      drawHand(date.getSeconds(), false, 0.2);
    }
    function drawClock() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      drawCircle();
      drawCenter();
      drawHands();
      drawNumerals();
    }
    context.font = FONT_HEIGHT + "px Arial";
    this.timer = window.setInterval(drawClock, 1000);
  },
  beforeDestroy() {
    window.clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    change(v) {
      this.index = v;
    }
  }
};
</script>

<style lang="scss">
#canvas {
  margin: 50px auto;
  padding: 10px;
  background-color: #fff;
  border: thin inset #aaaaaa;
}
fieldset {
  margin-bottom: 20px;
}
</style>

