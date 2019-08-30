<template>
     <section class="m-houseQueryDetails">
          <section class="g-houseQueryDetails-list">
               <section class="g-table-header displayFlex flexJustifybetween flexAlignItemsCenter">
                    <span>预售许可证</span>
                    <span>发证时间</span>
                    <span>绑定楼栋</span>
               </section>
               <section class="g-table" :style="(talbeList.length <=3)?'border-bottom:none':''">
                    <ul>
                         <li
                              v-for="(item1,index) in talbeList"
                              :key="index"
                              :class="index === 0 ?'firstLi-border':''"
                              class="displayFlex flexJustifybetween flexAlignItemsCenter"
                              v-if="index < num"
                              :style="(index==2&&num < tableNum)||(index ==talbeList.length-1)?'border-bottom:none':''"
                         >
                              <span>{{item1.permitName}}</span>
                              <span>{{item1.date}}</span>
                              <span>{{item1.bindBuilding}}</span>
                         </li>
                    </ul>
               </section>
               <section
                    class="g-slide"
                    v-if="talbeList.length >3"
                    :style="imgList.length==0?'border-bottom:0.1rem solid #f7f7f7':''"
               >
                    <section @click="slideHandler(0)">
                         <span class="g-slide-icon" v-if="num == tableNum">收起</span>
                    </section>
                    <section @click="slideHandler(1)">
                         <span class="g-slide-icon1" v-if="num < tableNum">展开</span>
                    </section>
               </section>
          </section>
          <section class="g-view-img-list">
               <section
                    class="g-view-img-list-li"
                    v-for="(item,index) in imgList"
                    :key="index"
                    :style="index==imgList.length-1 ?'padding-bottom:0.1rem':''"
               >
                    <ul>
                         <li
                              v-for="(item1,index) in item.otherPermitChildList"
                              :key="index"
                              @click="imgHandler(item1.imageUrl)"
                              v-if="index < item.num"
                              :style="((index==0&&(item.tableNum >1 && item.num < item.tableNum))||index==item.otherPermitChildList.length-1)?'border-bottom:none':''"
                         >
                              <h4>{{item.title}}</h4>
                              <section
                                   class="g-li-tit displayFlex flexJustifybetween flexAlignItemsCenter"
                              >
                                   <section class="g-li-tit-text">
                                        <p>{{item1.title}}</p>
                                        <span>{{item1.date}}</span>
                                   </section>
                                   <section class="g-li-tit-img" v-if="item1.imageUrl">
                                        <img :src="item1.imageUrl" alt>
                                   </section>
                              </section>
                         </li>
                    </ul>
                    <section v-if="item.tableNum >1" class="g-slide" style="background:#fff">
                         <section @click="slideHandler1(index,0)">
                              <span
                                   class="g-slide-icon"
                                   v-if="item.tableNum >1 && item.num == item.tableNum"
                              >收起</span>
                         </section>
                         <section @click="slideHandler1(index,1)">
                              <span
                                   class="g-slide-icon1"
                                   v-if="item.tableNum >1 && item.num < item.tableNum"
                              >展开</span>
                         </section>
                    </section>
               </section>
          </section>
          <el-dialog :visible.sync="dialogVisible" width="7.5rem" :show-close="false">
               <div class="dialogImages">
                    <img :src="diaImgs" alt>
               </div>
          </el-dialog>
     </section>
</template>
<script>
export default {
     data() {
          return {
               dialogVisible: false,
               diaImgs: '',
               num: 3,
               tableNum: 0,
               imgList: [
                    {

                    }
               ],
               talbeList: [

               ]
          }
     },
     created() {
          this.get_data();
     },
     methods: {
          imgHandler(src) {
               if (!src) return;
               this.diaImgs = src;
               this.dialogVisible = true;
          },
          get_data() {
               let url = '/buiding/buidingInfo1_5_3';
               let body = { propertyId: this.$route.query.propertyId };
               let options = {
                    urls: url,
                    methods: 'post',
                    data: body,
                    des: true,
                    types: 3
               };
               this.$http(options).then(res => {
                    if (res.response.status === '0') {
                         this.talbeList = res.response.data.permitForPresaleList;
                         this.tableNum = this.talbeList.length;
                         this.imgList = res.response.data.otherPermitList;
                         console.log(res);

                         for (let i = 0; i < this.imgList.length; i++) {
                              this.$set(this.imgList[i], 'num', 1);
                              this.$set(this.imgList[i], 'tableNum', this.imgList[i]['otherPermitChildList'].length);
                         }
                    }
               }).catch(err => {
                    console.log(err);
               });
          },
          slideHandler(type) {
               if (!type) {
                    this.num = 3;
               } else {
                    this.num = this.tableNum;
               }
          },
          slideHandler1(index, type) {
               if (!type) {
                    this.imgList[index].num = 1;
               } else {
                    this.$set(this.imgList[index], 'num', this.imgList[index].tableNum);
               }
          }
     }
}
</script>
<style scoped>
.m-houseQueryDetails {
     padding-bottom: 0.7rem;
}
.g-view-img-list {
     /* padding-bottom: 0.5rem; */
     background: #f7f7f7;
}
.g-view-img-list-li {
     padding-top: 0.1rem;
}
.dialogImages {
     width: 100%;
     background: #000;
}
.g-view-img-list ul {
     /* border-top: 1px solid #e7e7e7; */
     /* border-bottom: 1px solid #e7e7e7; */
     overflow: hidden;
     background: #fff;
}
.g-view-img-list ul li {
     margin: auto;
     width: 6.9rem;
     /* margin-top: 0.1rem; */
     /* margin-bottom: 0.1rem; */
     border-bottom: 0.01rem solid #e7e7e7;
     background: #fff;
     padding: 0.4rem 0;
}
.g-view-img-list ul li h4 {
     font-weight: 500;
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #212832;
}
.g-li-tit-text p {
     margin-top: 0.3rem;
     margin-bottom: 0.2rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #4d535d;
     line-height: 0.26rem;
}
.g-li-tit-text span {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #8b949e;
     line-height: 0.26rem;
}
.g-li-tit-img {
     width: 0.72rem;
     height: 0.72rem;
}
.g-li-tit-img img {
     width: 0.72rem;
     height: 0.72rem;
}
.g-slide {
     border-top: 0.01rem solid #e7e7e7;
     height: 0.6rem;
     text-align: center;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #0080ff;
     line-height: 0.6rem;
}
.g-slide-icon1:after {
     margin-left: 0.15rem;
     display: inline-block;
     content: "";
     width: 0.23rem;
     height: 0.22rem;
     background: url("/static/housequery/icon_zhankai.png") no-repeat;
     background-size: cover;
}
.g-slide-icon:after {
     margin-left: 0.1rem;
     display: inline-block;
     content: "";
     width: 0.23rem;
     height: 0.22rem;
     background: url("/static/housequery/icon_shouqi.png") no-repeat;
     background-size: cover;
}

.g-table-header {
     padding: 0.4rem 0.3rem 0.2rem 0.3rem;
}
.g-table-header span {
     width: 2.18rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #8b949e;
     line-height: 0.26rem;
     text-align: center;
}
.g-table {
     padding: 0 0.3rem;
     border-top: 0.01rem solid #e7e7e7;
     /* border-bottom: 0.01rem solid #e7e7e7; */
}
.firstLi-border {
     /* border-top: 1px solid #e7e7e7; */
}

.g-table ul li {
     padding: 0.2rem 0;
     border-bottom: 0.01rem solid #e7e7e7;
}
.g-table ul li span {
     width: 2.17rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #4d535d;
     line-height: 0.38rem;
     text-align: center;
}
</style>
<style>
.m-houseQueryDetails .el-dialog__body {
     padding: 0 !important;
}
.m-houseQueryDetails .el-dialog__header {
     padding: 0;
}
.m-houseQueryDetails .el-dialog__wrapper {
     background: #000;
}
.m-houseQueryDetails .el-input__prefix,
.el-input__suffix {
     color: #fff;
}
.m-houseQueryDetails .el-dialog {
     position: relative;
     /* height: 100%; */
     background: none;
     /* margin: 0 !important; */
     /* position: absolute; */
     /* top: 50%; */
     /* margin-top: 0.5rem; */
}
/* .m-houseQueryDetails .el-dialog__body {
     position: absolute;
     top: 50%;
     margin-top: -50%;
} */
</style>
