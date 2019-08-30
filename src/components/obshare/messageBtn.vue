<template>
     <div class="message-btn displayFlex flexJustifybetween">
          <div class="attention displayFlex flexColumn" @click="clickHandlers">
               <span class="attention_img">
                    <img class="flexImg" src="/static/obshare/icon_guanzhu@3x.png" alt="">
               </span>
               <span class="attention_num">{{collectionCount}}关注</span>
          </div>
          <div class="discounts-btn message-btn-com" @click="informationClickhandler">优惠咨询</div>
          <a class="phone-btn message-btn-com" @click="phoneClick($event)" :href="'tel:+' + ph_">电话资讯</a>
     </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
     props: {
          ph_: '',
          uid: "",
          collectionCount: 0
     },

     // computed: {
     //         ...mapState({
     //                 ph_: state => state.phone_
     //         }),
     // },
     methods: {
          phoneClick(e) {
               window.location = this.$url.appDown;
               // if (this.ph_) {
               //      return;
               // }
               this.stopDefault(e);
          },
          clickHandlers() {
               this.$emit('clickHandlers');
          },
          stopDefault(e) {
               if (e && e.preventDefault) {
                    e.preventDefault();
                    return;
               }
               e.returnValue = false;
          },

          informationClickhandler() {
               // this.$router.push({
               //      path: `/information/${this.uid}`,
               //      query: {
               //           path: this.$route.path
               //      }
               // });
               window.location = this.$url.appDown;
          }

     },
     created() {
          console.log(this.uid);
     }
}
</script>
<style scoped>
.message-btn {
      width: 7rem;
      position: fixed;
      bottom: 0;
      z-index: 999;
      background: #fff;
      padding: 0.2rem 0.3rem 0.2rem 0.2rem;
}
.message-btn-com {
      height: 0.8rem;
      color: #fff;
      text-align: center;
      line-height: 0.8rem;
      border-radius: 5px;
      font-size: 0.32rem;
}
.discounts-btn {
      width: 2.6rem;
      background: #68cda1;
      box-shadow: 2px 3px 11px 0px rgba(104, 205, 161, 0.5);
}
.phone-btn {
      width: 2.4rem;
      background: #0080ff;
      box-shadow: 2px 3px 11px 0px rgba(0, 128, 255, 0.5);
}
.attention {
      width: 1.61rem;
      text-align: center;
}
.attention_img {
      display: inline-block;
      margin: auto;
      width: 0.4rem;
      height: 0.4rem;
}
.attention_num {
      font-family: PingFangSC-Regular;
      font-size: 0.24rem;
      color: #212832;
      line-height: 0.24rem;
}
</style>

