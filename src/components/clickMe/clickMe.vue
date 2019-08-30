<template>
     <section class="clickMe">
          <header>
               <div class="g-header-img">
                    <div class="g-header-tit">
                         <img class="flexImg" src="/static/clickMe/pic_biaoti .png" alt>
                    </div>
                    <div class="g-header-text">
                         <p>房价辣么高</p>
                         <p>交完首付只能在家坐等交房</p>
                         <p>各种新闻爆出，越看越心慌</p>
                         <p>开发商不给开放工地，进去了也看不咋懂....</p>
                    </div>
               </div>
               <div class="g-banner">
                    <img class="flexImg" src="/static/clickMe/pic_xinwen.png" alt>
               </div>
          </header>
          <section class="g-tit">
               <img class="flexImg" src="/static/clickMe/pic_xiaokunrao.png" alt>
          </section>
          <section class="g-welfare">
               <div class="g-welfare-tit">
                    <p style="margin-top:0.3rem">鹰眼鉴房限时为业主大大们开启小福利</p>
                    <p>施工进度、质量现状...</p>
                    <p>APP中通过专业人士一一剖析</p>
                    <p>再也不用担心自己只能看着毛坯墙发呆</p>
                    <div class="g-three-content"></div>
                    <p>活动期间内关注你的意向楼盘</p>
                    <p>仅需楼盘关注人数超过500人</p>
                    <p>即可优先进入鹰眼君的评测LIST</p>
                    <p>关注该楼盘的业主</p>
                    <p>均可获得一份诚意满满的“楼盘深度评测”</p>
               </div>
          </section>
          <section class="g-click-me">
               <img class="flexImg" src="/static/clickMe/pic_dianwo.png" alt>
          </section>
          <section class="g-tit" style="width:1.3rem">
               <img class="flexImg" src="/static/clickMe/pic_huodongguize.png" alt>
          </section>
          <section class="g-party-rule">
               <div class="displayFlex">
                    <i>1.</i>
                    <p>登录鹰眼鉴房APP，进入感兴趣的楼盘详情页,点击 “关注”按钮，即可参与活动；</p>
               </div>
               <div class="displayFlex">
                    <i>2.</i>
                    <p>本活动长期有效；</p>
               </div>
               <div class="displayFlex">
                    <i>3.</i>
                    <p>活动期间内，凡楼盘新增关注人数满500人，鹰眼鉴房即优先为该楼盘提供评测文章；</p>
               </div>
               <div class="displayFlex">
                    <i>4.</i>
                    <p>评测文章将于新增关注人数满500人后的20个工作日内，在鹰眼鉴房APP的楼盘评测板块及官方订阅号中发布</p>
               </div>
               <div class="displayFlex">
                    <i>5.</i>
                    <p>活动期内，如遇不可抗力因素导致无法提供评测文章，鹰眼鉴房不承担责任</p>
               </div>
               <div class="displayFlex">
                    <i>6.</i>
                    <p>本活动最终解释权归鹰眼鉴房所有。</p>
               </div>
          </section>
          <DownBtn/>
          <footer>
               <div>
                    <img class="flexImg" src="/static/clickMe/pic_logo.png" alt>
               </div>
          </footer>
     </section>
</template>
<script>
import DownBtn from '../common/downBtn'
export default {
     components: {
          DownBtn
     },
}
</script>

<style scoped>
.clickMe {
     padding-bottom: 1.2rem;
     margin: auto;
     width: 7.5rem;
     overflow: hidden;
     background: #5068f9;
}
.g-header-img {
     overflow: hidden;
     height: 9.626rem;
     background: url("/static/clickMe/pic_toutu.png");
     background-size: cover;
}
.g-header-tit {
     overflow: hidden;
     margin: 1.053rem auto 0;
     width: 6.56rem;
}
.u-party-date {
     text-align: center;
     font-family: PingFangSC-Semibold;
     font-size: 0.24rem;
     color: #ffffff;
     letter-spacing: 0.94px;
}
.g-header-text {
     margin-top: 4.57rem;
     text-align: center;
     font-family: PingFangSC-Medium;
     font-size: 0.24rem;
     color: #ffffff;
     letter-spacing: 0.02rem;
     line-height: 0.35rem;
}
.g-banner {
     margin: -0.1rem auto 0;
     width: 6.9rem;
}
.g-tit {
     position: relative;
     margin: 0.55rem auto 0;
     width: 2.97rem;
     height: 0.37rem;
}
.g-tit::after {
     position: absolute;
     right: -0.72rem;
     top: -0.15rem;
     display: inline-block;
     content: "";
     width: 0.6rem;
     height: 0.6rem;
     background: url("/static/clickMe/icon_you.png");
     background-size: cover;
}
.g-tit::before {
     position: absolute;
     left: -0.72rem;
     top: -0.15rem;
     display: inline-block;
     content: "";
     width: 0.6rem;
     height: 0.6rem;
     background: url("/static/clickMe/icon_zuo.png");
     background-size: cover;
}
.g-welfare {
     margin: 0.34rem auto 0;
     width: 6.9rem;
     height: 8.28rem;
     background: #fff;
     border-radius: 0.05rem;
}
.g-welfare-tit {
     overflow: hidden;
     text-align: center;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #514d5e;
     letter-spacing: 0.0233rem;
     line-height: 0.48rem;
}
.g-three-content {
     margin: 0.2rem auto;
     width: 5.9rem;
     height: 2.96rem;
     background: url("/static/clickMe/pic_ceping.png");
     background-size: cover;
     background-repeat: no-repeat;
}
.g-click-me {
     margin: 0.4rem auto 0;
     width: 6.9rem;
     height: 3.26rem;
     background: #fff;
}
.g-party-rule {
     padding: 0.3rem;
     margin: 0.36rem auto 0;
     width: 6.3rem;
     background: #fff;
     border-radius: 0.05rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #514d5e;
     letter-spacing: 1.77px;
     line-height: 0.48rem;
}
footer {
     margin: 0.3rem auto;
     width: 4.12rem;
}
</style>
