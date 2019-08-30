<template>
     <section class="m-getInviteFriend">
          <header>
               <section>
                    <img src="/static/inviteFriend/pic_top@3x.png" alt>
               </section>
               <section class="g-header-edit">
                    <section class="u-header-tel">
                         <el-input type="tel" v-model="userPhone" placeholder="输入您的手机号接受邀请"></el-input>
                    </section>
                    <section
                         class="u-header-btn-active"
                         @click="downHandler"
                         v-if="userPhone !== ''"
                    >
                         <span>立即下载领取大礼包</span>
                    </section>
                    <section class="u-header-btn-link" v-else>
                         <span>立即下载领取大礼包</span>
                    </section>
               </section>
          </header>
          <section class="g-getInviteFriend-content">
               <section class="g-getInviteFriend-content-div">
                    <section class="g-getInviteFriend-content-div2 displayFlex flexJustifybetween">
                         <section class="g-getInviteFriend-content-font">
                              <span>01</span>
                         </section>
                         <section class="g-getInviteFriend-content-container">
                              <h1>楼盘综合动态评分</h1>
                              <p>五个维度综合动态评分（工程质量、地段交通、性价比、楼栋户型、周边配套），根据建设周期定期追踪评测，客观反映楼盘现状</p>
                         </section>
                         <section class="g-getInviteFriend-content-img">
                              <img src="/static/inviteFriend/pic_01_n@3x.png" alt>
                         </section>
                    </section>
               </section>
               <section class="g-getInviteFriend-content-div">
                    <section class="g-getInviteFriend-content-div2 displayFlex flexJustifybetween">
                         <section
                              style="right:0;width:3.91rem"
                              class="g-getInviteFriend-content-font"
                         >
                              <span>02</span>
                         </section>
                         <section class="g-getInviteFriend-content-img">
                              <img src="/static/inviteFriend/pic_02_n@3x.png" alt>
                         </section>
                         <section class="g-getInviteFriend-content-container">
                              <h1>专家评测报告</h1>
                              <p>数据看不懂？无法判断是否严重？没关系，我们来解决。行业专家、业内人士专业数据解读，隐蔽细节剖析，你曾经看不到的，现在一目了然。</p>
                         </section>
                    </section>
               </section>
               <section class="g-getInviteFriend-content-div">
                    <section class="g-getInviteFriend-content-div2 displayFlex flexJustifybetween">
                         <section
                              style="left:0;width:3.91rem"
                              class="g-getInviteFriend-content-font"
                         >
                              <span>03</span>
                         </section>
                         <section class="g-getInviteFriend-content-container">
                              <h1>全景工地监控</h1>
                              <p>还在周末去看工地？想知道项目进度？宝贵时间不再浪费，无人机航拍工地监控，720度VR全景实况体验，多角度实景呈现工地现场，业主足不出户即可一览无遗。</p>
                         </section>
                         <section class="g-getInviteFriend-content-img">
                              <img src="/static/inviteFriend/pic_03_n@3x.png" alt>
                         </section>
                    </section>
               </section>
               <section class="g-getInviteFriend-content-div">
                    <section class="g-getInviteFriend-content-div2 displayFlex flexJustifybetween">
                         <section
                              style="right:0;width:3.91rem"
                              class="g-getInviteFriend-content-font"
                         >
                              <span>04</span>
                         </section>
                         <section class="g-getInviteFriend-content-img">
                              <img src="/static/inviteFriend/pic_04_n@3x.png" alt>
                         </section>
                         <section class="g-getInviteFriend-content-container">
                              <h1>开放工地现场</h1>
                              <p>3号楼盖到几层了？5单元9层墙面有裂缝？201空鼓问题整改了没有？数百个工程建设阶段呈现，施工现场、安全文明、工艺流程等内部展示，以前你看不到的细节都在这里。</p>
                         </section>
                    </section>
               </section>
               <section class="g-getInviteFriend-content-div">
                    <section class="g-getInviteFriend-content-div2 displayFlex flexJustifybetween">
                         <section
                              style="left:0;width:3.91rem"
                              class="g-getInviteFriend-content-font"
                         >
                              <span>05</span>
                         </section>
                         <section class="g-getInviteFriend-content-container">
                              <h1>业主圈在线交流</h1>
                              <p>业主群找不到，进不去，利益方建的群？投诉无门？鹰眼鉴房业主圈帮你解决。全网唯一永久无群主、历史记录全保留，任何问题随意说，真正属于业主的业主圈。</p>
                         </section>
                         <section class="g-getInviteFriend-content-img">
                              <img src="/static/inviteFriend/pic_05_n@3x.png" alt>
                         </section>
                    </section>
               </section>
               <section class="g-getInviteFriend-content-div" style="height:4.5rem">
                    <section class="g-getInviteFriend-content-last">
                         <section
                              style="right:0;width:3.91rem;top:-0.41rem"
                              class="g-getInviteFriend-content-font"
                         >
                              <span>06</span>
                         </section>
                         <section class="g-getInviteFriend-content-container" style="width:100%">
                              <h1>系列小工具在线服务</h1>
                              <p>除此之外，我们还提供一系列小工具，业主朋友可根据需要使用</p>
                         </section>
                         <section class="g-last-list">
                              <ul class="displayFlex flexJustifybetween">
                                   <li>
                                        <section class="u-list-img">
                                             <img
                                                  src="/static/inviteFriend/icon_zizhuyanfang@3x.png"
                                                  alt
                                             >
                                        </section>
                                        <span class="u-list-text">自助验房</span>
                                   </li>
                                   <li>
                                        <section class="u-list-img">
                                             <img
                                                  src="/static/inviteFriend/icon_zizhuyanfang@3x.png"
                                                  alt
                                             >
                                        </section>
                                        <span class="u-list-text">收房指南</span>
                                   </li>
                                   <li>
                                        <section class="u-list-img">
                                             <img
                                                  src="/static/inviteFriend/icon_zizhuyanfang@3x.png"
                                                  alt
                                             >
                                        </section>
                                        <span class="u-list-text">法律咨询</span>
                                   </li>
                                   <li>
                                        <section class="u-list-img">
                                             <img
                                                  src="/static/inviteFriend/icon_zizhuyanfang@3x.png"
                                                  alt
                                             >
                                        </section>
                                        <span class="u-list-text">更多工具</span>
                                   </li>
                              </ul>
                         </section>
                    </section>
               </section>
          </section>
          <section class="u-header-btn-active" @click="downHandler" v-if="userPhone !== ''">
               <span>立即下载领取大礼包</span>
          </section>
          <section class="u-header-btn-link" v-else>
               <span>立即下载领取大礼包</span>
          </section>
     </section>
</template>
<script>
import { mapMutations } from 'vuex'
import Ob from '../../common/js/obshare'
export default {
     data() {
          return {
               userPhone: ''
          }
     },

     methods: {
          ...mapMutations({
               hint_is: 'set_hint'
          }),
          downHandler() {
               if (!Ob.checkMobile(this.userPhone)) {
                    this.hint_is('请输入正确的手机号');
                    return;
               }
               let url = 'user/inviteUser';
               let user = this.$route.query.u.replace(/ /g, '+');
               let body = {
                    userPhone: this.userPhone,
                    userId: user || ''
               };
               let options = {
                    urls: url,
                    methods: 'post',
                    data: body,
                    des: true,
                    types: 3
               };
               this.$http(options).then((res) => {
                    console.log(res);

                    if (res.code == '0') {
                         if (res.response.status == 0) {
                              let timer = setTimeout(() => {
                                   clearTimeout(timer);
                                   window.location.href = this.$url.appDown;
                              }, 1000);
                              return;
                         }
                         if (res.response.message == 'success') {
                              reutnr;
                         }
                         this.hint_is(res.response.message);
                    }
                    return;

               }).catch((err) => {

               });

          }
     }
}
</script>

<style scoped>
.m-getInviteFriend {
     padding-bottom: 0.4rem;
     margin: auto;
     width: 7.5rem;
     background: #3930a5;
}
.g-header-edit {
     margin: 0.2rem auto;
     width: 6.4rem;
}
.u-header-btn-active,
.u-header-btn-link {
     border-radius: 0.04rem;
     margin: 0.3rem auto 0;
     width: 6.4rem;
     height: 0.8rem;
     text-align: center;
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #ffffff;
     line-height: 0.8rem;
}
.u-header-btn-link {
     background: #b9c0c8;
}
.u-header-btn-active {
     background: #f2635b;
}
.g-getInviteFriend-content {
     margin: auto;
     width: 6.9rem;
}
.g-getInviteFriend-content-div {
     margin-top: 0.1rem;
     position: relative;
     overflow: hidden;
     height: 5.51rem;
}
.g-getInviteFriend-content-div2 {
     padding: 0 0.3rem;
     position: relative;
     margin: 1.53rem auto 0;
     height: 3.98rem;
     background: #f9faff;
     box-shadow: 0 0 0.2rem 0.06rem #1f168a;
     border-radius: 0.1rem;
}
.g-getInviteFriend-content-img {
     margin-top: -0.63rem;
     width: 2.62rem;
}
.g-getInviteFriend-content-container {
     width: 3.39rem;
}
.g-getInviteFriend-content-container h1 {
     margin-top: 0.4rem;
     font-family: PingFangSC-Medium;
     font-size: 0.4rem;
     color: #2f74e8;
     letter-spacing: 0.4px;
     line-height: 0.4rem;
}
.g-getInviteFriend-content-container p {
     margin-top: 0.21rem;
     font-family: PingFangSC-Regular;
     font-size: 0.26rem;
     color: #212832;
     letter-spacing: 0;
     line-height: 0.44rem;
}
.g-getInviteFriend-content-font {
     position: absolute;
     top: -1.8rem;
     text-align: center;
     width: 3.3rem;
     height: 3.2rem;
     opacity: 0.05;
     font-family: PingFangSC-Semibold;
     font-size: 3.2rem;
     color: #ffffff;
     letter-spacing: 0.032rem;
     line-height: 3.2rem;
}
.g-getInviteFriend-content-last {
     overflow: hidden;
     padding: 0 0.3rem;
     margin-top: 0.78rem;
     background: #f9faff;
     box-shadow: 0 0 0.2rem 0.06rem #1f168a;
     border-radius: 0.1rem;
}
.g-last-list {
     margin: 0.3rem auto;
}
.g-last-list ul li {
     text-align: center;
}
.g-last-list ul li .u-list-img {
     margin: 0 auto 0.14rem;
     width: 0.72rem;
     height: 0.72rem;
}
.g-last-list ul li .u-list-text {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #8b949e;
     line-height: 0.24rem;
}
</style>
<style>
.g-header-edit .el-input .el-input__inner {
     padding-left: 0.3rem;
     height: 0.8rem !important;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #3c47a5;
     line-height: 0.8rem !important;
     border: none !important;
}
</style>


