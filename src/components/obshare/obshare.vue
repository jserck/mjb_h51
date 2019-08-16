<template>
     <div class="obShare" v-if="isShows">
          <TableBar
               :nums="nums"
               :obj="abShareData"
               :isUpdate="abShareData.property.isVRUpdate"
               v-if="tableBarClose"
          />
          <div style="position:relative">
               <slider
                    v-if="abShareData.property.bannerList[1]"
                    style="width:7.5rem;height:6.5rem"
                    :pages="pages"
                    :sliderinit="sliderinit"
               ></slider>
               <div
                    v-else
                    class="vr_back"
                    :style="'background-image:url('+abShareData.property.bannerList[0].bannerImageUrl+')'"
               ></div>
               <div
                    v-if="this.abShareData.property.isVR == 1"
                    class="vr_btn"
                    v-on:click.prevent="loadHandler('0','animated bounceIn')"
               >
                    <div>
                         <img
                              class="flexImg"
                              src="/static/obshare/icon_loupanxiangqingye_quanjinggongdi@2x.png"
                              alt
                         />
                    </div>
                    <span v-if="abShareData.property.isVRUpdate ==1" class="updateIcon">更新</span>
               </div>
          </div>
          <div id="anchor-0" v-scroll="scroolHand" class="titleDiv">
               <p>
                    <span>{{abShareData.property.propertyName}}</span>
                    <span>{{abShareData.property.collectionCount}}人已关注</span>
               </p>
               <p
                    class="ps otherName"
                    v-show="abShareData.property.alias"
               >别名：{{abShareData.property.alias}}</p>
               <p class="pace">{{abShareData.property.price || '暂无'}}</p>
               <div class="featureMenu displayFlex flexJustifystart flexWrap">
                    <div
                         class="featureMenu-li"
                         v-for="(item,index) in abShareData.property.iconList"
                         :key="index"
                    >
                         <span>{{item.name}}</span>
                    </div>
               </div>
               <p class="ps" v-on:click.prevent="loadHandler('0','animated bounceIn')">
                    <span>
                         地址信息：
                         <i>{{abShareData.property.propertyAddress}}</i>
                    </span>
                    <img
                         :src="this.$url.right_icon"
                         style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem"
                    />
               </p>
               <p
                    class="ps"
                    style="margin-top:0;margin-bottom:0.4rem"
                    v-on:click.prevent="loadHandler('0','animated bounceIn')"
               >
                    <span>
                         开盘时间：
                         <i>{{abShareData.property.dealDate}}</i>
                    </span>
                    <img
                         :src="this.$url.right_icon"
                         style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem"
                    />
               </p>
               <div class="moreHouse" v-on:click.prevent="loadHandler('0','animated bounceIn')">
                    <span>更多楼盘信息</span>
               </div>
               <div
                    class="wriningBtn displayFlex flexJustifyAround"
                    v-if="abShareData.showReminder == '1'"
               >
                    <div
                         class="wriningBtn-li displayFlex flexAlignItemsCenter"
                         @click="dialogVisible = true;diaType=true;"
                    >
                         <span>
                              <img src="/static/obshare/icon_bainjiatixing@3x.png" alt />
                         </span>
                         <span>变价提醒我</span>
                    </div>
                    <div
                         class="wriningBtn-li displayFlex flexAlignItemsCenter"
                         @click="dialogVisible = true;diaType=false"
                    >
                         <span>
                              <img src="/static/obshare/icon_kaipantixing@3x.png" alt />
                         </span>
                         <span>开盘提醒我</span>
                    </div>
               </div>
          </div>
          <!--业主圈-->
          <div class="g-worksProgramme g-montoring" v-if="abShareData.qualityMonitor.status == '1'">
               <p class="progress_title">业主圈</p>
               <div class="authorCircle displayFlex flexJustifybetween flexAlignItemsCenter">
                    <p class="hotChat">
                         <code>{{abShareData.chatRoomData.chatCount}}</code>
                         名业主正在热聊楼盘质量
                    </p>
                    <div
                         class="authorImg"
                         style="height:0.48rem;margin-right:-1.12rem;"
                         v-on:click.prevent="loadHandler('0','animated bounceIn')"
                    >
                         <span
                              v-for="(val,index) in abShareData.chatRoomData.avatarList"
                              :key="index"
                              :style="'background:url(' + val.avatarUrl + ');background-size:cover'"
                         ></span>
                    </div>
                    <div
                         style="width:0.12rem"
                         v-on:click.prevent="loadHandler('0','animated bounceIn')"
                    >
                         <img :src="this.$url.right_icon" />
                    </div>
               </div>
          </div>
          <Banner :src="abShareData.adData.adImageUrl" :href="abShareData.adData.adWebUrl" />
          <!--楼盘评分-->
          <div
               id="anchor-1"
               class="m-building-rating"
               v-if="abShareData.scoreData&&abShareData.scoreData.score"
          >
               <div class="g-light-seek-tit displayFlex flexJustifybetween" style="padding-left: 0">
                    <span>楼盘评分</span>
                    <span class="displayFlex flexJustifybetween flexAlignItemsCenter">
                         <!-- echartRouting -->
                         <i class="lookAll" @click="ratingHref">查看详情</i>
                         <i>
                              <img
                                   :src="this.$url.right_icon"
                                   style="float:right;width:0.12rem;height:0.22rem"
                              />
                         </i>
                    </span>
               </div>
               <div class="g-building-context displayFlex flexJustifybetween">
                    <span class="g-building-sum">{{abShareData.scoreData.score}}</span>
                    <div class="displayFlex flexColumn flexJustifybetween">
                         <span class="g-time">{{abShareData.scoreData.date}}</span>
                         <div class="g-rating displayFlex flexJustifybetween">
                              <span>
                                   <el-rate
                                        v-model="abShareData.scoreData.stars"
                                        disabled
                                        :colors="['#0080FF','#0080FF','#0080FF']"
                                   ></el-rate>
                              </span>
                              <span
                                   v-if="abShareData.scoreData.increase !=''&&abShareData.scoreData.increase ==0"
                              >
                                   比上次评分
                                   <i
                                        style="display:inline-block;width:0.24rem;height:0.24rem"
                                   >
                                        <img src="/static/pingfen/icon_chipingb.png" alt />
                                   </i>持平
                              </span>
                              <span
                                   v-else-if="abShareData.scoreData.increase !=''&&abShareData.scoreData.increase > 0"
                              >
                                   比上次评分
                                   <i
                                        style="display:inline-block;width:0.24rem;height:0.24rem"
                                   >
                                        <img src="/static/pingfen/icon_sahngsheng30.png" alt />
                                   </i>
                                   <i>{{Math.abs(abShareData.scoreData.increase)}}</i>分
                              </span>
                              <span
                                   v-else-if="abShareData.scoreData.increase !=''&&abShareData.scoreData.increase < 0"
                              >
                                   比上次评分
                                   <i
                                        style="display:inline-block;width:0.24rem;height:0.24rem"
                                   >
                                        <img src="/static/pingfen/icon_xiajiangb.png" alt />
                                   </i>
                                   <i>{{Math.abs(abShareData.scoreData.increase)}}</i>分
                              </span>
                         </div>
                         <div class="g-evaluate displayFlex flexJustifybetween">
                              <span>{{abShareData.scoreData.highestName}}</span>
                              <span>{{abShareData.scoreData.lowerName}}</span>
                         </div>
                    </div>
               </div>
          </div>
          <article v-if="abShareData.hawkEyeEvaluation.score">
               <section class="g-eyes" @click="loadHandler">
                    <p class="progress_title">鹰眼测评</p>
                    <section class="g-eyes-container">
                         <div class="g-textImg displayFlex flexJustifybetween">
                              <div class="u-text flexNum">
                                   <div class="u-text1">购房攻略</div>
                                   <div class="u-text2">
                                        鹰眼鉴房
                                        <mark>{{abShareData.hawkEyeEvaluation.score}}</mark>分
                                   </div>
                                   <span
                                        class="u-text3"
                                   >{{abShareData.hawkEyeEvaluation.readCount}}已读</span>
                              </div>
                              <div
                                   class="u-img"
                                   :style="`background:url(${abShareData.hawkEyeEvaluation.imageUrl});background-size:cover`"
                              ></div>
                         </div>
                         <div class="g-eyes-menus displayFlex flexJustifybetween">
                              <div class="g-menus-container displayFlex flexAlignItemsCenter">
                                   <div class="u-img u-img1 displayFlex flexColumn flexJustifyend">
                                        <img
                                             src="/static/obshare/pic_gongchengzhiliang_n@3x.png"
                                             alt
                                        />
                                   </div>
                                   <div class="u-text">
                                        <span class="span1">工程质量</span>
                                        <span class="span2">建筑工程解析</span>
                                   </div>
                              </div>
                              <div class="g-menus-container displayFlex flexAlignItemsCenter">
                                   <div class="u-img u-img2 displayFlex flexColumn flexJustifyend">
                                        <img src="/static/obshare/pic_shenghuopeitao_n@3x.png" alt />
                                   </div>
                                   <div class="u-text">
                                        <span class="span1">生活配套</span>
                                        <span class="span2">周边情况全掌握</span>
                                   </div>
                              </div>
                         </div>
                    </section>
               </section>
          </article>
          <div class="g-live-action" v-if="abShareData.buildingRealView">
               <p class="progress_title">楼盘实景</p>
               <ObLiveAction :buildingRealView="abShareData.buildingRealView"></ObLiveAction>
          </div>
          <div
               id="anchor-2"
               class="queryClass"
               v-if="abShareData.panoramaSite.panoramaList && abShareData.panoramaSite.panoramaList.length !=0"
          >
               <p class="progress_title">全景工地（{{abShareData.panoramaSite.totalCount}}）</p>
               <div class="query_cla">
                    <div class="sweiper_class">
                         <div
                              v-for="(item,index) in abShareData.panoramaSite.panoramaList"
                              :key="index"
                              @click="loadHandler('0','animated bounceIn')"
                         >
                              <div
                                   class="PanoramicLi"
                                   :style="`background:url(${item.imageUrl ? item.imageUrl : $url.error_img})`"
                              >
                                   <span class="PanoramicLiupdateIcon" v-if="item.isUpdate ==1">更新</span>
                                   <span class="PanoramicIcon">
                                        <img
                                             class="flexImg"
                                             src="/static/obshare/housingesta_icon_vr@3x.png"
                                             alt
                                        />
                                   </span>
                              </div>
                              <span class="PanoramicLiDate">{{item.vrDate}}</span>
                         </div>
                    </div>
               </div>
          </div>
          <div id="anchor-3" class="g-light-seek clearfix">
               <div class="g-light-seek-tit displayFlex flexJustifybetween" style="padding-left: 0">
                    <span>
                         开放工地
                         <i
                              v-if="abShareData.constructionSite.totalCount!=0"
                         >（{{abShareData.constructionSite.totalCount}}）</i>
                    </span>
                    <span
                         v-if="abShareData.constructionSite.totalCount!=0"
                         class="displayFlex flexJustifybetween flexAlignItemsCenter"
                    >
                         <i class="lookAll" @click="loadHandler('0','animated bounceIn')">查看全部</i>
                         <i>
                              <img
                                   :src="this.$url.right_icon"
                                   style="float:right;width:0.12rem;height:0.22rem"
                              />
                         </i>
                    </span>
               </div>
               <!--工程进度-->
               <div
                    style="position:relative"
                    class="g-worksProgramme g-montoring"
                    v-if="abShareData.constructionSite.totalCount!=0"
               >
                    <!-- <p class="progress_title">工程进度</p> -->
                    <Steps :stepsList="stepsList" />
                    <i
                         @click="loadHandler('0','animated bounceIn')"
                         style="position:absolute;top:0.44rem;right:0;display:inline-block;width:0.12rem;height:0.22rem"
                    >
                         <img :src="this.$url.right_icon" />
                    </i>
               </div>
               <div
                    class="g-light-seek-but clearfix"
                    v-if="abShareData.constructionSite.constructionList.length==0"
               >
                    <div
                         class="g-light-seek-but-img"
                         v-on:click.prevent="loadHandler('0','animated bounceIn')"
                    >
                         <img
                              style="width: 100%;"
                              src="/static/obshare/pic_fabuchenggong@3x.png"
                              alt
                         />
                    </div>
                    <div class="g-light-seek-but-hr">
                         <p>还没有用户上传过施工现场照片 快来分享一下吧！</p>
                         <span v-on:click.prevent="loadHandler('0','animated bounceIn')">我要分享</span>
                    </div>
               </div>
               <div v-else>
                    <div class="constructionList displayFlex flexJustifybetween flexWrap">
                         <div
                              class="constructionLi"
                              @click="loadHandler('0','animated bounceIn')"
                              v-for="(item,index) in abShareData.constructionSite.constructionList"
                              :key="index"
                              :style="`background-image:url(${item.imageUrl});background-size:cover`"
                         >
                              <div class="u-video-btn" v-if="item.isVideo == 1">
                                   <img
                                        style="width: 100%;"
                                        src="/static/obshare/icon_zanting_n@3x.png"
                                        alt
                                   />
                              </div>
                              <div class="u-photo-btn" v-if="item.isSingle == '2'">
                                   <img
                                        style="width: 100%;"
                                        src="/static/obshare/icon_zhaopiancopy@3x.png"
                                        alt
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </div>

          <div class="g-montoring" v-if="abShareData.qualityMonitor.status != ''">
               <p class="progress_title">质量监控</p>
               <div class="g-montoring-num2 clearfix">
                    <p>
                         <i>{{abShareData.qualityMonitor.propertyOwnerCount}}</i> 名业主正在监控工程进度
                    </p>
                    <div class="clearfix" @click="loadHandler('0','animated bounceIn')">
                         <span style="background:#0080FF;color:#fff">申请服务</span>
                    </div>
               </div>

               <div class="g-montoring-num2-list" v-if="abShareData.qualityMonitor.status != ''">
                    <ul class="displayFlex flexNoWrap">
                         <li
                              class="displayFlex flexAlignJustifyCenter flexAlignItemsCenter"
                              @click="loadHandler('0','animated bounceIn')"
                              v-for="(val,index) in abShareData.qualityMonitor.publishList"
                              :key="index"
                         >
                              <span class="houseNumber">{{val.publishName}}</span>
                              <div style="margin-left:0.3rem">
                                   <p>
                                        <code class="houseStage">{{val.stage}}</code>阶段
                                   </p>
                                   <p>
                                        已更新
                                        <code class="loadNumber">{{val.reportCount}}</code>期监控报告
                                   </p>
                              </div>
                         </li>
                    </ul>
               </div>

               <p
                    class="ps"
                    style="padding-bottom: 0.3rem"
                    v-on:click.prevent="loadHandler('0','animated bounceIn')"
               >
                    <span>申请质量监控服务，了解更详细的楼盘信息</span>
                    <img
                         :src="this.$url.right_icon"
                         style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem"
                    />
               </p>
          </div>
          <div class="g-mes" v-if="abShareData.propertyComment.commentList.length !=0">
               <p style="display: flex;justify-content: space-between" class="progress_title">
                    <span>楼盘资讯（{{abShareData.propertyComment.totalCount}}）</span>
                    <span class="look-all" @click="loadHandler('0','animated bounceIn')">查看全部></span>
               </p>
               <div
                    class="g-mes-li displayFlex flexJustifyAround"
                    @click="houseevalClick(item.webUrl)"
                    v-for="(item,index) in abShareData.propertyComment.commentList"
                    :key="index"
               >
                    <div class="textcontents">
                         <p>{{item.title}}</p>
                         <span>{{item.date}}</span>
                    </div>

                    <div
                         class="images"
                         :style="`background-image:url(${item.imageUrl});background-size:cover`"
                    >
                         <span class="houseiupdateIcon" v-if="item.isUpdate ==1">更新</span>
                    </div>
               </div>
          </div>
          <div class="queryClass" v-if="abShareData.propertyReport.reportList.length !=0">
               <p class="progress_title">专业报告（{{abShareData.propertyReport.reportList.length}}）</p>
               <div class="query_cla">
                    <div class="sweiper_class">
                         <div
                              class="swiper_icon"
                              v-for="(item,index) in abShareData.propertyReport.reportList"
                              :key="index"
                              @click="loadHandler('0','animated bounceIn')"
                         >
                              <div>
                                   <img style="width: 100%;" :src="item.reportImageUrl" alt />
                              </div>
                              <p>{{item.reportName}}</p>
                              <span>查看报告</span>
                         </div>
                    </div>
               </div>
          </div>
          <!-- 户型介绍 -->
          <div class="houseType-introduced" v-if="abShareData.apartmentType.typeList.length != 0">
               <div class="g-light-seek-tit displayFlex flexJustifybetween" style="padding-left: 0">
                    <span>户型介绍（{{abShareData.apartmentType.totalCount}}）</span>
                    <span class="displayFlex flexJustifybetween flexAlignItemsCenter">
                         <i class="lookAll" @click="loadHandler('0','animated bounceIn')">查看全部</i>
                         <i>
                              <img
                                   :src="this.$url.right_icon"
                                   style="float:right;width:0.12rem;height:0.22rem"
                              />
                         </i>
                    </span>
               </div>
               <div>
                    <div class="houseType-introduced-list">
                         <ul class="displayFlex flexNoWrap">
                              <li
                                   @click="housetypeClickHandler(val)"
                                   v-for="(val,index) in abShareData.apartmentType.typeList"
                                   :key="index"
                              >
                                   <div
                                        class="houseType-introduced-list-img"
                                        :style="`background-image:url(${val.imageUrl});position:relotive`"
                                   >
                                        <span
                                             class="houseType-introduced-list-img-gif-div"
                                             v-if="val.is3D =='1'"
                                        >
                                             <span class="houseType-introduced-list-img-gif">
                                                  <Sprite />
                                             </span>
                                        </span>
                                   </div>
                                   <p class="housetype">{{val.title}}</p>
                                   <p class="size">{{val.subtitle}}</p>
                                   <p class="pice">{{val.price}}</p>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
          <div class="housePice" v-if="abShareData.priceTrends.priceList.length != 0">
               <p class="progress_title">楼盘价格走势</p>
               <Eachart :data="abShareData.priceTrends.priceList" />
               <div class="g-echarts-tit displayFlex flexAlignJustifyCenter">
                    <div class="g-echarts-tit-1 displayFlex flexAlignItemsCenter">
                         <span class="u-echarts-icon-1"></span>
                         <span>本楼盘房价</span>
                    </div>
                    <div class="g-echarts-tit-2 displayFlex flexAlignItemsCenter">
                         <span class="u-echarts-icon-2"></span>
                         <span>{{abShareData.priceTrends.businessArea}}</span>
                    </div>
               </div>
          </div>
          <div
               class="g-probleam margin-con"
               v-if="abShareData.propertyComment.commentList.length !=0"
          >
               <p style="display: flex;justify-content: space-between" class="progress_title">
                    <!-- <span>鹰眼问答（{{abShareData.hawkEyeFQA.totalCount}}）</span> -->
                    <span class="look-all" @click="loadHandler('0','animated bounceIn')">查看全部></span>
               </p>
               <div class="g-probleam-main" @click="loadHandler('0','animated bounceIn')">
                    <!-- <div
                         v-show="false"
                         class="g-li displayFlex flexJustifybetween"
                         v-for="(item,index) in abShareData.hawkEyeFQA.fqaList.slice(0,2)"
                         :key="index"
                    >
                         <div class="g-p">{{item.question}}</div>
                         <div class="g-p-num">{{item.answerCount}}</div>
                    </div>-->
                    <div class="g-no-li">
                         <div class="g-img">
                              <img src="/static/obshare/pic_240px_meiyouloupan_n@3x.png" alt />
                         </div>
                         <p>此处空荡荡，试着去提问</p>
                    </div>
                    <div class="g-btn">立即提问</div>
               </div>
          </div>
          <div class="g-dynamic" v-if="abShareData.propertyMotion.motionList.length != 0">
               <p style="display: flex;justify-content: space-between" class="progress_title">
                    <span>楼盘动态（{{abShareData.propertyMotion.totalCount}}）</span>
                    <span class="look-all" @click="loadHandler('0','animated bounceIn')">查看全部></span>
               </p>
               <div class="g-dynamic-lis">
                    <div
                         :class="[li]"
                         v-for="(val,index) in abShareData.propertyMotion.motionList"
                         :key="index"
                    >
                         <p>
                              <i></i>
                              {{val.date}}
                              <span>{{val.tag || "暂无"}}</span>
                         </p>
                         <p>
                              <i></i>
                              {{val.title}}
                         </p>
                         <p :class="val.is_over_class" ref="esplit">
                              <i></i>
                              {{val.content}}
                         </p>
                         <div class="esplit_font">
                              <span @click="esplitHandler(val,index)">{{val.is_over_text}}</span>
                         </div>
                    </div>
               </div>
          </div>
          <DownBtn />
          <!-- <MessageBtn :ph_=abShareData.phoneNumber
               :uid="$route.params.id"
               :collectionCount="abShareData.property.collectionCount"
               v-on:clickHandlers="loadHandler('0','animated bounceIn')"
          v-if="abShareData.showReminder == '1'" />-->
          <el-dialog :visible.sync="dialogVisible" :show-close="false">
               <div class="dia_body" v-if="!diaType">
                    <h1>开盘提醒</h1>
                    <p>订阅开盘提醒，不再错失好房源！</p>
                    <div class="inp_">
                         <el-input type="tel" placeholder="请填写手机号" v-model="phone_" clearable></el-input>
                    </div>
                    <div class="btn_ displayFlex dialog-footer">
                         <div class="close_" @click="closeHandler('0',1)">取消</div>
                         <div class="sure_" @click="closeHandler('1',1)">确定</div>
                    </div>
               </div>
               <div class="dia_body" v-else>
                    <h1>变价提醒</h1>
                    <p>订阅变价提醒，不再错过降价！</p>
                    <div class="inp_">
                         <el-input type="tel" placeholder="请填写手机号" v-model="phone_" clearable></el-input>
                    </div>
                    <div class="btn_ displayFlex">
                         <div class="close_" @click="closeHandler('0',0)">取消</div>
                         <div class="sure_" @click="closeHandler('1',0)">确定</div>
                    </div>
               </div>
          </el-dialog>
     </div>
</template>
<script>
import slider from "vue-concise-slider"; // 引入slider组件
import scroll from "../../common/js/scroll.js";
import TableBar from "../common/tableBar";
import Banner from "../common/banner";
import { mapState, mapMutations } from "vuex";
import Obshare from "../../common/js/obshare";
import Steps from "../common/steps";
import Eachart from "./echarts/echarts";
import DownBtn from "../common/downBtn";
import Sprite from "../common/sprite"
import ObLiveAction from "./ob-liveAction"
// import MessageBtn from './messageBtn'

//  import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
     components: {
          slider,
          Steps,
          Banner,
          Eachart,
          DownBtn,
          // MessageBtn,
          TableBar,
          Sprite,
          ObLiveAction,
     },
     data() {
          return {
               isShows: false,
               dialogVisible: false,
               diaType: false,
               tableBarClose: false,
               phone_: "",
               nums: 0,
               de_use_img: "/static/comment/touxiang_mig@2x.png",
               li: "g-dynamic-li",
               footImg: 'http://app1.homehawkeye.com/pic_share@3x.png',
               // vr_arr: [],
               img: [],
               rating: 1,
               stepsList: [
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "施工准备"
                    },
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "地基阶段"
                    },
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "工程主体"
                    },
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "工程装饰"
                    },
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "竣工交房"
                    }
               ],
               ampCenter: [],
               abShareData: {
                    property: {
                         propertyName: "",
                         vrData: {}
                    },
                    qulity: {
                         gradeList: [],
                         buidProgress: "",
                         rankList: []
                    },
                    houseType: {},
                    peoperty: {}
               },
               pages: [],
               //滑动配置[obj]
               sliderinit: {
                    currentPage: 0, //当前页码
                    thresholdDistance: 100, //滑动判定距离
                    thresholdTime: 1000, //滑动判定时间
                    autoplay: 3000, //自动滚动[ms]
                    loop: true, //循环滚动
                    infinite: 1, //无限滚动前后遍历数
                    slidesToScroll: 1 //每次滑动项数
               }
          };
     },
     computed: {
          ...mapState({
               ph_: state => state.phone_
          })
     },
     beforeDestroy() {
          this.removeHander(window, "scroll", this.scroolHand);
     },
     methods: {
          ...mapMutations({
               set_hint: "set_hint",
               set_phone_: "set_phone_"
          }),

          removeHander(el, type, callback) {
               if (el.removeEventListener) {
                    el.removeEventListener(type, callback, false);
               } else if (el.detachEvent) {
                    el.detachEvent("on" + type, callback);
               } else {
                    el["on" + type] = null;
               }
          },
          ratingHref() {
               this.$router.push({
                    path: `/echartRouting/${this.$route.params.id}`
               });
          },
          scroolHand() {
               let _ss = document.body;
               let scr_top =
                    parseInt(document.body.scrollTop) ||
                    parseInt(document.documentElement.scrollTop);
               let inner_height = parseInt(window.innerHeight);
               let cl_height = parseInt(_ss.clientHeight);
               let tar = document.getElementById("anchor-0");
               let tar1 = document.getElementById("anchor-1");
               let tar2 = document.getElementById("anchor-2");
               let tar3 = document.getElementById("anchor-3");
               let tarbar = $(".tableBar").height() + 5;
               let _bottomFaVal = _ss.scrollHeight - _ss.offsetHeight;
               let tarSp = tar ? tar.offsetTop - tarbar : "";
               let tarSp1 = tar1 ? tar1.offsetTop - tarbar : "";
               let tarSp2 = tar2 ? tar2.offsetTop - tarbar : "";
               let tarSp3 = tar3 ? tar3.offsetTop - tarbar : "";

               if (tarSp && scr_top >= tarSp) {
                    this.tableBarClose = true;
                    this.nums = 0;
               } else {
                    this.tableBarClose = false;
               }
               if (tarSp1 && scr_top >= tarSp1 && this.nums != 1) {
                    this.nums = 1;
               }
               if (tarSp2 && scr_top >= tarSp2 && this.nums != 2) {
                    this.nums = 2;
               }
               if (tarSp3 && scr_top >= tarSp3 && this.nums != 3) {
                    this.nums = 3;
               }
          },
          closeHandler(done, type) {
               if (done === "1") {
                    if (!Obshare.checkMobile(this.phone_)) {
                         this.set_hint("请输入正确的手机号");
                         return;
                    }
                    let url = "buiding/remindMe";
                    let id = this.$route.params.id;
                    let body = {
                         propertyId: id,
                         typeId: type,
                         userPhone: this.phone_
                    };
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
                                   this.set_phone_(this.phone_);
                                   this.dialogVisible = false;
                                   this.set_hint("已成功预约提醒");
                              } else {
                                   this.set_hint("预约失败请重试");
                              }
                         })
                         .catch(err => {
                              this.set_hint("网络错误");
                         });
                    return;
               }
               this.dialogVisible = false;
          },

          housetypeClickHandler(val) {
               let platform = this.$route.params.platform || 3;
               this.$router.push({
                    path: `/housetype/${this.$route.params.id}/${
                         val.apartmentId
                         }/${platform}`
               });
          },

          houseevalClick(url) {
               let hash_ = this.urlSubstring(url);
               let type = false;
               let app = /type=app/;
               let str = window.location.href;
               type = app.test(str);
               if (type) {
                    this.$router.push({
                         path: `/houseeval/${hash_}`,
                         query: {
                              type
                         }
                    });
               } else {
                    this.$router.push({
                         path: `/houseeval/${hash_}`
                    });
               }
          },

          urlSubstring(url) {
               let id = url.slice(url.indexOf("houseeval") + 9);
               let num = id.split("/")[id.split("/").length - 1];
               let ids = id.substring(1, id.length);
               let sun = ids.indexOf("?");
               if (sun) {
                    return ids.split("?")[0];
               }
               return ids;
          },

          loadHandler(num, className, type) {
               // if (type === "load") {
               window.location = this.$url.appDown;
               // return;
               // }
               // if (Obshare.locaGet("regis") === false) {
               //      this.$router.push({
               //           path: "/register",
               //           query: {
               //                userId: this.$route.query.userId ? this.$route.query.userId : "",
               //                path: this.$router.currentRoute.path
               //           }
               //      });
               // } else {
               //      window.location = this.$url.appDown;
               // }
          },
          initph_() {
               if (this.ph_) {
                    this.phone_ = this.ph_;
               }
          },
          is_over_flow(arrs) {
               let rem = document.documentElement.style.fontSize.split("px")[0];
               let arr = this.$refs.esplit;
               let len = arr.length;
               for (let i = 0; i < len; i++) {
                    let num = arr[i].offsetHeight / rem;
                    if (num > 0.78) {
                         this.$set(arrs[i], "is_over", true);
                         this.$set(arrs[i], "is_over_text", "展开");
                         this.$set(arrs[i], "is_over_class", "text_overflow");
                    } else {
                         this.$set(arrs[i], "is_over", false);
                         this.$set(arrs[i], "is_over_text", "");
                         this.$set(
                              arrs[i],
                              "is_over_class",
                              "no_text_overflow"
                         );
                    }
               }
          },
          esplitHandler(val, i) {
               let arrs = this.abShareData.propertyMotion.motionList;
               if (val.is_over_text == "展开") {
                    this.$set(arrs[i], "is_over_text", "收起");
               } else {
                    this.$set(arrs[i], "is_over_text", "展开");
               }
               if (val.is_over_class == "text_overflow") {
                    this.$set(arrs[i], "is_over_class", "no_text_overflow");
               } else {
                    this.$set(arrs[i], "is_over_class", "text_overflow");
               }
          },
          get_http() {
               let this_ = this;
               let buiding = "buiding/buidingSurver1_6_1";
               let id = this.$route.params.id;
               let op1_H = "";
               let op2_H = "";
               let url = buiding;
               let platform = this.$route.params.platform || 3;
               let body = {
                    propertyId: id
               };

               let options = {
                    urls: url,
                    methods: "post",
                    data: body,
                    des: true,
                    // responseType: '',
                    types: 3,
                    platform
               };

               this.$http(options)
                    .then(res => {
                         this_.abShareData = res.response.data;
                         console.log(this_.abShareData);
                         // // let m = this_.abShareData.contribution.contributionWaterfallList;
                         // // console.log(m);
                         // //配置轮播图数据

                         try {
                              this_.abShareData.scoreData.stars = this_
                                   .abShareData.scoreData.stars
                                   ? this_.abShareData.scoreData.stars * 1
                                   : 0;
                         } catch (error) { }

                         if (this_.abShareData.property.bannerList) {
                              let len =
                                   this_.abShareData.property.bannerList.length;
                              for (let b = 0; b < len; b++) {
                                   let obj = new Object({
                                        style: {
                                             background: ""
                                        }
                                   });
                                   obj.style.background =
                                        "url(" +
                                        this_.abShareData.property.bannerList[b]
                                             .bannerImageUrl +
                                        ")";
                                   this_.pages.push(obj);
                                   continue;
                              }
                         }
                         this_.isShows = true;
                         this.$nextTick(() => {
                              this.is_over_flow(
                                   this_.abShareData.propertyMotion.motionList
                              );
                         });
                    })
                    .catch(err => { });
          }

          // 跳转全景      vr_href_all(){        let id = this.$route.params.id;
          // this.$router.push({          path: '/ifrem/' + id,          query: {
          //   url: this.vr_arr,            index: '0'          }        });      }, 跳转全景
          //     vr_list(index, val){        let id = this.$route.params.id;
          // this.$router.push({          path: '/ifrem/' + id,          query: {
          //   url: this.vr_arr,            index          }        });      },
     },
     created() {
          this.initph_();
          this.get_http();
          //      window.localStorage.is = true; //      this.active_icon_num =
          // this.apap_icon_num;
     }
};
</script>

<style scoped>
.obShare {
     width: 7.5rem;
     background: #ebebeb;
     /* padding-bottom: 1rem; */
     margin: auto;
     position: relative;
}

.vr_back {
     width: 7.5rem;
     height: 6.5rem;
     background-size: cover;
}

.vr {
     width: 7.5rem;
     height: 6.5rem;
     position: absolute;
     top: 0;
     z-index: 1;
}

.vr_btn {
     position: absolute;
     bottom: 0.3rem;
     padding: 0 0.1rem 0 0.2rem;
     right: 0;
     width: 1.7rem;
     height: 0.72rem;
     z-index: 99;
}

/* .vr_btn div {
      margin: auto;
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
}

.vr_btn p {
      margin: auto;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
} */

/* .vr_list {
      width: 7.5rem;
      height: 0.75rem;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      bottom: 0;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
} */

.vr_overflow {
     white-space: nowrap;
     height: 0.75rem;
}

/* .vr_icon {
      display: inline-block;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 0.2rem;
      color: #fff;
      line-height: 0.24rem;
      margin-top: 0.14rem;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
}

.vr_icon span {
      width: 0.24rem;
      height: 0.24rem;
      background-size: cover;
      display: inline-block;
} */

.updateIcon {
     display: inline-block;
     position: absolute;
     top: 0;
     right: 0.2rem;
     margin: auto;
     width: 0.6rem;
     height: 0.28rem;
     background: #f56364;
     border-radius: 0.28rem;
     font-family: PingFangSC-Regular;
     font-size: 0.2rem;
     color: #ffffff;
     line-height: 0.28rem;
     text-align: center;
}

.titleDiv {
     width: 7.5rem;
     background: #ffffff;
     border-radius: 2px;
     position: relative;
     padding-bottom: 0.2rem;
     margin-bottom: 0.2rem;
}

.titleDiv p:nth-child(1) {
     display: flex;
     justify-content: left;
     line-height: 0.48rem;
     margin-bottom: 0.2rem;
     padding-top: 0.4rem;
}

.titleDiv p:nth-child(1) span:nth-child(1) {
     margin-left: 0.4rem;
     font-family: PingFangSC-Medium;
     font-size: 0.4rem;
     color: #42464d;
     line-height: 0.48rem;
     display: inline-block;
}

.titleDiv p:nth-child(1) span:nth-child(2) {
     margin: auto;
     margin-right: 0.3rem;
     line-height: 0.24rem;
     font-family: "PingFangSC-Regular";
     font-size: 0.24rem;
     color: #0080ff;
     text-align: center;
     display: inline-block;
}

.titleDiv p:nth-child(2) span {
     font-family: PingFangSC-Medium;
     font-size: 0.32rem;
     color: #ff6e3a;
     line-height: 0.32rem;
}

.titleDiv p:nth-child(2) span:nth-child(1) {
     margin-left: 0.4rem;
}

.titleDiv p:nth-child(2) span:nth-child(2) {
     margin-left: 0.1rem;
}

.titleDiv p:nth-child(2) span:nth-child(3) {
     margin-left: 0.1rem;
}

.titleDiv p:nth-child(3) {
     margin: 0.3rem 0;
     padding-left: 0.4rem;
}

.featureMenu {
     padding-left: 0.4rem;
     margin: 0 auto 0.3rem;
     justify-content: flex-start;
}

.featureMenu-li {
     margin-right: 0.2rem;
     padding: 0 0.08rem;
     background: #f3f4f5;
     height: 0.32rem;
     text-align: center;
}

.featureMenu-li span {
     display: inline-block;
     color: #8b949e;
     font-size: 0.2rem;
     text-align: center;
     line-height: 0.32rem;
}

.moreHouse {
     width: 6.9rem;
     padding: 0.1rem 0;
     margin: 0.2rem auto;
     background: #f7f7f7;
     border-radius: 0.004rem;
     font-family: PingFangSC-Regular;
     color: #0080ff;
     font-size: 0.28rem;
     line-height: 0.4rem;
     text-align: center;
}

.wriningBtn {
     margin-top: 0.4rem;
     font-family: PingFangSC-Medium;
     color: #0080ff;
     letter-spacing: 2.1;
     font-size: 0.28rem;
     line-height: 0.28rem;
}

.wriningBtn img {
     width: 100%;
}

.wriningBtn span:nth-child(1) {
     display: inline-block;
     width: 0.4rem;
}

.ps {
     padding-left: 0.4rem;
     padding-right: 0.3rem;
     margin: 0.3rem auto 0.2rem;
}

.otherName {
     font-family: PingFangSC-Regular;
     color: #212832;
     font-size: 0.24rem;
     line-height: 0.24rem;
}

.pace {
     font-family: PingFangSC-Medium;
     color: #dd6b6b;
     font-size: 0.3rem;
     line-height: 0.2rem;
}

.titleDiv p:nth-child(3) span {
     display: inline-block;
     background: #ffffff;
     border: 2px solid #63b1ff;
     font-family: ".PingFangSC-Semibold";
     font-size: 0.2rem;
     color: #63b1ff;
     line-height: 0.4rem;
     width: 1.12rem;
     height: 0.4rem;
     margin-right: 0.1rem;
     text-align: center;
}

.ps img {
     width: 0.32rem;
     height: 0.32rem;
}

.ps span {
     display: inline-block;
     width: 5.7rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #42464d;
     line-height: 0.28rem;
}

.ps span i {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #0080ff;
     line-height: 0.24rem;
}

.houseType-introduced {
     padding: 0 0.3rem;
     background: #fff;
}

.query_cla {
     overflow-x: scroll;
     -webkit-overflow-scrolling: touch;
     position: relative;
}

.queryClass {
     margin-top: 0.2rem;
     width: 7.5rem;
     background: #ffffff;
}

.query_cla::-webkit-scrollbar {
     display: none;
}

.sweiper_class {
     background: #ffffff;
     border-radius: 0.08rem;
     display: flex;
     display: -webkit-box;
     justify-content: center;
     /*position: absolute;*/
     padding-right: 0.15rem;
}
.PanoramicLi {
     position: relative;
     margin-left: 0.3rem;
     width: 4.16rem;
     height: 2.6rem;
     background-repeat: no-repeat !important;
     background-size: cover !important;
}
.PanoramicLiDate {
     display: inline-block;
     margin: 0.24rem 0 0.4rem 0.3rem;
}
.PanoramicLiupdateIcon {
     display: inline-block;
     position: absolute;
     top: 0.3rem;
     right: 0;
     width: 0.54rem;
     height: 0.3rem;
     color: #fff !important;
     text-align: center;
     line-height: 0.3rem !important;
     font-family: PingFangSC-Regular !important;
     font-size: 0.2rem !important;
     background: #f56364;
}
.houseiupdateIcon {
     display: inline-block;
     margin: 0 !important;
     position: absolute;
     top: 0.1rem;
     right: 0;
     width: 0.52rem;
     height: 0.28rem;
     color: #fff !important;
     text-align: center;
     line-height: 0.28rem !important;
     font-family: PingFangSC-Regular !important;
     font-size: 0.2rem !important;
     background: #f56364;
}
.PanoramicIcon {
     display: inline-block;
     position: absolute;
     left: 50%;
     top: 50%;
     width: 0.6rem;
     height: 0.6rem;
     margin-left: -0.3rem;
     margin-top: -0.3rem;
}
.swiper_icon {
     width: 3.3rem;
     /*height: 1.55rem;*/
     border-radius: 0.05rem;
     margin: 0.2rem 0 0.4rem 0.15rem;
     position: relative;
}

.swiper_icon p {
     position: absolute;
     top: 0.5rem;
     width: 100%;
     font-family: PingFangSC-Regular, "微软雅黑";
     font-size: 0.28rem;
     color: #ffffff;
     line-height: 0.28rem;
     text-align: center;
}

.swiper_icon span {
     position: absolute;
     top: 1rem;
     left: 50%;
     margin-left: -0.6rem;
     width: 1.2rem;
     height: 0.3rem;
     font-family: PingFangSC-Regular, "微软雅黑";
     font-size: 0.2rem;
     color: #ffffff;
     line-height: 0.3rem;
     text-align: center;
     border: 0.01rem solid rgba(255, 255, 255, 0.66);
     border-radius: 1rem;
     display: block;
}

.progress_title {
     padding: 0.4rem 0;
     width: 6.9rem;
     padding-left: 0.3rem;
     font-family: PingFangSC-Medium, "微软雅黑";
     font-size: 0.4rem;
     color: #212832;
     line-height: 0.4rem;
     font-weight: 600;
}

.footDiv {
     width: 7.5rem;
     height: 3.68rem;
     margin: 0.2rem auto;
     background: #ffffff;
     border-radius: 2px;
     text-align: center;
}

.footDiv img {
     width: 6.3rem;
     height: 2.4rem;
     margin: 0.4rem auto 0;
}

.footDiv span {
     display: inline-block;
     width: 4.08rem;
     height: 0.28rem;
     font-family: MicrosoftYaHei;
     font-size: 0.28rem;
     color: #42464d;
     line-height: 0.28rem;
     margin: 0.2rem auto;
}

.buttonClass {
     width: 7.1rem;
     text-align: center;
     margin: 0.4rem auto;
}

.buttonClass button {
     width: 6.3rem;
     height: 0.86rem;
     background: #575757;
     border-radius: 2rem;
     font-family: MicrosoftYaHei;
     font-size: 0.28rem;
     color: #ffffff;
}

.g-worksProgramme {
}

.g-montoring {
     margin-bottom: 0.2rem;
     background: #fff;
}

.g-montoring-num {
     padding-left: 0.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     line-height: 0.28rem;
}

.g-montoring-num2 {
     padding-left: 0.3rem;
     padding-right: 0.3rem;
}

.g-montoring-num2 p {
     float: left;
     font-family: PingFangSC-Medium;
     font-size: 0.28rem;
     line-height: 0.64rem;
     text-align: left;
}

.g-montoring-num2 p {
     color: #42464d;
}

.g-montoring-num2 i {
     color: #fe751b;
     text-align: center;
     font-family: PingFangSC-Medium;
     font-size: 0.28rem;
}

.g-montoring-num2 span {
     float: right;
     display: block;
     width: 2rem;
     height: 0.64rem;
     text-align: center;
     line-height: 0.62rem;
     border: 2px solid #0080ff;
     border-radius: 4px;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #0080ff;
     box-sizing: border-box;
}

.g-montoring-num2-list,
.houseType-introduced-list {
     width: 100%;
     overflow-x: scroll;
     -webkit-overflow-scrolling: touch;
     position: relative;
     margin-top: 0.2rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #212832;
     text-align: center;
     line-height: 0.24rem;
}
.houseType-introduced-list-img-gif,
.houseType-introduced-list-img-gif-div {
     display: inline-block;
     position: absolute;
     right: 0;
     left: 0;
     top: 0;
     bottom: 0;
     margin: auto;
     width: 0.44rem;
     height: 0.44rem;
}
.houseType-introduced-list-img-gif-div {
     display: inline-block;
     width: 0.6rem;
     height: 0.6rem;
     background: rgba(0, 0, 0, 0.2);
     border-radius: 100%;
}
.g-montoring-num2-list p {
     text-align: left;
}

.g-montoring-num2-list p:nth-child(2) {
     margin-top: 0.2rem;
}

.houseNumber {
     font-size: 0.24rem;
     color: #212832;
     text-align: center;
     line-height: 0.28rem;
     font-weight: 500;
}

.houseStage {
     color: #0080ff;
}

.loadNumber {
     color: #fe751b;
}

.g-montoring-num2-list ul {
     padding-left: 0.3rem;
     padding-right: 0.3rem;
}

.g-montoring-num2-list ul li {
     margin: 0.3rem 0.1rem;
     width: 4.16rem;
     height: 1.28rem;
     box-flex: auto 0 0;
     -webkit-box-flex: auto 0 0;
     -moz-box-flex: auto 0 0;
     flex: auto 0 0;
     -webkit-flex: auto 0 0;
     background: #ffffff;
     box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.35);
     border-radius: 4px;
}

.houseType-introduced {
     margin-bottom: 0.2rem;
}

.houseType-introduced-list {
     padding-bottom: 0.3rem;
}

.houseType-introduced-list ul li {
     margin-right: 0.4rem;
     width: 2.5rem;
     text-align: left;
}

.houseType-introduced-list ul li div {
     position: relative;
     width: 2.5rem;
     height: 1.82rem;
     background-size: cover;
}

.houseType-introduced-list ul li .housetype {
     margin-top: 0.15rem;
     font-family: PingFangSC-Medium;
     color: #212832;
     font-size: 0.28rem;
     line-height: 0.28rem;
}

.houseType-introduced-list ul li .size {
     margin-top: 0.15rem;
     font-family: PingFangSC-Regular;
     color: #8b949e;
     font-size: 0.22rem;
     line-height: 0.22rem;
}

.houseType-introduced-list ul li .pice {
     margin-top: 0.15rem;
     font-family: PingFangSC-Medium;
     color: #f56364;
     font-size: 0.24rem;
     line-height: 0.24rem;
}

.g-montoring-yes {
     display: flex;
     margin: 0.3rem auto;
     width: 6.9rem;
     height: 1.46rem;
     background: #ffffff;
     box-shadow: 0 0 15px 0 rgba(169, 183, 197, 0.35);
}

.g-montoring-span {
     width: 100%;
     line-height: 0.6rem;
     display: flex;
     justify-content: space-around;
}

.g-montoring-span div {
     width: 2.6rem;
     display: flex;
     justify-content: center;
}

.g-montoring-span span {
     margin: auto;
}

.g-mes {
     margin-top: 0.2rem;
     background: #fff;
}

.g-mes-li {
     position: relative;
     padding: 0.3rem;
}

.g-mes-li p {
     width: 4.2rem;
     font-family: PingFangSC-Regular;
     color: #212832;
     letter-spacing: 1.3;
     font-size: 0.32rem;
     line-height: 0.44rem;
}

.g-mes-li span {
     display: inline-block;
     margin-top: 0.3rem;
     font-family: PingFangSC-Regular;
     color: #8b949e;
     letter-spacing: 1.3;
     font-size: 0.22rem;
     line-height: 0.2rem;
}

.g-mes-li .images {
     position: relative;
     width: 2.4rem;
     height: 1.8rem;
}

.look-all {
     margin: auto 0 auto auto;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #8b949e;
     line-height: 0.28rem;
}

.g-fot {
     padding: 0.2rem 0.3rem 0.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.2rem;
     color: #b9c0c8;
     letter-spacing: 0.9px;
     line-height: 0.2rem;
}

/* .g-fot p {
      line-height: 0.3rem;
}

.g-fot i {
      display: inline-block;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 0.2rem;
      background: #b9c0c8;
      color: #fff;
      text-align: center;
      line-height: 0.2rem;
      margin-right: 0.1rem;
}

.g-fot span {
      font-family: PingFangSC-Regular;
      font-size: 0.2rem;
      color: #0080ff;
      letter-spacing: 0.9px;
      line-height: 0.2rem;
}

.g-fot-btn {
      margin-bottom: 0.4rem;
      width: 7.5rem;
      height: 0.88rem;
      background: #0080ff;
      text-align: center;
      line-height: 0.88rem;
      font-family: PingFangSC-Regular;
      font-size: 0.32rem;
      color: #ffffff;
} */

.housePice {
     background: #fff;
     margin-top: 0.2rem;
}

.g-dynamic {
     padding-bottom: 1.2rem;
     margin-top: 0.2rem;
     background: #fff;
}

.g-dynamic-lis {
     width: 6.58rem;
     margin-left: 0.2rem;
     padding-left: 0.19rem;
     border-left: 2px solid #63b1ff;
}

.g-dynamic-li {
     padding-top: 0.2rem;
     padding-left: 0.3rem;
     padding-right: 0.3rem;
     padding-bottom: 0.2rem;
     position: relative;
     margin-bottom: 0.2rem;
     background: #ffffff;
     box-shadow: 0 0 11px -1px rgba(99, 130, 172, 0.33);
     border-radius: 4px;
}

.g-dynamic-li p:nth-child(1) {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #b9c0c8;
     line-height: 0.4rem;
}

.g-dynamic-li p:nth-child(1) span {
     display: inline-block;
     width: 0.96rem;
     height: 0.36rem;
     border: 1px solid rgba(99, 177, 255, 1);
     font-family: PingFangSC-Regular;
     color: #63b1ff;
     font-size: 0.2rem;
     line-height: 0.36rem;
     text-align: center;
}

.g-dynamic-li p:nth-child(2) {
     margin-top: 0.2rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #4d535d;
     line-height: 0.4rem;
}

.text_overflow {
     height: 0.78rem;
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 2;
}

.no_text_overflow {
     height: auto;
}

.g-dynamic-li p:nth-child(3) {
     overflow: hidden;
     text-overflow: ellipsis;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #8b949e;
     line-height: 0.4rem;
}

.g-dynamic-li p:nth-child(1) i {
     content: "";
     display: inline-block;
     width: 0.2rem;
     height: 0.2rem;
     /* background: #0c8cff; */
     background-image: url("/static/obshare/icon_shijianzhoucopy3@3x.png");
     background-size: cover;
     border-radius: 0.2rem;
     position: absolute;
     left: -0.305rem;
     top: 0.25rem;
     z-index: 99;
}

.g-dynamic-li p:nth-child(1):after {
     content: "";
     display: inline-block;
     width: 0.3rem;
     height: 0.3rem;
     background: #fff;
     border-radius: 0.3rem;
     position: absolute;
     left: -0.36rem;
}

.constructionList {
     padding-bottom: 0.4rem;
}
.margin-con {
     margin-top: 0.2rem;
     background: #fff;
}
.constructionLi {
     position: relative;
     margin-top: 0.2rem;
     width: 2.14rem;
     height: 2.14rem;
}
.g-light-seek-tit {
     padding: 0.2rem 0;
}
.g-light-seek-tit span:nth-child(1) {
     font-family: PingFangSC-Medium, "微软雅黑";
     font-size: 0.4rem;
     color: #212832;
     line-height: 0.8rem;
     font-weight: 600;
}

.g-light-seek-tit span:nth-child(2) {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #8b949e;
     text-align: right;
     line-height: 0.28rem;
}

.g-light-seek-tit .lookAll {
     display: inline-block;
     margin-right: 0.25rem;
}

.g-light-seek-but {
     /* margin: 0.5rem auto; */
}

.g-light-seek-but-hr {
     float: left;
     margin-top: 0.3rem;
     margin-left: 0.2rem;
     width: 4rem;
}

.g-light-seek-but-img {
     float: left;
     margin-bottom: 0.3rem;
     margin-top: 0.3rem;
     width: 2rem;
     height: 1.67rem;
}

.g-light-seek-but-hr p {
     font-family: PingFangSC-Medium;
     color: #4d535d;
     letter-spacing: 1.1;
     font-size: 0.28rem;
     line-height: 0.38rem;
}

.g-light-seek-but-hr span {
     margin-top: 0.3rem;
     display: block;
     width: 2rem;
     height: 0.6rem;
     background: #0080ff;
     border-radius: 4px;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #fff;
     line-height: 0.6rem;
     text-align: center;
}

.g-light-seek {
     margin: 0.2rem 0 !important;
     position: relative;
     padding-left: 0.3rem;
     padding-right: 0.3rem;
     background: #fff;
     margin: auto;
}

.g-light-seek-fot {
     width: 100%;
     float: left;
     margin-top: 0.3rem;
     margin-bottom: 0.3rem;
}

.g-light-seek-fot-btn {
     margin: auto;
     width: 4.8rem;
     height: 0.88rem;
     text-align: center;
     line-height: 0.88rem;
     border: 2px solid #0080ff;
     border-radius: 1rem;
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #0080ff;
}

.u-video-btn {
     position: absolute;
     left: 50%;
     top: 50%;
     margin-left: -0.35rem;
     margin-top: -0.35rem;
     width: 0.7rem;
     height: 0.7rem;
}

.u-photo-btn {
     position: absolute;
     bottom: 0.11rem;
     left: 0.1rem;
     width: 0.3rem;
     height: 0.3rem;
}

.authorCircle {
     padding: 0.3rem 0.3rem 0.4rem;
}

.authorImg span {
     display: inline-block;
     margin-left: 0.05rem;
     width: 0.48rem;
     height: 0.48rem;
     border-radius: 0.48rem;
     background-size: cover;
     background-repeat: no-repeat;
}

.hotChat {
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     line-height: 0.28rem;
}

.hotChat code {
     color: #fe751b;
}

.dia_body h1 {
     margin-top: 0.6rem;
     font-family: PingFangSC-Regular;
     color: #212832;
     line-height: 0.32rem;
     font-size: 0.32rem;
     text-align: center;
}

.dia_body p {
     margin-top: 0.3rem;
     font-family: PingFangSC-Regular;
     color: #8b949e;
     line-height: 0.22rem;
     font-size: 0.22rem;
     text-align: center;
}

.dia_body .btn_ {
     width: 100%;
     position: absolute;
     bottom: 0;
}

.dia_body .inp_ {
     /* margin-top: 0.3rem; */
     margin: 0.2rem auto 0;
     width: 70%;
}

.dia_body .close_,
.dia_body .sure_ {
     width: 50%;
     height: 0.88rem;
     text-align: center;
     line-height: 0.88rem;
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     border: 1px solid rgba(231, 231, 231, 1);
}

.close_ {
     color: #b9c0c8;
     border-right: none !important;
     border-left: none !important;
}

.sure_ {
     color: #0080ff;
     border-right: none !important;
}

.g-echarts-tit {
     line-height: 0.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.22rem;
     color: #8b949e;
}

.esplit_font {
     font-family: PingFangSC-Regular;
     color: #63b1ff;
     font-size: 0.2rem;
     line-height: 0.36rem;
}

.g-echarts-tit-1,
.g-echarts-tit-2 {
     margin-left: 0.3rem;
     margin-bottom: 0.3rem;
}

.u-echarts-icon-1,
.u-echarts-icon-2 {
     display: inline-block;
     width: 0.2rem;
     height: 0.2rem;
     background-size: cover;
}

.u-echarts-icon-1 {
     background-image: url(/static/obshare/icon_shijianzhou@3x.png);
}

.u-echarts-icon-2 {
     background-image: url(/static/obshare/icon_shijianzhoucopy3@3x.png);
}

.m-building-rating {
     margin-bottom: 0.2rem;
     padding: 0 0.3rem 0 0.3rem;
     height: 2.7rem;
     background: #fff;
}

.m-building-rating .g-building-context {
     margin-top: 0.2rem;
}

.m-building-rating .g-building-context .g-building-sum {
     font-family: PingFangSC-Light;
     font-size: 1.6rem;
     color: #0080ff;
     line-height: 1.2rem;
}

.m-building-rating .g-building-context .g-time {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #212832;
     line-height: 0.24rem;
}

.m-building-rating .g-building-context .g-evaluate,
.m-building-rating .g-building-context .g-time,
.m-building-rating .g-building-context .g-rating {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #212832;
     line-height: 0.27rem;
}

.m-building-rating .g-building-context .g-rating {
     color: #4d535d;
}
.g-live-action {
     margin-top: 0.2rem;
     padding-bottom: 0.4rem;
     background: #fff;
}
.g-eyes {
     background: #fff;
}
.g-eyes .g-eyes-container {
     padding: 0 0.3rem 0.3rem;
}
.g-eyes .g-eyes-container .g-textImg .u-text {
     box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
     border-radius: 0.04rem;
}
.g-eyes .g-eyes-container .g-textImg .u-text .u-text1 {
     margin-top: 0.18rem;
     background: #0080ff;
     width: 1.12rem;
     height: 0.36rem;
     border-top-right-radius: 0.18rem;
     border-bottom-right-radius: 0.18rem;
     font-size: 0.2rem;
     color: #ffffff;
     line-height: 0.36rem;
     text-align: center;
}
.g-eyes .g-eyes-container .g-textImg .u-text .u-text2 {
     margin-top: 0.1rem;
     padding-left: 0.3rem;
     font-size: 0.32rem;
     color: #212832;
     letter-spacing: 0.0048rem;
     line-height: 0.32rem;
}
.g-eyes .g-eyes-container .g-textImg .u-text .u-text2 mark {
     font-size: 0.56rem;
     color: #0080ff;
     letter-spacing: 0.0084rem;
     line-height: 0.48rem;
     background: none;
}
.g-eyes .g-eyes-container .g-textImg .u-text .u-text3 {
     display: inline-block;
     margin-top: 0.18rem;
     padding-left: 0.3rem;
     font-size: 0.24rem;
     color: #8b949e;
     letter-spacing: 0;
     line-height: 0.24rem;
}
.g-eyes .g-eyes-container .g-textImg .u-img {
     width: 2.7rem;
     height: 1.8rem;
     background: #212832;
}
.g-eyes-menus {
     margin-top: 0.3rem;
}
.g-eyes-menus .g-menus-container {
     width: 3.3rem;
     height: 1.4rem;
     box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
     border-radius: 0.04rem;
}
.g-eyes-menus .g-menus-container .u-img {
     margin-right: 0.1rem;
     height: 100%;
}
.g-eyes-menus .g-menus-container .u-img1 {
     width: 1.2rem;
     margin-right: 0.28rem;
}
.g-eyes-menus .g-menus-container .u-img2 {
     width: 1.4rem;
}
.g-eyes-menus .g-menus-container .u-text span {
     display: block;
}
.g-eyes-menus .g-menus-container .u-text .span1 {
     font-size: 0.28rem;
     color: #212832;
     line-height: 0.28rem;
}
.g-eyes-menus .g-menus-container .u-text .span2 {
     margin-top: 0.12rem;
     font-size: 0.2rem;
     color: #8b949e;
     line-height: 0.2rem;
}

.g-probleam .g-probleam-main {
     overflow: hidden;
     padding: 0 0.3rem;
}
.g-probleam .g-probleam-main .g-no-li .g-img {
     margin: auto;
     width: 2.4rem;
}
.g-probleam .g-probleam-main .g-no-li p {
     text-align: center;
     font-size: 0.28rem;
     color: #8b949e;
     letter-spacing: 0;
     line-height: 0.28rem;
}
.g-probleam .g-probleam-main .g-li {
     position: relative;
     margin-bottom: 0.31rem;
}
.g-probleam .g-probleam-main .g-li .g-p {
     width: 5.45rem;
     overflow: hidden;
     margin-left: 0.38rem;
     font-size: 0.32rem;
     color: #212832;
     line-height: 0.28rem;
}
.g-probleam .g-probleam-main .g-li .g-p-num {
     font-size: 0.24rem;
     color: #8b949e;
     line-height: 0.24rem;
}
.g-probleam .g-probleam-main .g-li .g-p::before {
     content: " ";
     display: block;
     position: absolute;
     top: 0;
     bottom: 0;
     margin: auto;
     left: 0;
     width: 0.28rem;
     height: 0.28rem;
     background: url("/static/obshare/icon_wen@3x.png") center center no-repeat;
     background-size: 100% 100%;
}
.g-probleam .g-probleam-main .g-btn {
     margin-top: 0.4rem;
     margin-bottom: 0.4rem;
     background: #0080ff;
     height: 0.88rem;
     line-height: 0.88rem;
     text-align: center;
     font-size: 0.32rem;
     color: #ffffff;
     border-radius: 0.04rem;
}
</style>
<style>
a:link {
     color: #42464d;
     text-decoration: none;
}

a:visited {
     color: #42464d;
     text-decoration: none;
}

a:hover {
     color: #42464d;
     text-decoration: none;
}

a:active {
     color: #42464d;
     text-decoration: none;
}

.img-wraper {
     width: 3.3rem !important;
     height: auto !important;
}

.img-wraper img {
     width: 100% !important;
}

.obShare .el-dialog {
     position: absolute;
     left: 50%;
     top: 50%;
     margin-left: -2.8rem;
     margin-top: -1.61rem !important;
     width: 5.6rem;
     height: 3.22rem;
}

.obShare .el-dialog__header {
     padding: 0;
}

.obShare .el-dialog__body {
     padding: 0;
     height: 100%;
     display: flex;
     flex-flow: column;
}

.dia_body .el-input {
     width: 100%;
     font-family: PingFangSC-Regular;
     color: #8b949e;
     font-size: 0.28rem;
     text-align: center;
     border: none;
}

.dia_body .el-input__inner {
     height: 0.4rem;
     line-height: 0.4rem;
     border: none;
     text-align: center;
}

.el-rate__icon {
     font-size: 0.27rem;
}
</style>
