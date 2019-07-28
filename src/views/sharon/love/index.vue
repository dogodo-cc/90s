<template>
  <div class="page page-love">
    <div class="content">
      <div id="code">
        <span class="comments">/**</span>
        <br />
        <span class="space" />
        <span class="comments">*2007—02-04,</span>
        <br />
        <span class="space" />
        <span class="comments">*2019-05-27.</span>
        <br />
        <span class="space" />
        <span class="comments">*/</span>
        <br />Boy name =
        <span class="keyword">Mr</span> YUAN
        <br />Girl name =
        <span class="keyword">Mrs</span> SHU
        <br />
        <br />
        <span class="comments">// Fall in love river.</span>
        <br />The boy love the girl;
        <br />
        <span class="comments">// They love each other.</span>
        <br />The girl loved the boy;
        <br />
        <span class="comments">// AS time goes on.</span>
        <br />The boy can not be separated the girl;
        <br />
        <span class="comments">// At the same time.</span>
        <br />The girl can not be separated the boy;
        <br />
        <span class="comments">// Both wind and snow all over the sky.</span>
        <br />
        <span class="comments">// Whether on foot or 5 kilometers.</span>
        <br />
        <span class="keyword">The boy</span> very
        <span class="keyword">happy</span>;
        <br />
        <span class="keyword">The girl</span> is also very
        <span class="keyword">happy</span>;
        <br />
        <span class="placeholder" />
        <span class="comments">// Whether it is right now</span>
        <br />
        <span class="placeholder" />
        <span class="comments">// Still in the distant future.</span>
        <br />
        <span class="placeholder" />The boy has but one dream;
        <br />
        <span class="comments">// The boy wants the girl could well have been happy.</span>
        <br />
        <br />
        <br />I want to say:
        <br />Baby, I love you forever;
        <br />
      </div>
      <div id="loveHeart">
        <canvas id="garden"></canvas>
        <div id="words">
          <div id="messages">
            亲爱的，这是我们相爱在一起的时光。
            <div id="elapseClock"></div>
          </div>
          <div id="loveu">
            爱你直到永永远远
            <br />
            <div class="signature">- 爱你的老袁</div>
          </div>
        </div>
      </div>
    </div>
    <Orientation></Orientation>
  </div>
</template>

<script>
import $ from "jquery";
import { Garden } from "./utils/garden";
import Orientation from '@/components/orientation/index.vue'
export default {
  name: "sharon-love",
  components: {Orientation},
  mounted() {
    const $window = $(window);
    var clientWidth = $window.width();
    var clientHeight = $window.height();

    const gardenCanvas = document.getElementById("garden");
    const gardenCtx = gardenCanvas.getContext("2d");
    const garden = new Garden(gardenCtx, gardenCanvas);

    var $loveHeart = $("#loveHeart");
    var offsetX = $loveHeart.width() / 2;
    var offsetY = $loveHeart.height() / 2 - 55;

    $(function() {
      // setup garden
      gardenCanvas.width = $loveHeart.width();
      gardenCanvas.height = $loveHeart.height();
      gardenCtx.globalCompositeOperation = "lighter";

      // renderLoop
      window.setInterval(function() {
        garden.render();
      }, Garden.options.growSpeed);
    });

    $window.resize(function() {
      var newWidth = $window.width();
      var newHeight = $window.height();
      if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
      }
    });

    function getHeartPoint(angle) {
      var t = angle / Math.PI;
      var x = 19.5 * (16 * Math.pow(Math.sin(t), 3));
      var y =
        -20 *
        (13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t));
      return new Array(offsetX + x, offsetY + y);
    }

    function startHeartAnimation() {
      var interval = 50;
      var angle = 10;
      var heart = new Array();
      var animationTimer = setInterval(function() {
        var bloom = getHeartPoint(angle);
        var draw = true;
        for (var i = 0; i < heart.length; i++) {
          var p = heart[i];
          var distance = Math.sqrt(
            Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2)
          );
          if (distance < Garden.options.bloomRadius.max * 1.3) {
            draw = false;
            break;
          }
        }
        if (draw) {
          heart.push(bloom);
          garden.createRandomBloom(bloom[0], bloom[1]);
        }
        if (angle >= 30) {
          clearInterval(animationTimer);
          showMessages();
        } else {
          angle += 0.2;
        }
      }, interval);
    }

    (function($) {
      $.fn.typewriter = function() {
        this.each(function() {
          if($(this).hasClass('typing')) return;
          var $ele = $(this),
            str = $ele.html(),
            progress = 0;
          $ele.html("");
          $ele.addClass('typing');
          var timer = setInterval(function() {
            var current = str.substr(progress, 1);
            if (current == "<") {
              progress = str.indexOf(">", progress) + 1;
            } else {
              progress++;
            }
            $ele.html(str.substring(0, progress) + (progress & 1 ? "_" : ""));
            if (progress >= str.length) {
              clearInterval(timer);
              $ele.removeClass('typing');
            }
          }, 75);
        });
        return this;
      };
    })($);

    function timeElapse(date) {
      var current = Date();
      var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
      var days = Math.floor(seconds / (3600 * 24));
      seconds = seconds % (3600 * 24);
      var hours = Math.floor(seconds / 3600);
      if (hours < 10) {
        hours = "0" + hours;
      }
      seconds = seconds % 3600;
      var minutes = Math.floor(seconds / 60);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      seconds = seconds % 60;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      var result = `<span class="digit">${days}</span> days 
         <span class="digit">${hours}</span> hours 
         <span class="digit">${minutes}</span> minutes 
         <span class="digit">${seconds}</span> seconds`;
      $("#elapseClock").html(result);
    }

    function showMessages() {
      $("#messages").fadeIn(5000, function() {
        $("#loveu").css("opacity", 1);
      });
    }

    var together = new Date();
    together.setFullYear(2007, 2, 4);
    together.setHours(20);
    together.setMinutes(0);
    together.setSeconds(0);
    together.setMilliseconds(0);

    timeElapse(together);
    setInterval(function() {
      timeElapse(together);
    }, 500);

    if(window.orientation === 90) {
      $("#code").typewriter();

      setTimeout(function() {
        startHeartAnimation();
      }, 5000);
    }

    window.addEventListener('orientationchange',() => {
      if (window.orientation === 90) {
        $("#code").typewriter();

        setTimeout(function() {
          startHeartAnimation();
        }, 5000);

      }
    },false);
  },
  beforeDestroy() {
    window.removeEventListener('orientationchange');
  }
};
</script>

<style lang="scss" scoped>
.page-love {
  width: 100vw;
  height: 100vh;
  background: #ffe;
  font-size: 12px;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: inline-flex;
    align-items: center;
  }
}
#loveHeart {
  width: 670px;
  height: 625px;
  position: relative;
}
#garden {
  width: 100%;
  height: 100%;
}
#elapseClock {
  text-align: right;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  .digit {
    font-family: "digit";
    font-size: 36px;
  }
}
#words {
  font-family: "sans-serif";
  white-space: nowrap;
  font-size: 24px;
  color: #666;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#messages {
  display: none;
}
#loveu {
  padding: 5px;
  font-size: 22px;
  margin-top: 80px;
  margin-right: 40px;
  text-align: right;
  opacity: 0;
  transition: opacity 0.3s;
  .signature {
    margin-top: 10px;
    font-size: 20px;
    font-style: italic;
  }
}
#code {
  width: 440px;
  color: #333;
  font-family: "Consolas", "Monaco", "Bitstream Vera Sans Mono", "Courier New",
    "sans-serif";
  font-size: 12px;
  .string {
    color: #2a36ff;
  }
  .keyword {
    color: #7f0055;
    font-weight: bold;
  }
  .placeholder {
    margin-left: 15px;
  }
  .space {
    margin-left: 7px;
  }
  .comments {
    color: #3f7f5f;
  }
}

@media screen and (max-width: 768px) {
  .content {
    transform: scale(0.5);
    transform-origin: 50%;
  }
  #code {
    font-size: 18px;
  }
}
</style>

