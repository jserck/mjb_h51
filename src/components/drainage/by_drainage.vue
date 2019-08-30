<template>
     <section class="m-drainage m-continer">
          <header>
               <section>
                    <img src="/static/drainage/pic_toutu_2n@3x.png" alt>
               </section>
               <span class="u-rule-icon" @click="ruleHandler">
                    <img src="/static/drainage/pic_guize_n@3x.png" alt>
               </span>
          </header>
          <section class="g-continer-1">
               <section class="u-header-tel">
                    <el-input type="tel" v-model="userPhone" placeholder="请输入手机号码接受邀请"></el-input>
               </section>
               <span class="g-down-btn" @click="submit">下载立即领取</span>
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
                    <ScrollList/>
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
import ScrollList from '../common/scrollList'
import { mapMutations } from 'vuex'
import Ob from '../../common/js/obshare'
export default {
     components: {
          ScrollList
     },
     data() {

          return {
               userPhone: '',
               dialogVisible: false
          }
     },
     methods: {
          ...mapMutations({
               hint_is: 'set_hint'
          }),
          ruleHandler() {
               this.dialogVisible = true;
          },
          submit() {
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
.g-continer-1 {
     position: relative;
     overflow: hidden;
     margin: 0 auto 0.3rem;
     width: 6.93rem;
     background: #fff;
     border-radius: 0.2rem;
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
.u-header-tel {
     margin: 0.3rem auto;
     width: 6.33rem;
     height: 0.8rem;
}
footer {
     margin: 0.2rem auto;
     text-align: center;
}
</style>
<style>
.m-drainage .el-dialog__header {
     padding: 0;
}
.m-drainage .el-dialog {
     width: 6.3rem;
     border-radius: 0.2rem;
}
.m-drainage .el-dialog__headerbtn .el-dialog__close {
     color: #4d535d;
}
.m-drainage .el-dialog__headerbtn {
     font-size: 0.36rem;
}
.g-continer-1 .el-input .el-input__inner {
     background: #f7f7f7;
     border: 1px solid #e7e7e7;
     padding-left: 0.3rem;
     height: 0.8rem !important;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #3c47a5;
     line-height: 0.8rem !important;
     border: none !important;
}
</style>
