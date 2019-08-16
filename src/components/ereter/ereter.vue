<template>
     <div class="m-ereter">
          <header>
               <section class="g-topImg">
                    <img class="flexImg" src="/static/pingfen/pic_toutu.png" alt="">
               </section>
          </header>
          <!--评分亮点-->
          <section class="g-reter-view g-reter-light">
               <span class="u-left-top" v-if="false"></span>
               <span class="u-right-top" v-if="false"></span>
               <span class="u-left-bottom"></span>
               <span class="u-right-bottom"></span>
               <section class="g-add-comma displayFlex">
                    <span class="g-add-comma-content displayFlex">
                         <i class="u-comma-l">
                              <img class="flexImg" src="/static/pingfen/pic_biaotizuo.png">
                         </i>
                         <i class="u-comma-text">评分亮点</i>
                         <i class="u-comma-r">
                              <img class="flexImg" src="/static/pingfen/pic_biaotiyou.png">
                         </i>
                    </span>
               </section>
               <section class="g-reter-light-content displayFlex flexJustifybetween">
                    <section class="g-reter-light-content-li displayFlex flexColumn">
                         <span class="u-img">
                              <img class="flexImg" src="/static/pingfen/icon_wudaweidu.png" alt="">
                         </span>
                         <span class="u-text">五大维度</span>
                    </section>
                    <section class="g-reter-light-content-li displayFlex flexColumn">
                         <span class="u-img">
                              <img class="flexImg" src="/static/pingfen/icon_dongtaijiankong.png" alt="">
                         </span>
                         <span class="u-text">质量监控</span>
                    </section>
                    <section class="g-reter-light-content-li displayFlex flexColumn">
                         <span class="u-img">
                              <img class="flexImg" src="/static/pingfen/icon_dongtaipingfen.png" alt="">
                         </span>
                         <span class="u-text">动态评分</span>
                    </section>
               </section>
          </section>
          <!--多维度评分-->
          <section class="g-reter-view g-reter-more">
               <span class="u-left-top"></span>
               <span class="u-right-top"></span>
               <span class="u-left-bottom"></span>
               <span class="u-right-bottom"></span>
               <section class="g-add-comma displayFlex">
                    <span class="g-add-comma-content displayFlex">
                         <i class="u-comma-l">
                              <img class="flexImg" src="/static/pingfen/pic_biaotizuo.png">
                         </i>
                         <i class="u-comma-text">多维度进行评分</i>
                         <i class="u-comma-r">
                              <img class="flexImg" src="/static/pingfen/pic_biaotiyou.png">
                         </i>
                    </span>
               </section>
               <section class="g-reter-more-content displayFlex flexJustifybetween">
                    <section class="g-reter-more-content-li displayFlex flexColumn">
                         <span class="u-img">
                              <img class="flexImg" src="/static/pingfen/icon_zhoubian.png" alt="">
                         </span>
                         <span class="u-text">周边配套</span>
                    </section>
                    <section class="g-reter-more-content-li displayFlex flexColumn">
                         <span class="u-img">
                              <img class="flexImg" src="/static/pingfen/icon_huxing.png" alt="">
                         </span>
                         <span class="u-text">楼栋户型</span>
                    </section>
                    <section class="g-reter-more-content-li displayFlex flexColumn">
                         <span class="u-img">
                              <img class="flexImg" src="/static/pingfen/icon_gongcheng.png" alt="">
                         </span>
                         <span class="u-text">工程质量</span>
                    </section>
                    <section class="g-reter-more-content-li displayFlex flexColumn">
                         <span class="u-img">
                              <img class="flexImg" src="/static/pingfen/icon_jiage.png" alt="">
                         </span>
                         <span class="u-text">楼盘价格</span>
                    </section>
                    <section class="g-reter-more-content-li displayFlex flexColumn">
                         <span class="u-img">
                              <img class="flexImg" src="/static/pingfen/icon_jiaotong.png" alt="">
                         </span>
                         <span class="u-text">地段交通</span>
                    </section>
               </section>
          </section>
          <!--评分依据-->
          <section class="g-reter-view g-reter-gist">
               <span class="u-left-top"></span>
               <span class="u-right-top"></span>
               <span class="u-left-bottom"></span>
               <span class="u-right-bottom"></span>
               <section class="g-add-comma displayFlex">
                    <span class="g-add-comma-content displayFlex">
                         <i class="u-comma-l">
                              <img class="flexImg" src="/static/pingfen/pic_biaotizuo.png">
                         </i>
                         <i class="u-comma-text">评分依据</i>
                         <i class="u-comma-r">
                              <img class="flexImg" src="/static/pingfen/pic_biaotiyou.png">
                         </i>
                    </span>
               </section>
               <section class="g-reter-gist-li">
                    <section class="g-reter-gist-li-header displayFlex">
                         <span class="g-reter-gist-li-header-container displayFlex">
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_zuo.png" /></i>
                              <i class="u-title">工程质量</i>
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_you.png" /></i>
                         </span>
                    </section>
                    <section class="g-reter-gist-li-text">
                         <p>针对大家关心的房屋质量问题，由专业人士和精准算法对房屋建设过程中的上百个监测点信息进行审核后给出综合评分</p>
                    </section>
                    <section class="g-reter-gist-li-img">
                         <img class="flexImg" src="/static/pingfen/pic_loupanzhiliang.png" alt="">
                    </section>
               </section>
               <section class="g-reter-gist-li">
                    <section class="g-reter-gist-li-header displayFlex">
                         <span class="g-reter-gist-li-header-container displayFlex">
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_zuo.png" /></i>
                              <i class="u-title">周边配套</i>
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_you.png" /></i>
                         </span>
                    </section>
                    <section class="g-reter-gist-li-text">
                         <p>为了反映更真实的配套信息，我们通过不定期的现场勘查，根据现场真实情况 ，从超市、学校、商场、医院、银行、健身、休闲、餐饮八个维度给出综合评分</p>
                    </section>
                    <section class="g-reter-gist-li-img">
                         <img class="flexImg" src="/static/pingfen/pic_zhoubianpeitao.png" alt="">
                    </section>
               </section>
               <section class="g-reter-gist-li">
                    <section class="g-reter-gist-li-header displayFlex">
                         <span class="g-reter-gist-li-header-container displayFlex">
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_zuo.png" /></i>
                              <i class="u-title">楼栋户型</i>
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_you.png" /></i>
                         </span>
                    </section>
                    <section class="g-reter-gist-li-text">
                         <p>买房纠结户型？这里除了对常见的户型结构评分外，还会通过布局合理程度、楼栋梯户比、容积率等多方面进行综合评分，给您一个更全面的决策依据</p>
                    </section>
                    <section class="g-reter-gist-li-img">
                         <img class="flexImg" src="/static/pingfen/pic_loudonghuxing.png" alt="">
                    </section>
               </section>
               <section class="g-reter-gist-li">
                    <section class="g-reter-gist-li-header displayFlex">
                         <span class="g-reter-gist-li-header-container displayFlex">
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_zuo.png" /></i>
                              <i class="u-title">地段交通</i>
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_you.png" /></i>
                         </span>
                    </section>
                    <section class="g-reter-gist-li-text">
                         <p>选小区看地段交通，我们不仅会考虑当前周边交通状况，同时还会根据未来规划发展趋势进行合理的评分</p>
                    </section>
                    <section class="g-reter-gist-li-img">
                         <img class="flexImg" src="/static/pingfen/pic_jiaotong.png" alt="">
                    </section>
               </section>
               <section class="g-reter-gist-li">
                    <section class="g-reter-gist-li-header displayFlex">
                         <span class="g-reter-gist-li-header-container displayFlex">
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_zuo.png" /></i>
                              <i class="u-title">楼盘价格</i>
                              <i class="u-img"><img class="flexImg" src="/static/pingfen/icon_you.png" /></i>
                         </span>
                    </section>
                    <section class="g-reter-gist-li-text">
                         <p>与周边新房价格直接对比，并通过专业人士对未来升值空间的预测进行综合评分，给您更可靠的价格依据</p>
                    </section>
                    <section class="g-reter-gist-li-img">
                         <img class="flexImg" src="/static/pingfen/pic_jiage.png" alt="">
                    </section>
               </section>
          </section>
          <footer>
               <section class="g-foot-content displayFlex flexJustifyAround flexAlignItemsCenter">
                    <span class="u-foot-ico"></span>
                    <span class="u-logo"><img class="flexImg" src="/static/pingfen/logo.png"></span>
                    <span class="u-foot-ico"></span>
               </section>
          </footer>
     </div>
</template>
<script>
export default {
     data() {
          return {

          }
     }
}
</script>
<style scoped>
.m-ereter {
      position: relative;
      margin: auto;
      max-width: 7.5rem;
      width: 100%;
      background: #436ff5;
      overflow: hidden;
      padding-top: 6.13rem;
}

header {
      position: absolute;
      top: 0;
}

.g-topImg {
      position: relative;
      z-index: 9;
      width: 100%;
}

.g-reter-light {
      margin: 0 auto 0.25rem;
      padding-top: 1.2rem;
      padding-bottom: 0.6rem;
      display: block;
}

.g-reter-view {
      position: relative;
      width: 7.1rem;
      background: #fff;
}

.g-reter-view .u-left-top,
.g-reter-view .u-left-bottom,
.g-reter-view .u-right-top,
.g-reter-view .u-right-bottom {
      display: inline-block;
      position: absolute;
      width: 0.35rem;
      height: 0.16rem;
      background: #436ff5;
}

.g-reter-view .u-left-top {
      top: -1px;
      left: -1px;
}

.g-reter-view .u-left-bottom {
      bottom: -1px;
      left: -1px;
}

.g-reter-view .u-right-top {
      top: -1px;
      right: -1px;
}

.g-reter-view .u-right-bottom {
      bottom: -1px;
      right: -1px;
}

.g-reter-more {
      margin: 0 auto 0.3rem;
      padding-top: 0.1px;
      padding-bottom: 0.7rem;
}

.g-reter-gist {
      margin: 0 auto 0.3rem;
      padding-top: 0.1px;
      padding-bottom: 0.01rem;
}

.g-foot-content {
      padding: 0 0.6rem 0 0.6rem;
}

.u-foot-ico {
      position: relative;
      display: inline-block;
      width: 1.44rem;
      height: 0.02rem;
      background: #fff;
}

.u-foot-ico::after {
      content: "";
      display: inline-block;
      position: absolute;
      right: -0.13rem;
      top: -0.055rem;
      width: 0.13rem;
      height: 0.13rem;
      background: #fff;
}

.u-foot-ico::before {
      content: "";
      display: inline-block;
      position: absolute;
      left: -0.13rem;
      top: -0.055rem;
      width: 0.13rem;
      height: 0.13rem;
      background: #fff;
}

.g-add-comma {
      margin: 0.7rem auto 0;
}

.g-add-comma-content {
      margin: auto;
}

.u-comma-l,
.u-comma-r {
      position: relative;
      display: inline-block;
      width: 0.49rem;
      height: 0.43rem;
}

.u-comma-l img,
.u-comma-r img {
      position: absolute;
      top: 0;
}

.u-comma-text {
      margin: 0 0.4rem 0 0.4rem;
      font-family: FZLTTHJW--GB1-0;
      font-weight: 900;
      font-size: 0.5rem;
      color: #0080ff;
      letter-spacing: 5px;
      line-height: 0.5rem;
}

.g-reter-light-content {
      padding: 0 0.97rem;
      margin-top: 0.39rem;
}

.g-reter-more-content {
      padding: 0 0.38rem;
      margin-top: 0.46rem;
}

.g-reter-light-content .g-reter-light-content-li,
.g-reter-more-content .g-reter-more-content-li {
      text-align: center;
}

.g-reter-light-content .g-reter-light-content-li .u-img {
      display: inline-block;
      width: 1rem;
}

.g-reter-more-content .g-reter-more-content-li .u-img {
      display: inline-block;
      margin: auto;
      width: 0.8rem;
}

.g-reter-light-content .g-reter-light-content-li .u-text,
.g-reter-more-content .g-reter-more-content-li .u-text {
      margin-top: 0.15rem;
      font-family: PingFangSC-Medium;
      font-size: 0.24rem;
      color: #0080ff;
      line-height: 0.32rem;
}

.g-reter-gist-li {
      margin: 0.6rem auto 1rem;
}

.g-reter-gist-li-header {
}

.g-reter-gist-li-header-container {
      margin: auto;
      font-family: PingFangSC-Semibold;
      font-size: 0.4rem;
      color: #436ff5;
      letter-spacing: 1.33px;
      line-height: 0.4rem;
}

.g-reter-gist-li-header-container .u-img {
      display: inline-block;
      width: 1.08rem;
}

.g-reter-gist-li-header-container .u-title {
      margin: 0 0.2rem;
}

.g-reter-gist-li-text {
      margin: 0.2rem auto;
      width: 5.61rem;
      text-align: justify;
      font-family: PingFangSC-Regular;
      font-size: 0.28rem;
      color: #4d535d;
      letter-spacing: 1px;
      line-height: 0.38rem;
}

.g-reter-gist-li-img {
      margin: 0.3rem auto 0;
      width: 5.6rem;
}

footer {
      margin: 0.4rem 0;
}

footer .u-logo {
      display: inline-block;
      margin: 0 0.3rem;
      width: 2.4rem;
}
</style>