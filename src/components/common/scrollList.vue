<template>
     <transition-group name="list-complete" tag="ul">
          <li
               v-for="item in rollList"
               v-bind:key="item.num"
               class="displayFlex flexJustifybetween list-complete-item"
          >
               <section class="u-li-l displayFlex flexAlignItemsCenter">
                    <span class="u-li-img">
                         <img class="flexImg" :src="item.src" alt>
                    </span>
                    <span class="u-li-tel">{{item.tel}}</span>
               </section>
               <section class="u-li-r">
                    <span class="u-li-text">{{item.name}}</span>
               </section>
          </li>
     </transition-group>
</template>
<script>
export default {
     data() {
          return {
               rollList: [
                    {
                         tel: ' 158***** 630',
                         name: '京东储值卡5元',
                         src: '/static/drainage/u=39168288,3726348432&fm=27&gp=0.jpg',
                         num: 0
                    },
                    {
                         tel: '136 ***** 451',
                         name: '京东储值卡3元',
                         src: '/static/drainage/u=50908548,3208825682&fm=27&gp=0.jpg',
                         num: 1
                    },
                    {
                         tel: '132 ***** 683 ',
                         name: '京东储值卡10元',
                         src: '/static/drainage/u=65455504,183864199&fm=27&gp=0.jpg',
                         num: 2
                    },
                    {
                         tel: '158 ***** 708',
                         name: '京东储值卡3元',
                         src: '/static/drainage/u=72480349,2460276902&fm=27&gp=0.jpg',
                         num: 3
                    },
                    {
                         tel: '138 ***** 091',
                         name: '京东储值卡3元',
                         src: '/static/drainage/u=97202487,1801312963&fm=27&gp=0.jpg',
                         num: 4
                    },
                    {
                         tel: '137 ***** 371',
                         name: '京东储值卡10元',
                         src: '/static/drainage/u=130045927,1252294772&fm=27&gp=0.jpg',
                         num: 5
                    },
                    {
                         tel: '132 ***** 127',
                         name: '专家评测报告',
                         src: '/static/drainage/u=146873038,1788501521&fm=11&gp=0.jpg',
                         num: 6
                    },
                    {
                         tel: '159 ***** 227',
                         name: '京东储值卡5元',
                         src: '/static/drainage/u=152216801,599438652&fm=27&gp=0.jpg',
                         num: 7
                    },
                    {
                         tel: '137 ***** 406',
                         name: '专家评测报告',
                         src: '/static/drainage/u=202645757,3021619839&fm=27&gp=0.jpg',
                         num: 8
                    },
                    {
                         tel: '138 ***** 207',
                         name: '京东储值卡10元',
                         src: '/static/drainage/u=223516982,3415621172&fm=27&gp=0.jpg',
                         num: 9
                    }
               ],
               timer: null
          }
     },
     methods: {
          transtionHandler() {
               this.timer = setInterval(() => {
                    let len = this.rollList.length - 1;
                    let obj = this.rollList[0];
                    this.rollList.splice(0, 1);
                    let id = setTimeout(() => {
                         this.rollList.splice(len, 0, obj);
                         clearTimeout(id);
                    }, 0);
               }, 3000);
          }
     },
     created() {

     },
     mounted() {
          this.transtionHandler();
     }
}
</script>

<style scoped>
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
.g-winner-list ul {
     padding: 0 0 0.3rem 0;
     height: 3.6rem;
     overflow: hidden;
}
.g-winner-list ul li {
     margin-bottom: 0.3rem;
     margin-top: 0.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     text-align: center;
}
.g-winner-list ul li .u-li-l .u-li-img {
     display: inline-block;
     width: 0.48rem;
     height: 0.48rem;
     border-radius: 0.24rem;
     overflow: hidden;
}
.g-winner-list ul li .u-li-l .u-li-tel {
     display: inline-block;
     margin-left: 0.2rem;
}
</style>
