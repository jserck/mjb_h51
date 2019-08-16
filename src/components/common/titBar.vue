<template>
     <div :class="titBar">
          <span class="backIcom" @click="backs" v-if="!this.isOver" v-show="isApp == ''">
               <img src="/static/tool/icon_fanhui_n@3x.png" alt>
          </span>
          <span class="backIcom" @click="backs" v-else v-show="isApp == ''">
               <img src="/static/tool/icon_fanhui_b@3x.png" alt>
          </span>
          <span class="shareIcon" v-if="isOver" v-show="isApp == ''" @click="shareHandlerBtns"></span>
          <span>{{titBarTit}}</span>
     </div>
</template>
<script>
import UrlSplit from '@/common/js/urlSplit'
import Ob from '@/common/js/obshare'
export default {
     props: {
          titBarTits: {
               default: ""
          },
          isOver: {
               default: false
          },
          isBar: {
               default: null
          },
          backApp: {
               default: false
          },
          isBackHome: {
               default: false
          },
          isList: {
               default: false
          }
     },
     data() {
          return {
               titBarTit: "",
               titBar: "titBar",
               isApp: null
          };
     },
     created() {
          let u = window.sessionStorage.getItem("isBar");
          this.isApp = u;
          this.titBarTit = this.titBarTits;
          if (this.isOver) {
               this.titBar = "titBar2";
          }
     },

     methods: {
          f_appBack() {
               let options = {
                    iphData:{ str: "返回APP" },
                    azData: '返回APP',
                    iphFn: this.$JsToNative['GOBACKACTION'],
                    azFn: this.$JsToNative['CALLANDROIDFINISH']
               };
               this.$JsToNativeFun(options);
               // if (Ob.is_iph()) {
               //      //native调用js
               //      this.$setupWebViewJavascriptBridge(function (bridge) {
               //           bridge.callHandler(this.$JsToNative['GOBACKACTION'], { str: "返回APP" }, function (response) {
               //                return;
               //           });
               //      });
               // } else if (Ob.is_az()) {
               //      window.android[this.$JsToNative['CALLANDROIDFINISH']]("返回APP");
               // }
          },
          f_appShare() {
               if (Ob.is_iph()) {
                    //native调用js
                    this.$setupWebViewJavascriptBridge(function (bridge) {
                         bridge.callHandler(
                              this.$JsToNative['SHAREACTION'],
                              {
                                   url: UrlSplit(),
                                   desc: '【业主福利】我的自助验房结果原来是这样的！',
                                   title: '我刚刚进行了自助验房，马上就能看到结果了，大家快来看看！',
                                   img: 'O(∩_∩)O'
                              },
                              function (response) {
                                   return;
                              }
                         );
                    });
               } else if (Ob.is_az()) {
                    window.android[this.$JsToNative['CALLANDROIDSHARE']](window.location.href + '&share=1', '【业主福利】我的自助验房结果原来是这样的！', '我刚刚进行了自助验房，马上就能看到结果了，大家快来看看！', 'O(∩_∩)O');
               }
          },
          shareHandlerBtns() {
               //        this.$emit("shareHandlerBtn");
               this.f_appShare();
          },
          backs() {
               if (this.backApp) {
                    this.f_appBack();
               } else {
                    if (this.isBackHome && !this.isList) {
                         if (this.isApp == '') {
                              this.$router.push({
                                   path: "/checkRoomTool?type=app"
                              });
                         } else {
                              this.$router.push({
                                   path: "/checkRoomTool"
                              });
                         }
                         return;
                    }
                    this.$router.go(-1);
               }
          }
     }
};
</script>
<style scoped>
.backIcom img {
     width: 100%;
}

.titBar {
     position: fixed;
     top: 0;
     z-index: 999999999;
     width: 7.5rem;
     height: 0.88rem;
     line-height: 0.88rem;
     color: rgba(16, 16, 16, 1);
     text-align: center;
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.5);
     color: #212832;
     background: #fff;
     /*background-color: rgba(247, 247, 247, 1);*/
}

.titBar2 {
     position: fixed;
     top: 0;
     z-index: 999999999;
     width: 7.5rem;
     height: 0.88rem;
     line-height: 0.88rem;
     color: rgba(16, 16, 16, 1);
     text-align: center;
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #fff;
}

.titBar span:nth-child(1),
.titBar2 span:nth-child(1) {
     display: inline-block;
     height: 0.34rem;
     line-height: 0.34rem;
     font-size: 0.36rem;
     font-weight: 600;
}

.backIcom {
     position: absolute;
     top: 0.275rem;
     left: 0.3rem;
     width: 0.35rem;
}

.shareIcon img {
     width: 100%;
}

.shareIcon {
     position: absolute;
     top: 0.24rem;
     right: 0.3rem;
     display: inline-block;
     width: 0.4rem;
     height: 0.4rem;
     background-image: url("/static/tool/housingesta_icon_fenxiang_n@3x.png");
     background-size: cover;
}
</style>
