<template>
     <section class="m-houseQuery">
          <header>
               <section class="g-banner">
                    <img src="/static/housequery/pic_xiangzhidao.png" alt />
               </section>
          </header>
          <main>
               <section class="u-title">
                    <h1>输入楼盘名称即可查询</h1>
               </section>
               <section class="u-inp">
                    <el-input placeholder="请输入楼盘名称" v-model="buildingName" clearable></el-input>
               </section>
               <section v-if="buildingName != ''" class="u-btn" @click="submit">
                    <span>立即查询</span>
               </section>
               <section v-else class="u-btn" style="background:#7FBFFF">
                    <span>立即查询</span>
               </section>
          </main>
     </section>
</template>
<script>
export default {
     data() {
          return {
               buildingName: ""
          };
     },
     methods: {
          submit() {
               this.$router.push({
                    path: "/houseQueryOver",
                    query: {
                         buildingName: this.buildingName
                    }
               });
          }
     }
};
</script>
<style scoped>
.m-houseQuery {
     margin: auto;
     width: 6.9rem;
     padding: 0.3rem;
     overflow: hidden;
}
.g-banner {
     width: 100%;
}
.u-title h1 {
     margin-top: 0.4rem;
     font-family: PingFangSC-Medium;
     font-size: 0.32rem;
     color: #212832;
     letter-spacing: 0;
     line-height: 0.32rem;
     font-weight: 500;
}
.u-inp {
     position: relative;
     margin-top: 0.3rem;
     height: 0.88rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #8b949e;
}
.u-inp:before {
     position: absolute;
     left: 0.2rem;
     top: 50%;
     margin-top: -0.14rem;
     display: inline-block;
     content: "";
     width: 0.28rem;
     height: 0.28rem;
     background: url("/static/housequery/icon_fangdajing.png") no-repeat;
     background-size: cover;
     z-index: 999;
}
.u-btn {
     margin-top: 0.7rem;
     width: 100%;
     height: 0.88rem;
     background: #0080ff;
     border-radius: 0.04rem;
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #ffffff;
     line-height: 0.88rem;
     text-align: center;
}
</style>

<style>
.m-houseQuery .el-input__inner {
     /* padding-top: 0.5rem; */
     background: #f7f7f7;
     border: none;
     border-radius: 0.04rem;
     height: 0.88rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     line-height: 0rem;
}
.m-houseQuery .el-input--suffix .el-input__inner {
     padding-right: 0.62rem;
     padding-left: 0.68rem;
}
.m-houseQuery .el-input .el-input__clear {
     /* line-height: 0.88rem; */
}

.m-houseQuery .el-input__suffix {
     right: 0.2rem;
     width: auto;
}
.m-houseQuery .el-input__icon {
     width: auto;
}
.m-houseQuery .el-icon-circle-close:before {
     content: "";
     display: inline-block;
     vertical-align: middle;
     width: 0.32rem;
     height: 0.32rem;
     border-radius: 0.16rem;
     background: url("/static/housequery/me_icon_close.png") no-repeat;
     background-size: cover;
}
.m-houseQuery input::-webkit-input-placeholder {
     color: #b9c0c8;
     font-size: 0.28rem;
     line-height: 0.45rem;
}
</style>
