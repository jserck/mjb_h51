<template>
     <section class="m-houseQueryOver m-template">
          <header class="displayFlex flexJustifybetween flexAlignItemsCenter">
               <section class="u-inp">
                    <el-input placeholder="请输入楼盘名称" v-model="houseName" clearable></el-input>
               </section>
               <section v-if="houseName!=''" class="u-sousuo" @click="get_data(houseName)">
                    <span>搜索</span>
               </section>
               <section v-else class="u-sousuo" style="color:#b9c0c8">
                    <span>搜索</span>
               </section>
          </header>
          <main>
               <section class="g-over-list" v-show="!isHide">
                    <ul>
                         <li
                              v-for="(item,index) in dataList"
                              :key="index"
                              @click="href_query(item.buildingId)"
                              class="displayFlex flexAlignItemsCenter"
                         >
                              <section
                                   class="u-img"
                                   :style="`background:url(${item.buidingPicUrl})`"
                                   v-if="item.buidingPicUrl"
                              ></section>
                              <section
                                   class="u-img"
                                   :style="`background:url(/static/housequery/errimg.png)`"
                                   v-else
                              ></section>
                              <section class="u-text">
                                   <h2 style=" margin-bottom: 0.1rem">{{item.buildingName}}</h2>
                                   <p v-if="item.count != 0">共有 {{item.count}} 类资质证书可查看</p>
                                   <p v-else>暂无资质证书可查看</p>
                              </section>
                         </li>
                    </ul>
               </section>
               <section class="no-over" v-show="isHide">
                    <section class="no-over-img">
                         <img
                              class="flexImg"
                              src="/static/housequery/pic_meiyousousuojieguo_n.png"
                              alt
                         />
                    </section>
                    <section class="no-over-text">
                         <h3>抱歉，没有找到相关楼盘</h3>
                         <p>换个关键字试试～</p>
                    </section>
               </section>
          </main>
     </section>
</template>
<script>
export default {
     data() {
          return {
               houseName: "",
               dataList: [],
               isHide: false
          };
     },
     created() {
          this.get_data(this.$route.query.buildingName);
     },
     methods: {
          get_data(name) {
               let url = "/buiding/getPropertyQualificatByName";
               let body = { buildingName: name };
               let options = {
                    urls: url,
                    methods: "post",
                    data: body,
                    des: true,
                    types: 3
               };
               this.$http(options)
                    .then(res => {
                         if (res.response.status === "0") {
                              this.dataList = res.response.data.list;
                              this.isHide = this.dataList.length == 0;
                         }
                         console.log(res);
                    })
                    .catch(err => { });
          },
          href_query(val) {
               this.$router.push({
                    path: "/houseQueryDetails",
                    query: {
                         propertyId: val
                    }
               });
          }
     }
};
</script>

<style scoped>
header {
     padding: 0.3rem;
}
.u-inp {
     position: relative;
     width: 6rem;
     height: 0.88rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
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
.u-sousuo {
     /* width: 0.56rem; */
     margin-right: 0.1rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #0080ff;
     line-height: 0.28rem;
}

.g-over-list ul li {
     padding: 0.2rem 0.3rem;
     border-bottom: 0.01rem solid #e7e7e7;
}
.g-over-list ul li .u-img {
     width: 1rem;
     height: 1rem;
     background-size: cover !important;
}
.g-over-list ul li .u-text {
     margin-left: 0.2rem;
}
.g-over-list ul li .u-text h2 {
     font-weight: normal;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     line-height: 0.28rem;
}
.g-over-list ul li .u-text p {
     margin-top: 0.2rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #8b949e;
     line-height: 0.24rem;
}
.no-over {
     margin-top: 0.75rem;
     text-align: center;
}
.no-over .no-over-img {
     margin: auto;
     width: 3rem;
}
.no-over-text h3 {
     margin-top: 0.3rem;
     font-weight: 400;
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #8b949e;
     letter-spacing: 2.93px;
     line-height: 0.32rem;
}
.no-over-text p {
     margin-top: 0.2rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #b9c0c8;
     letter-spacing: 2.57px;
     line-height: 0.28rem;
}
</style>
<style>
.m-houseQueryOver .el-input__inner {
     background: #f7f7f7;
     border: none;
     border-radius: 0.04rem;
     height: 0.88rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     line-height: 0;
}
.m-houseQueryOver .el-input--suffix .el-input__inner {
     padding-right: 0.62rem;
     padding-left: 0.68rem;
}
.m-houseQueryOver .el-input__suffix {
     right: 0.2rem;
     width: auto;
}
.m-houseQueryOver .el-input__icon {
     width: auto;
}
.m-houseQueryOver .el-icon-circle-close:before {
     /* color:#fff; */
     content: "";
     display: inline-block;
     vertical-align: middle;
     width: 0.32rem;
     height: 0.32rem;
     border-radius: 0.16rem;
     background: url("/static/housequery/me_icon_close.png") no-repeat;
     background-size: cover;
}
.m-houseQueryOver .el-input .el-input__clear {
     line-height: 0.88rem;
}
.m-houseQueryOver .el-input__suffix-inner {
     display: inline-block;
     height: 0.88rem;
     line-height: 0.88rem;
     vertical-align: middle;
}

.m-houseQueryOver input::-webkit-input-placeholder {
     /* placeholder颜色  */
     color: #b9c0c8;
     /* placeholder字体大小  */
     font-size: 0.28rem;
     line-height: 0.45rem;
}
</style>
