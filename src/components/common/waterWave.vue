<template>
     <div class="waterWave" v-if="prvLoad">
          <!--<transition-group name="fade">-->
          <p class="u-num">
               <span>{{show}}</span>分
          </p>
          <!--<p class="u-num" v-if="num == 1" :key="-2">-->
          <!--<span>1</span>分</p>-->
          <!--<p class="u-num" v-for="(val,index) in num" v-if="show == index" :key="index">-->
          <!--<span>{{val}}</span><span style="font-size:0.48rem">分</span></p>-->
          <!--</transition-group>-->
          <!-- <div class="circle_first"></div> -->
          <!-- <div class="motai">
      <img src="/static/tool/pic_zhendang_n@3x.png" alt="">
          </div>-->
          <div class="circle" v-if="num >= 40">
               <!-- <img src="http://app1.homehawkeye.com/over2.gif" alt=""> -->
               <img :src="'http://app1.homehawkeye.com/dongxiao1.gif?t='+rndNum" alt>
               <!-- <img src="http://cdnq.duitang.com/uploads/item/201505/15/20150515141910_HwdzB.thumb.700_0.gif" alt=""> -->
               <!-- <div class="line"></div>
      <div class="waterWaveImg" v-water="num">
        <div class="waterWaveImgLi" v-for="(val,index) in items" :key="index">
          <img :src="val" alt="">
        </div>
               </div>-->
          </div>
          <div class="circle" v-else>
               <img :src="'http://app1.homehawkeye.com/dongxiao2.gif?t='+rndNum" alt>
          </div>
     </div>
</template>
<script>
export default {
     props: {
          stage: 0
     },
     data() {
          return {
               num: 0,
               prvLoad: false,
               show: 0,
               count: 0,
               items: [
                    "/static/tool/pic_shuiwen_n@3x.png",
                    "/static/tool/pic_shuiwen_n@3x.png",
                    "/static/tool/pic_shuiwen_n@3x.png"
               ]
          };
     },
     computed: {
          rndNum() {
               var rnd = "";
               for (var i = 0; i < 5; i++)
                    rnd += Math.floor(Math.random() * 10);
               return rnd;
          },
     },
     directives: {
          // water: {
          //   bind: function (el, binding, vnode) {
          //     let num = binding.value;
          //     let l = 0;
          //     let h = 0;
          //     let ls = -5.6;
          //     let hs = -0.023 * num;
          //     if (!num) return;
          //     let d = setInterval(() => {
          //       l -= 0.01;
          //       h -= 0.005;
          //       el.style.webkitTransform = `translate(${l}rem,${h}rem) translateZ(0)`;
          //       if (l < ls) {
          //         l = 0;
          //         el.style.webkitTransform = `translate(${l}rem,${h}rem) translateZ(0)`;
          //       }
          //       if (h <= hs) {
          //         clearInterval(d);
          //       }
          //     }, 1);
          //   }
          // }
     },
     methods: {

          imgLoad() {
               var _this = this;
               let img = new Image();
               img.onload = () => {
                    this.prvLoad = true;
                    let id = setInterval(() => {
                         _this.shows(_this.num);
                         if (_this.show >= _this.num) {
                              clearInterval(id);
                         }
                    }, 50);
               };
               if (this.num >= 40) {
                    img.src = 'http://app1.homehawkeye.com/dongxiao1.gif';
               } else {

                    img.src = 'http://app1.homehawkeye.com/dongxiao2.gif';
               }

          },

          shows() {
               if (this.num == 0) return;
               this.show++;
          },
          //      a() {
          //        this.items.push(this.items[0]);
          //        this.items.shift();
          //      }
     },
     created() {
          if (window.applicationCache) {
               if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                    window.applicationCache.update();
               }
          }
          this.num = this.stage;
          this.imgLoad();
     },
};
</script>
<style scoped>
.waterWave {
     width: 100%;
     height: 100%;
}

.fade-enter-active,
  /*.fade-leave-active {*/
    /*transition: all 0.3s;*/
  /*}*/

  /*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *!*/
  /*{*/

    /*!*opacity: 0;*!*/
    /*!*transform: translate(0, 0.05rem);*!*/
    /*!*-ms-transform: translate(0, 0.05rem);*!*/
    /*!*-webkit-transform: translate(0, 0.05rem);*!*/
    /*!*-o-transform: translate(0, 0.05rem);*!*/
    /*!*-moz-transform: translate(0, 0.05rem);*!*/

  /*}*/

  .u-num {
     position: absolute;
     top: 1.15rem;
     z-index: 99;
     width: 100%;
     font-family: PingFangSC-Regular;
     font-size: 0.6rem;
     color: #ffffff;
     line-height: 0.48rem;
     text-align: center;
}

.circle {
     position: relative;
     overflow: hidden;
     width: 100%;
     height: 100%;
     /*border-radius: 100%;*/
     /*border: 0.03rem solid #fff;*/
     /*background-image: url('/static/tool/pic_zhendang_n@3x.png');*/
     /*background-size: 100%;*/
     /*background-repeat: no-repeat;*/
     text-align: center;
}

.circle img {
     width: 100%;
}

.waterWaveImg {
     height: 100%;
     display: flex;
     position: absolute;
     top: 2.45rem;
     transition: all;
}

.waterWaveImgLi {
     width: 2.8rem;
     height: 100%;
     margin: 0;
     padding: 0;
     float: left;
}

.waterWaveImgLi img {
     width: 100%;
     height: 100%;
     display: block;
     padding: 0;
     margin: 0;
}

.motai {
     width: 100%;
     height: 100%;
     position: absolute;
     top: 0;
     z-index: 999999;
     background-image: url("/static/tool/pic_zhendang_n@3x.png");
     background-size: cover;
     border: none;
     padding: 0 !important;
     margin: 0 !important;
}

.motai img {
     width: 100%;
     height: 100%;
}

.line {
     width: 2.14rem;
     height: 2.16rem;
     border-radius: 100%;
     border: 0.06rem solid #d7e6fe;
     position: absolute;
     left: 0.24rem;
     top: 0.27rem;
     z-index: 99999999;
}

.circle_first {
     position: absolute;
     top: 0;
     width: 100%;
     height: 100%;
     z-index: 999999999;
     background-image: url("/static/tool/pic_huan_n@3x.png");
     background-size: 100% 100%;
     background-repeat: no-repeat;
}
</style>
