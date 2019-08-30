<template>
     <section class="m-drainage m-continer">
          <header>
               <section>
                    <img src="/static/drainage/pic_toutu1_n@3x.png" alt>
               </section>
               <span class="u-rule-icon" @click="ruleHandler">
                    <img src="/static/drainage/pic_guize_n@3x.png" alt>
               </span>
          </header>
          <section class="g-continer-foot">
               <section class="g-continer-1">
                    <section class="u-bg1-yuan1 u-bg-circle">
                         <img src="/static/drainage/pic_yuan1_n@3x.png" alt>
                    </section>
                    <section class="u-bg1-yuan2 u-bg-circle">
                         <img src="/static/drainage/pic_yuan2_n@3x.png" alt>
                    </section>
                    <section class="u-bg1-yuan3 u-bg-circle">
                         <img src="/static/drainage/pic_yuan3_n@3x.png" alt>
                    </section>
                    <section style="text-align:center">
                         <span class="u-title-icon">如何参与</span>
                    </section>
                    <section class="g-continer-1-text">
                         <p>邀好友下载鹰眼鉴房，注册成功后不但双方都有奖，邀请多人更可参与瓜分物业费，快来参加吧！</p>
                    </section>
                    <section class="g-continer-1-list">
                         <ul class="displayFlex flexJustifyAround">
                              <li class="displayFlex flexColumn">
                                   <section class="g-continer-1-list-li-img">
                                        <img
                                             src="/static/drainage/pic_denglufenxiang1_n@3x.png"
                                             alt
                                        >
                                   </section>
                                   <span>登录后分享</span>
                                   <span>邀请页面</span>
                              </li>
                              <li class="displayFlex flexColumn">
                                   <section class="g-continer-1-list-li-img">
                                        <img src="/static/drainage/pic_haoyoudianji_n@3x.png" alt>
                                   </section>
                                   <span>好友点击链接</span>
                                   <span>下载注册</span>
                              </li>
                              <li class="displayFlex flexColumn">
                                   <section class="g-continer-1-list-li-img">
                                        <img src="/static/drainage/pic_libao_n@3x.png" alt>
                                   </section>
                                   <span>邀请成功双方</span>
                                   <span>赢得鹰眼礼包</span>
                              </li>
                              <li class="displayFlex flexColumn">
                                   <section class="g-continer-1-list-li-img">
                                        <img src="/static/drainage/pic_huafendajiang_n@3x.png" alt>
                                   </section>
                                   <span>满足条件用户</span>
                                   <span>瓜分大奖</span>
                              </li>
                         </ul>
                    </section>
                    <span class="g-down-btn" @click="f_appShare">邀请好友领大奖</span>
                    <!-- <span v-else class="g-down-btn">邀请好友领大奖</span> -->
                    <section class="u-center-line">
                         <i class="u-line"></i>
                    </section>
                    <span class="u-winner_list">获奖名单</span>
                    <section class="g-winner-list">
                         <section class="g-bg-circle">
                              <section>
                                   <span></span>
                                   <span></span>
                              </section>
                         </section>
                         <!-- <ul> -->
                         <ScrollList/>
                         <!-- </ul> -->
                    </section>
               </section>
          </section>
          <section class="g-continer-foot">
               <section class="g-continer-2">
                    <section class="u-bg2-yuan1 u-bg-circle">
                         <img src="/static/drainage/pic_yuan1_n@3x.png" alt>
                    </section>
                    <section class="u-bg2-yuan2 u-bg-circle">
                         <img src="/static/drainage/pic_yuan2_n@3x.png" alt>
                    </section>
                    <section style="text-align:center">
                         <span class="u-title-icon">我的奖品</span>
                    </section>
                    <section class="g-my-winner-list overFlow_touch" style="margin-top:0.5rem">
                         <span v-if="!u" class="g-down-btn" @click="getTOken">登陆查看我的奖品</span>
                         <ul v-else>
                              <li
                                   v-for="(item,index) in prizeList"
                                   :key="index"
                                   class="displayFlex flexJustifybetween"
                              >
                                   <section class="displayFlex flexAlignItemsCenter">
                                        <section>
                                             <span class="u-icon">
                                                  <img
                                                       src="/static/drainage/pic_jiang_n@3x.png"
                                                       alt
                                                  >
                                             </span>
                                             <!-- <span v-else class="u-icon">
                                                  <img
                                                       src="/static/drainage/pic_jiang_l@3x.png"
                                                       alt
                                                  >
                                             </span>-->
                                        </section>
                                        <span class="u-text">{{item.prizeName}}*{{item.prizeCount}}</span>
                                   </section>
                              </li>
                         </ul>
                    </section>
               </section>
          </section>
          <section class="g-continer-foot">
               <section class="g-continer-3">
                    <section class="u-bg3-yuan1 u-bg-circle">
                         <img src="/static/drainage/pic_yuan1_n@3x.png" alt>
                    </section>
                    <section class="u-bg3-yuan2 u-bg-circle">
                         <img src="/static/drainage/pic_yuan1_n@3x.png" alt>
                    </section>
                    <section class="u-bg3-yuan3 u-bg-circle">
                         <img src="/static/drainage/pic_yuan4_n@3x.png" alt>
                    </section>
                    <section class="u-bg3-yuan4 u-bg-circle">
                         <img src="/static/drainage/pic_yuan5_n@3x.png" alt>
                    </section>
                    <section style="text-align:center">
                         <span class="u-title-icon">如何分享邀请</span>
                    </section>
                    <section class="u-title">
                         <p>1、登录后，进入“我的”-“我的邀请”</p>
                    </section>
                    <section class="u-img1"></section>
                    <section class="u-center-line">
                         <i class="u-line"></i>
                    </section>
                    <section class="u-title2">
                         <p>2、分享邀请链接至好友</p>
                    </section>
                    <section class="u-img2"></section>
               </section>
          </section>
          <section class="g-continer-4">
               <section class="u-bg4-yuan1 u-bg-circle">
                    <img src="/static/drainage/pic_yuan1_n@3x.png" alt>
               </section>
               <section class="u-bg4-yuan2 u-bg-circle">
                    <img src="/static/drainage/pic_yuan5_n@3x.png" alt>
               </section>
               <section style="text-align:center">
                    <span class="u-title-icon">奖品</span>
               </section>
               <section class="u-banner"></section>
               <section class="u-center-line">
                    <i class="u-line"></i>
               </section>
               <section class="g-banner-list">
                    <ul class="displayFlex flexWrap">
                         <li>
                              <section class="u-li-img1"></section>
                         </li>
                         <li>
                              <section class="u-li-img2"></section>
                         </li>
                         <li>
                              <section class="u-li-img3"></section>
                         </li>
                         <li>
                              <section class="u-li-img4"></section>
                         </li>
                    </ul>
               </section>
          </section>
          <footer>
               <span class="u-logo"></span>
          </footer>
          <el-dialog :visible.sync="dialogVisible" :close-on-click-modal="false">
               <section class="g-dislog">
                    <section style="text-align:center">
                         <span class="u-title-icon">活动规则</span>
                    </section>
                    <section class="g-coniner">
                         <section>
                              <h1>一、活动时间</h1>
                              <p>2018年12月14日 - 2019年1月11日</p>
                         </section>
                         <section>
                              <h1>二、参与方式</h1>
                              <p>1、首次下载注册鹰眼鉴房的用户，即可领取一个鹰眼礼包</p>
                              <p>2、每成功邀请三个用户下载注册鹰眼鉴房，即可领取一个鹰眼礼包。</p>
                              <p>3、凡成功邀请50人以上的用户可参与瓜分大奖</p>
                         </section>
                         <section>
                              <h1>三、礼品设置</h1>
                              <p>一等奖：瓜分一万元新家物业费</p>
                              <p>二等奖：专家评测报告一期（限郑州）</p>
                              <p>三等奖：全景工地监控一期（限郑州）</p>
                              <p>四等奖：京东储值卡10元</p>
                              <p>五等奖：京东储值卡5元</p>
                              <p>六等奖：京东储值卡3元</p>
                              <p>七等奖：京东储值卡1元</p>
                              <p>普惠奖：验房工具箱体验卡</p>
                         </section>
                         <section>
                              <h1>四、活动细则</h1>
                              <p>1、被邀请用户需完成下载以及手机注册后，方视为邀请成功。</p>
                              <p>2、每个用户每日每天最多可以领取3次鹰眼礼包</p>
                              <p>3、奖品发放的账户以用户提交的注册手机号为准，请谨慎填写</p>
                              <p>4、每周二将会联系中奖用户发放上一周（周一至周日）奖品</p>
                              <p>5、物业费大奖将在活动结束后7个工作日内联系用户发放</p>
                         </section>
                    </section>
               </section>
          </el-dialog>
     </section>
</template>
<script>
import Get_token from "@/common/js/getToken";
import ScrollList from "../common/scrollList";
import UrlSplit from "@/common/js/urlSplit";
import Ob from "@/common/js/obshare";
import { mapMutations } from "vuex";
export default {
     components: {
          ScrollList
     },
     data() {
          return {
               dialogVisible: false,
               u: "",
               prizeList: []
          };
     },
     created() {
          Get_token()
               .then(res => {
                    this.u = res;
                    this.getHttp();
               })
               .catch(err => { });
     },
     methods: {
          ...mapMutations({
               set_hint: "set_hint"
          }),
          ruleHandler() {
               this.dialogVisible = true;
          },
          getTOken() {
               if (!this.u) {
                    let options = {
                         iphData: { str: "没有token，看着办" },
                         azData: "没有token，看着办",
                         iphFn: this.$JsToNative["LOGINACTION"],
                         azFn: this.$JsToNative["CALLANDROID"]
                    };
                    this.$JsToNativeFun(options);
               }
          },
          f_appShare() {
               if (!this.u) {
                    this.getTOken();
                    return;
               }
               let link_url =
                    window.location.origin +
                    "/#/brdrainage?share=1&u=" +
                    this.u;
               let share = {
                    url: link_url,
                    desc: "足不出户VR看盘，鹰眼鉴房助你“无忧购房”",
                    title:
                         "邀请好友即得购物卡，更可一同瓜分万元物业费，你在等什么？",
                    img: "O(∩_∩)O"
               };
               if (Ob.is_iph()) {
                    //native调用js
                    this.$setupWebViewJavascriptBridge(function (bridge) {
                         bridge.callHandler("shareAction", share, function (
                              response
                         ) {
                              return;
                         });
                    });
               } else if (Ob.is_az()) {
                    window.android[this.$JsToNative["CALLANDROIDSHARE"]](
                         share["url"],
                         share["title"],
                         share["desc"],
                         share["img"]
                    );
               }
          },
          getHttp() {
               let url = "user/getUserPrizeList";
               let body = {};
               let options = {
                    urls: url,
                    methods: "post",
                    data: body,
                    des: true,
                    types: 3
               };
               this.$http(options)
                    .then(res => {
                         if (res.response.status === "0") {
                              this.prizeList = res.response.data.list;
                              this.u = res.response.data.u;
                         } else {
                              if (!this.u) {
                                   this.set_hint("请登录");
                              }
                         }
                    })
                    .catch(err => {
                         this.set_hint("网络错误");
                    });
          }
     }
};
</script>

<style scoped>
.m-drainage {
     background: #2135e8;
}
header {
     position: relative;
}
.u-rule-icon {
     position: absolute;
     right: 0;
     top: 0.7rem;
     display: inline-block;
     width: 1.04rem;
}
.u-center-line {
     position: relative;
     width: 100%;
     height: 0.3rem;
}
.u-center-line::before {
     position: absolute;
     left: -0.15rem;
     display: inline-block;
     content: "";
     width: 0.3rem;
     height: 0.3rem;
     border-radius: 0.15rem;
     background: #2135e8;
}
.u-center-line::after {
     position: absolute;
     right: -0.15rem;
     display: inline-block;
     content: "";
     width: 0.3rem;
     height: 0.3rem;
     border-radius: 0.15rem;
     background: #2135e8;
}
.u-center-line .u-line {
     position: absolute;
     top: 50%;
     margin-top: -0.005rem;
     opacity: 0.5;
     display: inline-block;
     width: 100%;
     height: 0;
     border-top: 0.01rem dashed #435fff;
}
.g-continer-1,
.g-continer-2,
.g-continer-3,
.g-continer-4 {
     position: relative;
     overflow: hidden;
     margin: 0 auto 0.3rem;
     width: 6.93rem;
     background: #fff;
     border-radius: 0.2rem;
     z-index: 0;
}
.g-continer-foot {
     position: relative;
}
.g-continer-foot::before {
     position: absolute;
     z-index: 999;
     left: 1.35rem;
     bottom: -0.63rem;
     content: "";
     display: inline-block;
     width: 0.24rem;
     height: 0.98rem;
     background: url("/static/drainage/pic_lianjie_n@3x.png") no-repeat;
     background-size: cover;
}
.g-continer-foot::after {
     position: absolute;
     z-index: 999;
     right: 1.35rem;
     bottom: -0.63rem;
     content: "";
     display: inline-block;
     width: 0.24rem;
     height: 0.98rem;
     background: url("/static/drainage/pic_lianjie_n@3x.png") no-repeat;
     background-size: cover;
}
.u-title-icon {
     position: relative;
     display: inline-block;
     margin: 0.4rem auto;
     /* width: 1.45rem; */
     height: 0.36rem;
     font-family: "PingFangSC-Medium";
     font-size: 0.36rem;
     color: #212832;
     letter-spacing: 0;
     line-height: 0.36rem;
}
.u-title-icon::before {
     position: absolute;
     left: -0.84rem;
     top: 0.07rem;
     display: inline-block;
     content: "";
     width: 0.54rem;
     height: 0.26rem;
     background: url("/static/drainage/pic_xiaofangkuai1_n@3x.png") no-repeat;
     background-size: cover;
}
.u-title-icon::after {
     position: absolute;
     right: -0.84rem;
     top: 0.07rem;
     display: inline-block;
     content: "";
     width: 0.54rem;
     height: 0.26rem;
     background: url("/static/drainage/pic_xiaofangkua2_n@3x.png") no-repeat;
     background-size: cover;
}

.u-bg-circle {
     position: absolute;
     z-index: -1;
}
.u-bg1-yuan1 {
     left: 0;
     top: 5.66rem;
     width: 1.32rem;
}
.u-bg1-yuan2 {
     right: 0;
     top: 5.66rem;
     width: 1.32rem;
}
.u-bg1-yuan3 {
     right: 2.1rem;
     bottom: 0rem;
     width: 1.11rem;
}
.u-bg2-yuan1 {
     left: 0;
     top: 0;
     width: 1.32rem;
}
.u-bg2-yuan2 {
     right: 0;
     top: 0;
     width: 1.32rem;
}
.u-bg3-yuan1 {
     left: 0;
     top: 1.69rem;
     width: 1.32rem;
}
.u-bg3-yuan2 {
     left: 0;
     bottom: 1.95rem;
     width: 1.32rem;
}
.u-bg3-yuan3 {
     right: 0;
     top: 2.04rem;
     width: 0.8rem;
}
.u-bg3-yuan4 {
     right: 0;
     bottom: 0;
     width: 1.21rem;
}
.u-bg4-yuan1 {
     left: 0;
     top: 0;
     width: 1.32rem;
}
.u-bg4-yuan2 {
     right: 0;
     top: 1.2rem;
     width: 1.33rem;
}
.g-continer-1-text {
     margin: auto;
     width: 6.36rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #828b95;
     letter-spacing: 0.6px;
     line-height: 0.44rem;
     text-align: justify;
}
.g-continer-1-list {
     width: 6.3rem;
     margin: 0.3rem auto 0.2rem;
}

.g-continer-1-list li span {
     font-family: PingFangSC-Regular;
     font-size: 0.2rem;
     color: #828b95;
     text-align: center;
     line-height: 0.28rem;
}
.g-continer-1-list-li-img {
     margin: 0.06rem auto;
     width: 1rem;
}
.g-down-btn {
     margin: 0 auto 0.1rem;
     display: block;
     width: 3.72rem;
     height: 0.98rem;
     background: url("/static/drainage/pic_xiazaianniu_n@3x.png") no-repeat;
     background-size: 100% 100%;
     text-align: center;
     line-height: 0.98rem;
     font-family: PingFangSC-Medium;
     font-size: 0.36rem;
     color: #ffffff;
}
.u-winner_list {
     margin: 0.2rem auto 0;
     display: block;
     width: 2.4rem;
     height: 0.6rem;
     background: url("/static/drainage/pic_huojiangmingdan@3x.png") no-repeat;
     background-size: 100% 100%;
     text-align: center;
     line-height: 0.6rem;
     font-family: PingFangSC-Medium;
     font-size: 0.36rem;
     color: #ffffff;
}
.g-winner-list {
     padding: 0.4rem 0.3rem 0.64rem 0.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     text-align: center;
}
.g-continer-2 {
     height: 5.14rem;
}
.g-my-winner-list {
     height: 3rem;
     padding: 0 0.2rem 0 0.3rem;
}
.g-my-winner-list ul li {
     margin-bottom: 0.3rem;
}
.g-my-winner-list ul li .u-icon {
     display: inline-block;
     width: 0.36rem;
}
.g-my-winner-list ul li .u-text {
     margin-left: 0.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     letter-spacing: 0;
     line-height: 0.32rem;
}
.g-my-winner-list ul li .u-type,
.g-my-winner-list ul li .u-type-yes {
     display: inline-block;
     width: 1.12rem;
     height: 0.42rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     letter-spacing: 0;
     line-height: 0.42rem;
     border-radius: 0.04rem;
     text-align: center;
}
.g-my-winner-list ul li .u-type {
     color: #435fff;
     border: 0.01rem solid #435fff;
}
.u-type-yes {
     color: #b9c0c8;
     border: 0.01rem solid #b9c0c8;
}
.g-continer-3 {
     height: 10.14rem;
}
.g-continer-3 .u-title,
.g-continer-3 .u-title2 {
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #8b949e;
     line-height: 0.28rem;
     text-align: center;
}
.g-continer-3 .u-img1,
.g-continer-3 .u-img2 {
     margin: 0.3rem auto;
     width: 4rem;
     height: 3.13rem;
     background: url("/static/drainage/pic_fengxiang1_n@3x.png") no-repeat;
     background-size: cover;
}
.g-continer-3 .u-title2 {
     margin-top: 0.3rem;
}
.g-continer-3 .u-img2 {
     margin: 0.3rem auto 0;
     width: 4rem;
     height: 3.13rem;
     background: url("/static/drainage/pic_fengxian2_n@3x.png") no-repeat;
     background-size: cover;
}
.g-continer-4 {
     height: 8.39rem;
}
.u-banner {
     margin: 0 auto 0.3rem;
     width: 6.3rem;
     height: 2.1rem;
     background: url("/static/drainage/pic_tedengjiang_n@3x.png") no-repeat;
     background-size: cover;
}

.g-banner-list ul li {
     margin-left: 0.3rem;
     margin-top: 0.3rem;
}
.u-li-img1,
.u-li-img2,
.u-li-img3,
.u-li-img4 {
     width: 3rem;
     height: 1.8rem;
}
.u-li-img1 {
     background: url("/static/drainage/pic_zhuanjiapingce_n@3x.png") no-repeat;
     background-size: cover;
}
.u-li-img2 {
     background: url("/static/drainage/pic_quanjinggongdi_n@3x.png") no-repeat;
     background-size: cover;
}
.u-li-img3 {
     background: url("/static/drainage/pic_jingdongEka_n@3x.png") no-repeat;
     background-size: cover;
}
.u-li-img4 {
     background: url("/static/drainage/pic_yanfanggongjuka_n@3x.png") no-repeat;
     background-size: cover;
}
.g-coniner h1 {
     margin: 0.3rem 0;
     font-weight: 600;
     font-family: PingFangSC-Medium;
     font-size: 0.32rem;
     color: #212832;
     letter-spacing: 0.01rem;
     line-height: 0.32rem;
}
.g-coniner p {
     margin-bottom: 0.2rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #828b95;
     letter-spacing: 0.4px;
}
.u-logo {
     display: inline-block;
     width: 1.94rem;
     height: 0.5rem;
     background: url("/static/drainage/pic_logo@3x.png") no-repeat;
     background-size: 100% 100%;
}
footer {
     margin: 0.2rem auto;
     text-align: center;
}

.list-complete-item {
     transition: all 1s;
}
.list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
     opacity: 0;
     transform: translateX(-0.03rem);
}
.list-complete-leave-active {
     opacity: 0;
}
</style>
<style>
.m-drainage .el-dialog__header {
     padding: 0;
}
.m-drainage .el-dialog {
     width: 6.3rem !important;
     border-radius: 0.2rem !important;
}
.m-drainage .el-dialog__headerbtn .el-dialog__close {
     color: #4d535d;
}
.m-drainage .el-dialog__headerbtn {
     font-size: 0.36rem;
}
</style>
