<template>
     <div class="checkRoomTool">
          <TitBar titBarTits="自助验房" :backApp="true" />
          <div v-show="prvLoad">
               <div class="g-checkRool" @click="f_checkRool(1)">
                    <span>立即验房</span>
               </div>
               <div class="g-toolBox" @click="f_toolBox">
                    <span>
                         <i>免费预约共享验房工具</i>
                    </span>
               </div>
               <div class="g-orderTool" @click="f_orderTool">
                    <span>
                         <i>工具箱介绍</i>
                    </span>
               </div>
               <div class="g-Room-over" @click="f_checkRool(0)">
                    <span>
                         <i>我的验房结果</i>
                    </span>
               </div>
          </div>
     </div>
</template>

<script>
import Get_token from '@/common/js/getToken'
import TitBar from "../common/titBar.vue";
import Ob from "../../common/js/obshare";
import ImgPrvLoad from '@/common/js/ImgPrvLoad'

export default {
     data() {
          return {
               token: null,
               u: '',
               userId: null,
               prvLoad: false,
               imgArr: [
                    'http://app1.homehawkeye.com/bg_lijiyanfang@3x.png',
                    'http://app1.homehawkeye.com/bg_mianfeiyuyuegongju@3x.png',
                    'http://app1.homehawkeye.com/bg_gongjuxiangjieshao@3x.png',
                    'http://app1.homehawkeye.com/bg_wodeyanfangjieguo2@3x.png'
               ],
               isApp: true
          };
     },
     components: { TitBar },
     created() {
          this.f_init();
          this.noBack();
          this.f_prvLoad(this.imgArr);
     },

     beforeDestroy() {
          $(window).unbind();
     },
     methods: {
          f_init() {
               window.scrollTo(0, 0);
               this.u = window.sessionStorage.getItem("token") || '';
               if (this.u == '') {
                    Get_token().then((res) => {
                         this.u = res || '';
                    }).catch((err) => { });
               }
               if (this.$route.query.type != "app") {
                    this.isApp = false;
               } else {
                    this.isApp = true;
               }
               if (!this.isApp) {
                    window.sessionStorage.setItem("isBar", "true");
               } else {
                    window.sessionStorage.setItem("isBar", "");
               }
          },
          f_appBack() {
               let options = {
                    iphData: { str: "返回APP" },
                    azData: '返回APP',
                    iphFn: this.$JsToNative['GOBACKACTION'],
                    azFn: this.$JsToNative['CALLANDROIDFINISH']
               };
               this.$JsToNativeFun(options);
               // let iph = navigator.userAgent.match(/(iPhone|iPod|iPad);?/i);
               // let az = navigator.userAgent.match(/android/i);
               // if (iph) {
               //      this.setupWebViewJavascriptBridge(function (bridge) {
               //           bridge.callHandler("goBackAction", { str: "返回APP" }, function (response) {
               //                return;
               //           });
               //      });
               // } else if (az) {
               //      window.android.callAndroidFinish("返回APP");
               // }
          },
          noBack() {
               let this_ = this;
               if (window.history && window.history.pushState) {
                    //            history.pushState(null, null, document.URL);
                    $(window).on("popstate", function () {
                         if (this_.isApp) {
                              this_.f_appBack();
                         }
                    });
               }
          },
          f_appLogin() {
               let options = {
                    iphData: { str: "没有token，看着办" },
                    azData: '没有token，看着办',
                    iphFn: this.$JsToNative['LOGINACTION'],
                    azFn: this.$JsToNative['CALLANDROID']
               };
               this.$JsToNativeFun(options);
               // let iph = navigator.userAgent.match(/(iPhone|iPod|iPad);?/i);
               // let az = navigator.userAgent.match(/android/i);
               // if (iph) {
               //      this.setupWebViewJavascriptBridge(function (bridge) {
               //           bridge.callHandler(
               //                this.$JsToNative['LOGINACTION'],
               //                { str: "没有token，看着办" },
               //                function (response) {
               //                     return;
               //                }
               //           );
               //      });
               // } else if (az) {
               //      window.android[this.$JsToNative['CALLANDROID']]("没有token，看着办");
               // }
          },
          f_new_atOnceHome(num) {
               if (num == 0) {
                    this.f_orderOver();
                    return;
               }
               let d = window.sessionStorage.getItem("da");
               if (!d) {
                    this.$store.commit("set_init_form");
                    this.$router.push({
                         path: "/atOnceHome",
                         query: {
                              isApp: this.isApp
                         }
                    });
               } else {
                    this.$router.push({
                         path: "/testOver",
                         query: {
                              data: d
                         }
                    });
               }
          },
          f_checkRool(num) {
               let t = "";
               if (!this.isApp) {
                    //          t = window.sessionStorage.getItem('token');
                    if (Ob.locaGet("token")) {
                         t = JSON.parse(window.localStorage.getItem("token")).val;
                    }
                    if (t && t != "undefined") {
                         this.f_new_atOnceHome(num);
                    } else {
                         this.$router.push({
                              path: "/register?type=app",
                              query: {
                                   path: this.$router.currentRoute.path
                              }
                         });
                    }
               } else {
                    // t = window.sessionStorage.getItem("token");
                    t = this.u;
                    if (!t || t == "undefined") {
                         this.f_appLogin();
                         return;
                    } else {
                         this.f_new_atOnceHome(num);
                    }
               }
          },
          f_toolBox() {
               this.$router.push({
                    path: "/getToolBox"
               });
          },
          f_orderTool() {
               this.$router.push({
                    path: "/introduceBox"
               });
          },
          f_orderOver() {
               this.$router.push({
                    path: "/checkRoomRecord",
                    query: {
                         isApp: this.isApp
                    }
               });
          },
          f_prvLoad(arrImg) {
               if (!arrImg) {
                    throw 'arrImg不存在';
                    return;
               }
               let this_ = this;
               let len = arrImg.length;
               let count = 0;
               for (let i = 0; i < len; i++) {
                    let img = new Image();
                    img.onload = function () {
                         count++;
                         if (count == len) {
                              this_.prvLoad = true;
                         }
                    };
                    img.src = arrImg[i];
               }
          }
     }
};
</script>
<style scoped>
.checkRoomTool {
     width: 7.5rem;
     height: 13.34rem;
     margin: auto;
     padding-top: 0.88rem;
}

.g-checkRool {
     position: relative;
     width: 6.9rem;
     height: 2.6rem;
     text-align: center;
     margin: 0.4rem auto 0.3rem;
     background-image: url("http://app1.homehawkeye.com/bg_lijiyanfang@3x.png");
     background-repeat: no-repeat;
     background-size: cover;
     box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.5);
}

.g-checkRool span {
     display: inline-block;
     position: absolute;
     top: 1.03rem;
     right: 0.6rem;
     width: 2.1rem;
     height: 0.54rem;
     border: 2px solid #ffffff;
     border-radius: 1rem;
     line-height: 0.58rem;
     color: #fff;
     font-size: 0.32rem;
     text-align: center;
}

.g-toolBox {
     margin: auto;
     width: 6.9rem;
     height: 2rem;
     line-height: 2rem;
     text-align: right;
     background-image: url("http://app1.homehawkeye.com/bg_mianfeiyuyuegongju@3x.png");
     background-repeat: no-repeat;
     background-size: cover;
     box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.5);
}

.g-toolBox span {
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #212832;
     margin-right: 0.605rem;
}

.g-orderTool {
     margin: 0.3rem auto 0;
     width: 6.9rem;
     height: 2rem;
     line-height: 2rem;
     text-align: right;
     background-image: url("http://app1.homehawkeye.com/bg_gongjuxiangjieshao@3x.png");
     background-repeat: no-repeat;
     background-size: cover;
     box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.5);
}

.g-orderTool span {
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #212832;
     margin-right: 0.605rem;
}

.g-Room-over {
     margin: 0.3rem auto 0;
     width: 6.9rem;
     height: 2rem;
     line-height: 2rem;
     text-align: right;
     background-image: url("http://app1.homehawkeye.com/bg_wodeyanfangjieguo2@3x.png");
     background-repeat: no-repeat;
     background-size: cover;
     box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.5);
}

.g-Room-over span {
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #212832;
     margin-right: 0.605rem;
}
</style>
