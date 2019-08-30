<template>
     <div class="consultDateText_type">
          <span
               v-for="(value,index) in this.data"
               :key="index"
               v-if="value ? true : false"
          >{{value}}</span>
     </div>
</template>
<script>
export default {
     props: {
          data: {
               type: Array,
               default: []
          }
     },
     data() {
          return {

          }
     }
}
</script>
<style scoped>
.consultDateText_type {
     padding: 0.1rem 0 0 0;
}
.consultDateText_type span {
     display: inline-block;
     height: 0.52rem;
     background: #F2F3F5;
     border: 1px solid #F2F3F5;
     border-radius: 0.04rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #808080;
     line-height: 0.52rem;
     padding-left: 0.2rem;
     padding-right: 0.2rem;
     margin-right: 0.2rem;
}
</style>


