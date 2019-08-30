<template>
     <div>
          <a class="obshareBtn" v-if="!isApp" :href="$url.appDown"></a>
     </div>
</template>
<script>
export default {
     data() {
          return {
               isApp: false
          }
     },
     methods: {
          isAppFn() {
               let app = /type=app/;
               let str = window.location.href;
               this.isApp = app.test(str);
          }
     },
     created() {
          this.isAppFn();
     }
}
</script>

<style scoped>
.obshareBtn {
     background: #fff;
     width: 100%;
     max-width: 7.5rem;
     height: 1.18rem;
     position: fixed;
     bottom: 0;
     background: url("/static/obshareBtn.png") no-repeat center center;
     background-size: cover;
     z-index: 999;
}
</style>
