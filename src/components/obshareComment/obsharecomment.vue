<template>
    <div class="m-comment">
        <div class="g-tit">
            <div class="g-user">
                <div class="u-user-img">
                    <img :src="com_data.avatar ?com_data.avatar :de_use_img " alt>
                </div>
                <span class="u-user-nam">{{com_data.userName}}</span>
            </div>
            <span class="u-tim">{{com_data.date}}</span>
        </div>
        <div class="g-banner" @click="f_load">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(item,index) in com_data.bannerList" :key="index">
                    <div v-if="!isIcom" style="position: relative;">
                        <img class="g-ban-img" :src="item.picUrl" alt>
                    </div>
                    <div
                        v-else
                        style="position: relative;text-align:center;background:#000;height:4.8rem;overflow:hidden"
                    >
                        <img class="g-video-img" :src="item.picUrl" alt>
                        <div class="u-video-btn" v-if="isIcom">
                            <img style="width: 100%;" src="/static/icon_zanting_n@3x.png" alt>
                        </div>
                    </div>
                </swiper-slide>
                <!-- 如果需要分页器 -->
            </swiper>
            <section class="g-pagination">
                <div class="swiper-pagination" v-if="isIcom && com_data.bannerList.length>1"></div>
            </section>
        </div>

        <div class="g-banner-pro">
            <div class="g-inner">
                <p class="u-h1">{{com_data.title ? com_data.title : '暂无'}}</p>
                <p
                    class="u-tet"
                    style="padding-right: 0.3rem"
                >{{com_data.content ? com_data.content : '暂无'}}</p>
                <div class="g-sign">
                    <span v-for="item in com_data.tagList">{{item.tagName}}</span>
                </div>
            </div>
        </div>
        <div class="u-border"></div>
        <div class="g-comment">
            <div class="u-tit">
                <span>业主评论</span>
                <span>({{pageCount}})</span>
            </div>
            <div v-show="reply_data.length > 0" class="g-com-ine" v-for="item in reply_data">
                <div>
                    <div class="u-user-img">
                        <img :src="item.avatar ?item.avatar : de_use_img " alt>
                    </div>
                </div>
                <div class="g-com-tet" style="width: 6.22rem;">
                    <div>
                        <div class="g-com-ine-top">
                            <span class="u-user-nam">{{item.userName}}</span>
                        </div>
                        <p
                            style="margin-top: 0.2rem"
                            class="u-tet"
                        >{{item.content ? item.content : '暂无'}}</p>
                        <div style="margin-top: 0.09rem">
                            <span class="u-tim">{{item.date}}</span>
                        </div>
                    </div>
                    <div class="g-com-reply" v-if="item.replyNum > 0">
                        <div>
                            <div class="g-tit">
                                <span class="u-rep-user-nam">{{item.replyUserName}}</span>
                                <span class="u-rep-tim">{{item.replyDate}}</span>
                            </div>
                            <div>
                                <p class="u-tet">{{item.replyContent ? item.replyContent : '暂无'}}</p>
                            </div>
                        </div>
                        <div
                            style="margin-top: 0.2rem"
                            v-if="item.replyNum - 1 > 0"
                            @click="f_load('0','animated bounceIn')"
                        >
                            <span class="u-reply-btn">展开剩余{{item.replyNum - 1}}条回复</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-no-com" v-if=" reply_data.length <= 0">
                <div class="g-no-com-img"></div>
                <div class="g-no-com-text1">
                    <span>还没有人发表评论</span>
                </div>
                <div class="g-no-com-text2">
                    <span>留下第一个评论和大家一起讨论吧</span>
                </div>
            </div>
        </div>
        <section class="m-nav">
            <div class="m-nav-logo">
                <img src="/static/comment/logo-blue@3x.png" alt>
            </div>
            <div class="m-nav-btn" @click="f_load('1','animated bounceIn')">
                <span>{{load_text}}</span>
            </div>
        </section>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Obshare from '../../common/js/obshare'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ImgLoad from '../../common/js/imgPrvLoad'
export default {
    data() {
        return {
            load_text: '下载APP',
            com_data: {},
            href_data: {},
            pageCount:0,
            isIcom: false,
            reply_data: {},
            fis: [],
            de_use_img: '/static/comment/touxiang_mig@2x.png',
            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                direction: 'horizontal',
                stopOnLastSlide: true,
                autoHeight: true,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
                disableOnInteraction: false,
                waitForTransition: false,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    created() {
        this.getadd();
    },

    methods: {
        getdata() {
            let url = 'contributionComment/' + this.$route.params.id + `/${this.$route.params.ids}`;
            let options = {
                urls: url,
                methods: 'get',
                data: {},
                des: true,
                types: 1
            };
            this.$http(options).then(res => {
                console.log(res);

                if (res.response.status == 0) {
                    this.reply_data = res.response.data.commentList;
                    this.fis.push(this.reply_data[0]);
                    this.pageCount = res.response.data.pageCount;
                    return;
                }
                this.set_hint(res.response.message);
            }).catch(err => {
                console.log(err);
            });
        },
        getadd() {
            let url = 'getContributionFallDetails/' + this.$route.params.id + `/${this.$route.params.ids}`;
            let options = {
                urls: url,
                methods: 'get',
                data: {},
                des: true,
                types: 1
            };
            this.$http(options).then(res => {
                // this.com_data = res.response.data;
                // this.com_data.bannerList[0].picUrl = res.response.data.videoInfo.videoPreImage;
                // this.isIcom = true;

                if (res.response.status == 0) {
                    if (!res.response.data.videoInfo) {

                        let imgList = res.response.data.bannerList;
                        let arr = [];
                        let len = imgList.length;
                        for (let i = 0; i < len; i++) {
                            arr.push(imgList[i].picUrl);
                        }
                        ImgLoad(arr).then(() => {
                            this.com_data = res.response.data;
                        });

                    } else {
                        ImgLoad([res.response.data.videoInfo.videoPreImage]).then(() => {
                            this.com_data = res.response.data;
                            this.com_data.bannerList[0].picUrl = res.response.data.videoInfo.videoPreImage;
                            this.isIcom = true;
                        });
                    }
                    return;
                }
                this.set_hint(res.response.message);
            }).catch(err => {
                console.log(err);
            });
            this.getdata();
        },
        ...mapState({
            dat_com: 'dat_com'
        }),
        ...mapMutations({
            set_motai: 'set_motai',
            set_school_class: 'set_school_class',
            change_motai: 'change_motai',
            set_dat_com: 'set_dat_com',
            set_data_comment: 'set_data_comment',
            set_hint: "set_hint"
        }),

        f_load(num, className) {
            // if (Obshare.locaGet('regis') === false) {
            //      this.$router.push({
            //           path: '/register',
            //           query: {
            //                userId: this.$route.query.userId ? this.$route.query.userId : '',
            //                path: this.$router.currentRoute.path,
            //                regis: ''
            //           }
            //      });
            // } else {
            window.location = this.$url.appDown;
            // }
        },
    }
}
</script>
<style>
/*
    模块容器的尺寸跟布局
    width是7.5并且剧中显示
  */
.m-comment {
    margin: auto;
    width: 7.5rem;
    background: #fff;
    /*background: #F7F7F7;*/
}
.u-border {
    width: 100%;
    height: 0.2rem;
    background: #f7f7f7;
}
/*
      头部的样式
      使用FLEX布局左右分隔站位并且垂直居中
  */
.m-nav {
    position: fixed;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 0.88rem;
    background: #fff;
}

/*
      头部LOGO的样式
  */
.m-nav-logo {
    margin: auto;
    margin-left: 0.5rem;
    width: 2.2rem;
    height: 0.51rem;
}

/*
      头部LOGO img的样式
      height自适应
  */
.m-nav-logo img {
    width: 100%;
}

/*
      头部下载btn的样式
  */
.m-nav-btn {
    margin: auto;
    margin-right: 0.3rem;
    width: 1.69rem;
    height: 0.64rem;
    background: #2e97ff;
    border-radius: 0.04rem;
    text-align: center;
}

/*
      头部下载btn字体的样式
  */
.m-nav-btn span {
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #ffffff;
    line-height: 0.64rem;
    text-align: center;
}

/*
      轮播图模块的样式
  */
.g-banner {
    width: 100%;
}

/*
      中间图片问题点的样式
  */
.g-banner-pro {
    width: 100%;
    background: #fff;
}

/*问题点模块顶部*/
.g-tit {
    padding-top: 0.19rem;
    padding-bottom: 0.15rem;
    display: flex;
    justify-content: space-between;
    height: 0.48rem;
}

/*问题点模块顶部用户信息*/
.g-tit .g-user {
    margin-left: 0.3rem;
    display: flex;
    justify-content: space-between;
}

/*问题点模块顶部用户头像*/
.u-user-img {
    margin-right: 0.2rem;
    width: 0.48rem;
    height: 0.48rem;
    border-radius: 0.3rem;
    overflow: hidden;
}

.u-user-img img {
    width: 100%;
}

/*问题点模块顶部用户昵称*/
.u-user-nam {
    margin: auto;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8b949e;
    line-height: 0.24rem;
}

.u-rep-user-nam {
    margin: auto;
    margin-left: 0;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8b949e;
    line-height: 0.24rem;
}

/*问题点模块顶部时间*/
.u-tim {
    margin: auto;
    margin-right: 0.3rem;
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: #b9c0c8;
    line-height: 0.24rem;
}

.u-rep-tim {
    margin: auto;
    margin-right: 0;
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: #b9c0c8;
    line-height: 0.24rem;
}

.g-banner-pro .g-inner {
    margin-left: 0.3rem;
}

/*问题点模块标题*/
.g-banner-pro .g-inner .u-h1 {
    margin-bottom: 0.2rem;
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #212832;
    line-height: 0.32rem;
    text-align: justify;
    padding-right: 0.3rem;
}

/*问题点模块字段*/
.u-tet {
    margin-bottom: 0.2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.48rem;
    text-align: justify;
}

/*问题点模块标记*/
.g-banner-pro .g-inner .g-sign {
    margin-bottom: 0.4rem;
}

/*问题点模块标记字体*/
.g-banner-pro .g-inner .g-sign span {
    padding-left: 0.07rem;
    padding-right: 0.07rem;
    margin-right: 0.1rem;
    height: 0.32rem;
    background: #ffffff;
    border: 1px solid #0080ff;
    border-radius: 2px;
    opacity: 0.5;
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: #0080ff;
    line-height: 0.2rem;
}

/*
      底部评论模块的样式
  */
.g-comment {
    padding-bottom: 0.9rem;
    width: 100%;
    background: #fff;
}

/*底部评论模块标题*/
.g-comment .u-tit {
    padding-left: 0.3rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.28rem;
    border-bottom: 1px solid #eee;
}

/*底部评论样式*/
.g-comment .g-com-ine {
    padding: 0.3rem;
    display: flex;
    border-bottom: 1px solid #eee;
}
.g-no-com {
    overflow: hidden;
    width: 100%;
    height: 4.91rem;
}
.g-no-com .g-no-com-img {
    margin: 1rem auto 0;
    width: 1.99rem;
    height: 1.99rem;
    background: url("http://activity.cun-tu.cn/pic_wupinglun_n@3x.png");
    background-size: 100%;
    background-position-y: 0.41rem;
    background-repeat: no-repeat;
}
.g-no-com .g-no-com-text1 {
    margin-top: 0.3rem;
    width: 100%;
    text-align: center;
    font-size: 0.28rem;
    color: #8b949e;
    line-height: 0.28rem;
}
.g-no-com .g-no-com-text2 {
    margin-top: 0.2rem;
    width: 100%;
    text-align: center;
    font-size: 0.24rem;
    color: #b9c0c8;
    text-align: center;
    line-height: 0.24rem;
}
/*回复样式*/
.g-com-reply {
    padding: 0.21rem 0.3rem 0.3rem;
    margin-top: 0.2rem;
    background: #f7f7f7;
}

/*查看更多回复*/
.u-reply-btn {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #0080ff;
    line-height: 0.24rem;
}

.g-com-reply .g-tit {
    display: flex;
    justify-content: space-around;
}

.g-ban-img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
.g-video-img {
    /* margin-top: -50%; */
    width: 100%;
    height: auto;
    max-width: 100%;
}
.u-video-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -0.3rem;
    margin-top: -0.3rem;
    width: 0.6rem;
    height: 0.6rem;
}

.el-carousel__indicators {
    display: none !important;
}

.el-carousel {
    height: 100%;
}

.el-carousel__container {
    height: 100%;
}
.g-banner .g-pagination {
    position: relative;
    height: 0.5rem;
}
.g-banner .g-pagination .swiper-pagination {
    width: 100%;
    /* left: 50%; */
}
.g-banner .g-pagination .swiper-pagination span {
    margin-right: 0.1rem;
}
</style>
