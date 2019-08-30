<<<<<<< HEAD
<template>
     <section class="m-inviteFriend">
          <header>
               <section>
                    <img src="/static/inviteFriend/pic_top2_n@3x.png" alt>
               </section>
               <section class="g-header-text">
                    <p>马上去解救对房屋质量一窍不通的好友们！</p>
               </section>
               <section class="g-share">
                    <ul class="displayFlex flexJustifybetween">
                         <li @click="share(0)">
                              <section class="u-share-icon">
                                   <img src="/static/inviteFriend/icon_share_wechat@3x.png" alt>
                              </section>
                              <span>微信</span>
                         </li>
                         <li @click="share(1)">
                              <section class="u-share-icon">
                                   <img src="/static/inviteFriend/icon_share_moments@3x.png" alt>
                              </section>
                              <span>朋友圈</span>
                         </li>
                         <li @click="share(2)">
                              <section class="u-share-icon">
                                   <img src="/static/inviteFriend/icon_share_weibo@3x.png" alt>
                              </section>
                              <span>微博</span>
                         </li>
                         <li @click="share(3)">
                              <section class="u-share-icon">
                                   <img src="/static/inviteFriend/icon_share_qq@3x.png" alt>
                              </section>
                              <span>QQ好友</span>
                         </li>
                    </ul>
               </section>
          </header>
          <section class="g-invite-succuss">
               <section class="u-invite-succuss-tit">
                    <img src="/static/inviteFriend/pic_kuang_n@3x.png" alt>
               </section>
               <section class="g-invite-succuss-list">
                    <section class="u-gradient"></section>
                    <section class="g-invite-succuss-list-header">
                         <span
                              class="g-invite-succuss-list-header-tit"
                         >已成功邀请{{userList.length || 0}}名好友</span>
                    </section>
                    <section class="g-invite-succuss-list-ul">
                         <ul class="overFlow_touch">
                              <li
                                   v-for="(item,index) in userList"
                                   :key="index"
                                   class="displayFlex flexAlignItemsCenter flexJustifybetween"
                              >
                                   <section class="u-li-user displayFlex flexAlignItemsCenter">
                                        <span
                                             class="u-li-user-img"
                                             :style="`background:url('${item.userAvatar}');background-size:cover`"
                                        ></span>
                                        <span class="u-li-user-mane">{{item.userPhone}}</span>
                                   </section>
                                   <span class="u-li-time">{{item.createtime}}</span>
                              </li>
                         </ul>
                    </section>
               </section>
          </section>
     </section>
</template>
<script>

import Ob from '../../common/js/obshare.js'
import { mapMutations } from 'vuex'

export default {
     data() {
          return {
               userList: []
          }
     },
     created() {
          this.getShareList();
     },
     methods: {
          ...mapMutations({
               hint_is: 'set_hint'
          }),
          getShareList() {
               let url = 'user/myInviteInfo';
               let user = this.$route.query.u.replace(/ /g, '+');
               let body = { userId: user };
               let options = {
                    urls: url,
                    methods: 'post',
                    data: body,
                    des: true,
                    types: 3
               };
               this.$http(options).then((res) => {
                    if (res.code === "0") {
                         if (res.response.message != '' && res.response.message != 'success') {
                              this.hint_is(res.response.message);
                         }
                         this.userList = res.response.data.userLists;
                    }
               }).catch((err) => {
                    console.log(err);
               });
          },
          share(type) {
               let options = {
                    iphData: { str: type },
                    azData: type,
                    iphFn: this.$JsToNative['INVITATIONSHAREACTION'],
                    azFn: this.$JsToNative['INVITATIONSHAREACTION']
               };
               this.$JsToNativeFun(options);
               // let iph = Ob.is_iph();
               // let az = Ob.is_az();
               // if (iph) {
               //      this.$SetupWebViewJavascriptBridge(function (bridge) {
               //           bridge.callHandler(
               //                this.$JsToNative['INVITATIONSHAREACTION'],
               //                { str: type },
               //                function (response) {
               //                     return;
               //                }
               //           );
               //      });
               // } else if (az) {
               //      window.android[this.$JsToNative['INVITATIONSHAREACTION']](type);
               // }
          }
     }
}
</script>

<style scoped>
.m-inviteFriend {
     margin: auto;
     width: 100%;
     max-width: 750px;
     overflow: hidden;
     background: #f7f7f7;
}
header {
     padding-bottom: 0.4rem;
     background: #fff;
}
.g-header-text {
     margin: 0.4rem auto 0;
     font-family: PingFangSC-Medium;
     font-size: 0.32rem;
     color: #212832;
     line-height: 0.32rem;
     text-align: center;
}
.g-share {
     margin: 0.4rem auto 0;
     width: 6.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #8b949e;
     line-height: 0.24rem;
}

.g-share ul li {
     text-align: center;
}
.g-share ul li .u-share-icon {
     margin: auto;
     width: 1rem;
     height: 1rem;
     text-align: center;
}
.g-invite-succuss {
     padding-bottom: 0.4rem;
     position: relative;
     margin: 0.2rem auto 0;
     background: #fff;
     overflow: hidden;
}
.g-invite-succuss-list {
     box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
     position: relative;
     margin: 0.65rem auto 0;
     width: 6.7rem;
     background: #fff;
     z-index: 999;
}
.u-gradient {
     height: 0.5rem;
     background-image: linear-gradient(
          -180deg,
          #d7d8ff 4%,
          rgba(255, 255, 255, 0) 100%
     );
}
.u-invite-succuss-tit {
     position: absolute;
     top: 0.4rem;
     left: 50%;
     margin-left: -3.55rem;
     width: 7.1rem;
     height: 0.52rem;
}
.g-invite-succuss-list-header {
     text-align: center;
     font-family: PingFangSC-Medium;
     font-size: 0.4rem;
     color: #2f74e8;
     letter-spacing: 0.4px;
     line-height: 0.4rem;
     text-shadow: 0 1px 0.1rem rgba(47, 116, 232, 0.3);
}
.g-invite-succuss-list-header-tit {
     position: relative;
}
.g-invite-succuss-list-header-tit::after {
     position: absolute;
     top: 0;
     right: -0.8rem;
     content: "";
     display: inline-block;
     width: 0.6rem;
     height: 0.4rem;
     background: url("/static/inviteFriend/pic_sucai_n@3x.png") no-repeat;
     background-size: 100%;
}
.g-invite-succuss-list-header-tit::before {
     position: absolute;
     top: 0;
     left: -0.8rem;
     content: "";
     display: inline-block;
     width: 0.6rem;
     height: 0.4rem;
     background: url("/static/inviteFriend/pic_sucai_n@3x.png") no-repeat;
     background-size: 100%;
}
.g-invite-succuss-list-ul {
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
}
.g-invite-succuss-list-ul ul {
     height: 5rem;
     padding: 0.2rem 0.3rem;
}
.g-invite-succuss-list-ul li {
     margin: 0.2rem auto;
}
.g-invite-succuss-list-ul li .u-li-user .u-li-user-img {
     display: inline-block;
     width: 0.6rem;
     height: 0.6rem;
     background: #212832;
     border-radius: 0.3rem;
}
.u-li-user-mane {
     margin-left: 0.2rem;
}
</style>

=======
<template>
     <section class="m-inviteFriend">
          <header>
               <section>
                    <img src="/static/inviteFriend/pic_top2_n@3x.png" alt>
               </section>
               <section class="g-header-text">
                    <p>马上去解救对房屋质量一窍不通的好友们！</p>
               </section>
               <section class="g-share">
                    <ul class="displayFlex flexJustifybetween">
                         <li @click="share(0)">
                              <section class="u-share-icon">
                                   <img src="/static/inviteFriend/icon_share_wechat@3x.png" alt>
                              </section>
                              <span>微信</span>
                         </li>
                         <li @click="share(1)">
                              <section class="u-share-icon">
                                   <img src="/static/inviteFriend/icon_share_moments@3x.png" alt>
                              </section>
                              <span>朋友圈</span>
                         </li>
                         <li @click="share(2)">
                              <section class="u-share-icon">
                                   <img src="/static/inviteFriend/icon_share_weibo@3x.png" alt>
                              </section>
                              <span>微博</span>
                         </li>
                         <li @click="share(3)">
                              <section class="u-share-icon">
                                   <img src="/static/inviteFriend/icon_share_qq@3x.png" alt>
                              </section>
                              <span>QQ好友</span>
                         </li>
                    </ul>
               </section>
          </header>
          <section class="g-invite-succuss">
               <section class="u-invite-succuss-tit">
                    <img src="/static/inviteFriend/pic_kuang_n@3x.png" alt>
               </section>
               <section class="g-invite-succuss-list">
                    <section class="u-gradient"></section>
                    <section class="g-invite-succuss-list-header">
                         <span
                              class="g-invite-succuss-list-header-tit"
                         >已成功邀请{{userList.length || 0}}名好友</span>
                    </section>
                    <section class="g-invite-succuss-list-ul">
                         <section class="g-invite-succuss-list-errImg" v-if="userList.length ==0"></section>
                         <ul class="overFlow_touch">
                              <li
                                   v-for="(item,index) in userList"
                                   :key="index"
                                   class="displayFlex flexAlignItemsCenter flexJustifybetween"
                              >
                                   <section class="u-li-user displayFlex flexAlignItemsCenter">
                                        <span
                                             class="u-li-user-img"
                                             :style="`background:url('${item.userAvatar}');background-size:cover`"
                                        ></span>
                                        <span class="u-li-user-mane">{{item.userPhone}}</span>
                                   </section>
                                   <span class="u-li-time">{{item.createtime}}</span>
                              </li>
                         </ul>
                    </section>
               </section>
          </section>
     </section>
</template>
<script>

import Ob from '../../common/js/obshare.js'
import { mapMutations } from 'vuex'

export default {
     data() {
          return {
               userList: []
          }
     },
     created() {
          this.getShareList();
     },
     methods: {
          ...mapMutations({
               hint_is: 'set_hint'
          }),
          getShareList() {
               let url = 'user/myInviteInfo';
               let user = this.$route.query.u.replace(/ /g, '+');
               let body = { userId: user };
               let options = {
                    urls: url,
                    methods: 'post',
                    data: body,
                    des: true,
                    types: 3
               };
               this.$http(options).then((res) => {
                    if (res.code === "0") {
                         if (res.response.message != '' && res.response.message != 'success') {
                              this.hint_is(res.response.message);
                         }
                         this.userList = res.response.data.userLists;
                    }
               }).catch((err) => {
                    console.log(err);
               });
          },
          share(type) {
               let options = {
                    iphData: { str: type },
                    azData: type,
                    iphFn: this.$JsToNative['INVITATIONSHAREACTION'],
                    azFn: this.$JsToNative['INVITATIONSHAREACTION']
               };
               this.$JsToNativeFun(options);
               // let iph = Ob.is_iph();
               // let az = Ob.is_az();
               // if (iph) {
               //      this.$SetupWebViewJavascriptBridge(function (bridge) {
               //           bridge.callHandler(
               //                this.$JsToNative['INVITATIONSHAREACTION'],
               //                { str: type },
               //                function (response) {
               //                     return;
               //                }
               //           );
               //      });
               // } else if (az) {
               //      window.android[this.$JsToNative['INVITATIONSHAREACTION']](type);
               // }
          }
     }
}
</script>

<style scoped>
.m-inviteFriend {
     margin: auto;
     width: 100%;
     max-width: 750px;
     overflow: hidden;
     background: #e93f53;
}
header {
     padding-bottom: 0.4rem;
     background: #e93f53;
}
.g-header-text {
     margin: 0.4rem auto 0;
     font-family: PingFangSC-Medium;
     font-size: 0.32rem;
     color: #fff;
     line-height: 0.32rem;
     text-align: center;
}
.g-share {
     margin: 0.4rem auto 0;
     width: 6.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #fff;
     line-height: 0.24rem;
}

.g-share ul li {
     text-align: center;
}
.g-share ul li .u-share-icon {
     margin: auto;
     width: 1rem;
     height: 1rem;
     text-align: center;
}
.g-invite-succuss {
     padding-bottom: 1.18rem;
     position: relative;
     margin: 0.2rem auto 0;
     background: #e93f53;
     overflow: hidden;
}
.g-invite-succuss-list {
     box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
     position: relative;
     margin: 0.65rem auto 0;
     width: 6.7rem;
     background: #fff;
     z-index: 999;
}
.g-invite-succuss-list-errImg {
     position: absolute;
     left: 50%;
     margin-left: -1rem;
     margin-top: -1rem;
     top: 50%;
     width: 2rem;
     height: 2rem;
     background: url("/static/pic_wujilu_n.png") no-repeat;
     background-size: 100% auto;
}
.u-gradient {
     height: 0.5rem;
     background-image: linear-gradient(
          -180deg,
          #d7d8ff 4%,
          rgba(255, 255, 255, 0) 100%
     );
}
.u-invite-succuss-tit {
     position: absolute;
     top: 0.4rem;
     left: 50%;
     margin-left: -3.55rem;
     width: 7.1rem;
     height: 0.52rem;
}
.g-invite-succuss-list-header {
     text-align: center;
     font-family: PingFangSC-Medium;
     font-size: 0.4rem;
     color: #2f74e8;
     letter-spacing: 0.4px;
     line-height: 0.4rem;
     text-shadow: 0 1px 0.1rem rgba(47, 116, 232, 0.3);
}
.g-invite-succuss-list-header-tit {
     position: relative;
}
.g-invite-succuss-list-header-tit::after {
     position: absolute;
     top: 0;
     right: -0.8rem;
     content: "";
     display: inline-block;
     width: 0.6rem;
     height: 0.4rem;
     background: url("/static/inviteFriend/pic_sucai_n@3x.png") no-repeat;
     background-size: 100%;
}
.g-invite-succuss-list-header-tit::before {
     position: absolute;
     top: 0;
     left: -0.8rem;
     content: "";
     display: inline-block;
     width: 0.6rem;
     height: 0.4rem;
     background: url("/static/inviteFriend/pic_sucai_n@3x.png") no-repeat;
     background-size: 100%;
}
.g-invite-succuss-list-ul {
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
}
.g-invite-succuss-list-ul ul {
     height: 5rem;
     padding: 0.2rem 0.3rem;
}
.g-invite-succuss-list-ul li {
     margin: 0.2rem auto;
}
.g-invite-succuss-list-ul li .u-li-user .u-li-user-img {
     display: inline-block;
     width: 0.6rem;
     height: 0.6rem;
     background: #212832;
     border-radius: 0.3rem;
}
.u-li-user-mane {
     margin-left: 0.2rem;
}
</style>

>>>>>>> inviteFriend_put
