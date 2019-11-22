<template>
     <div class="about">
          <div class="logoImagae">
               <span>
                    <img :src="this.$url.logo_img" />
               </span>
          </div>
          <div class="aboutText">
               鹰眼鉴房是国内首家专注于房产质量的信息服务平台，通过对房产建筑过程的监测，采集真实的房屋建筑质量数据，为业主提供所购房产建筑、装修、交房全流程的过程管控及空间信息化数据。
               <!--鹰眼鉴房是国内首家专注于房产质量的信息服务平台，通过对房产建筑过程的监测，采集真实的房屋建筑质量数据，为业主提供所购房产建筑、装修、交房全流程的过程管控及空间信息化数据。-->
          </div>
          <div class="g-xy">
               <ul class="displayFlex flexAlignJustifyCenter">
                    <li>
                         <a href="http://h5.homehawkeye.com/#/adminText">《用户使用协议》</a>
                    </li>
                    <li>
                         <a
                              href="http://pingc.homehawkeye.com/#/serviceAgreement?type=app"
                         >《鹰眼会员服务协议》</a>
                    </li>
                    <li>
                         <a href="http://pingc.homehawkeye.com/#/privacyAgreement?type=app">《隐私协议》</a>
                    </li>
               </ul>
          </div>
     </div>
</template>

<style scoped>
.about {
     position: relative;
     overflow: hidden;
     height: 100vh;
     background: #fff;
}
.logoImagae {
     width: 1.9rem;
     height: 2.5rem;
     background: #fff;
     margin: 0.8rem auto 0;
     text-align: center;
     line-height: 2.44rem;
}

.logoImagae img {
     width: 100%;
}

.aboutText {
     width: 5.9rem;
     height: 2.88rem;
     margin: 1rem auto;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #42464d;
     letter-spacing: 0.3px;
     line-height: 0.48rem;
}
.g-xy {
     position: absolute;
     bottom: 10%;
     width: 100%;
}
.g-xy ul{

}
.g-xy ul li a:link,
.g-xy ul li a:visited,
.g-xy ul li a:active,
.g-xy ul li a:hover {
     font-size: 0.24rem;
     color: #0080ff;
     line-height: 0.3rem;
}
</style>
