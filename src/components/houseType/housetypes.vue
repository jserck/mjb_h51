<template>
    <div class="houstype">
        <div class="housetype_title" v-if="ischange">
            <div class="g-title-btn displayFlex flexAlignJustifyCenter" v-if="is3d">
                <span class="u-3d" @click="titleHandler(0)">
                    <img :src="u_3d_src" alt>
                </span>
                <span style="margin-left:0.1rem" class="u-photo" @click="titleHandler(1)">
                    <img :src="u_photo_src" alt>
                </span>
            </div>
            <div
                class="housetype_title_img"
                :style="`background-image:url('${housetypedata.picList[0].imageUrl}')`"
                @click="hrefLoad"
                v-show="!is3d_btn"
            >
                <span class="u-housetype_title_img_num">共{{housetypedata.num}}张</span>
            </div>
            <div
                class="housetype_title_img2 displayFlex flexAlignItemsCenter"
                :style="`background-image:url('${tDImageUrl}')`"
                @click="hrefLoad"
                v-if="is3d_btn && is3d"
            >
                <!-- <img style="width:100%" :src="tDImageUrl" alt=""> -->
                <div class="g-load3d-btn">
                    <div class="u-3d-gif">
                        <Sprite/>
                    </div>
                    <span class="u-3d-btn">点击加载3D模型</span>
                </div>
            </div>
        </div>
        <div class="g-housetype-header-content">
            <div class="g-housetype-heade-top displayFlex">
                <span class="u-housetype-h1">{{housetypedata.title}}</span>
                <span class="u-housetype-icon" :style="`background:${f_sell_type}`">{{f_sell_name}}</span>
            </div>
            <p class="u-housetype-h2">{{housetypedata.aliasTitle}}</p>
            <p class="u-housetype-market-pice">{{housetypedata.price}}</p>
            <div class="u-housetype-trait-list">
                <span v-for="(item,index) in housetypedata.tagList" :key="index">{{item.tagName}}</span>
            </div>
            <div class="u-housetype-header-message">
                <span>建筑面积：{{housetypedata.square}}</span>
                <span>物业类型：{{housetypedata.wyType}}</span>
            </div>
            <div class="u-housetype-header-message">
                <span>户型朝向：{{housetypedata.direction}}</span>
                <span>户型结构：{{housetypedata.form}}</span>
            </div>
        </div>
        <div class="g-housetype-this-house">
            <h1>所在楼栋</h1>
            <p>{{housetypedata.belonging || '暂无'}}</p>
        </div>
        <Otherhousetype :data="housetypedata.apartmentTypeList" v-on:otherHandler="otherHandler"/>
        <DownBtn/>
        <!-- <MessageBtn :ph_="housetypedata.phoneNumber" :collectionCount="0" :uid="$route.params.id" v-on:clickHandlers="loadHandler('0','animated bounceIn')" v-if="housetypedata.showReminder == '1'" /> -->
    </div>
</template>
<script>
// import MessageBtn from '../obshare/messageBtn'
import Otherhousetype from './atherhousetype'
import DownBtn from '../common/downBtn'
import Obshare from "../../common/js/obshare"
import Sprite from '../common/sprite'
export default {
    components: {
        // MessageBtn,
        Otherhousetype,
        DownBtn,
        Sprite
    },
    data() {
        return {
            sell_: 1,
            path_: "",
            ischange: false,
            is3d_btn: false,
            is3d: false,
            u_3d_src: '/static/housetype/icon_3d_lanse_n@3x.png',
            u_photo_src: '/static/housetype/icon_zhaopian_baise_n@3x.png',
            u_3d_src_link: require('../../../static/housetype/icon_3d_baise_n@3x.png'),
            u_3d_src_active: require('../../../static/housetype/icon_3d_lanse_n@3x.png'),
            u_photo_src_link: require('../../../static/housetype/icon_zhaopian_baise_n@3x.png'),
            u_photo_src_active: require('../../../static/housetype/icon_zhaopian_lanse_n@3x.png'),
            housetypedata: {
                titImg: '',
                // num: 0
            }
        }
    },
    computed: {
        tDImageUrl() {
            if (this.housetypedata.tDImageUrl == '') {
                return this.housetypedata.picList[0].imageUrl;
            } else {
                return this.housetypedata.tDImageUrl;
            }
        },
        f_sell_type() {
            switch (this.housetypedata.apartmentState) {

                case "1":
                    return '#0080FF';
                    break;
                case "2":
                    return '#68cda1';
                    break;
                case "3":
                    return '#B9C0C8';
                    break;
                default:
                    break;

            }
        },
        f_sell_name() {
            switch (this.housetypedata.apartmentState) {

                case "1":
                    return '在售'
                    break;
                case "2":
                    return '待售'
                    break;
                case "3":
                    return '售罄'
                    break;
                default:
                    break;

            }
        }
    },
    methods: {
        init(tDModelUrl, cruiseUrl) {
            this.is3d_btn = this.is3d = tDModelUrl != '' || cruiseUrl != '';
            if (this.is3d_btn) {
                this.u_3d_src = this.u_3d_src_active;
                this.u_photo_src = this.u_photo_src_link;
            } else {
                this.u_photo_src = this.u_photo_src_active;
                this.u_3d_src = this.u_3d_src_link;
            }
        },
        titleHandler(type) {
            if (type) {
                this.is3d_btn = false;
            } else {
                this.is3d_btn = true;
            }
            if (this.is3d_btn) {
                this.u_3d_src = this.u_3d_src_active;
                this.u_photo_src = this.u_photo_src_link;
            } else {
                this.u_photo_src = this.u_photo_src_active;
                this.u_3d_src = this.u_3d_src_link;
            }
        },
        hrefLoad() {
            window.location = this.$url.appDown;
        },
        loadHandler(num, className, type) {
            if (Obshare.locaGet("regis") === false) {
                this.$router.push({
                    path: "/register",
                    query: {
                        userId: this.$route.query.userId ? this.$route.query.userId : "",
                        path: this.$router.currentRoute.path
                    }
                });
            } else {
                window.location = this.$url.appDown;
            }
        },
        get_http() {
            let this_ = this;
            let buiding = "buiding/getApartmentTypeInfo160";
            let id = this.$route.params.id;
            let arid = this.$route.params.arid;
            let platform = this.$route.params.platform || 3;
            let url = buiding;
            let body = {
                propertyId: id,
                apartmentId: arid
            }
            let options = {
                urls: url,
                methods: 'post',
                data: body,
                des: true,
                types: 3,
                platform: platform
            };
            this.ischange = false;
            this.$http(options).then(res => {
                this_.housetypedata = res.response.data;
                // this_.housetypedata.titImg = this_.housetypedata.picList[0].imageUrl;
                this_.housetypedata.num = this_.housetypedata.picList.length;
                this.init(this_.housetypedata.tDModelUrl, this_.housetypedata.cruiseUrl);
                this.$nextTick(() => {
                    this.ischange = true;
                    window.scrollTo(0, 0);
                });
                // this.init('1', '');
                console.log(this_.housetypedata);
            }).catch(err => { });
        },
        otherHandler(data) {
            this.$router.push({
                path: `/housetype/${this.$route.params.id}/${data}/${this.$route.params.platform}`
            });
            this.get_http();
            window.scrollTo(0, 0);
        }
    },
    created() {
        this.get_http();
        //js凯尼

    }
}
</script>
<style scoped>
.houstype {
    margin: auto;
    padding-bottom: 1rem;
    background: rgba(151, 151, 151, 0.2);
    width: 7.5rem;
}
.housetype_title {
    position: relative;
    width: 100%;
    height: 6.55rem;
}
.g-title-btn {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0.3rem;
    z-index: 999;
}
.g-title-btn img {
    width: 1.48rem;
    height: 0.74rem;
}
.g-load3d-btn {
    text-align: center;
    margin: auto;
    z-index: 999;
}
.u-3d-gif {
    margin: 0.1rem auto;
    width: 0.6rem;
    height: 0.6rem;
}
.u-3d-btn {
    font-size: 0.24rem;
    color: #fff;
    line-height: 0.33rem;
    text-shadow: 0.02rem 0.03rem 0.05rem rgba(0, 0, 0, 0.5);
}
.housetype_title_img,
.housetype_title_img2 {
    height: 100%;
    position: relative;
    background-size: cover;
}
.u-housetype_title_img_num {
    position: absolute;
    bottom: 0.45rem;
    right: 0.3rem;
    display: inline-block;
    width: 1.17rem;
    height: 0.44rem;
    background: #000000;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    line-height: 0.44rem;
    text-align: center;
}
.g-housetype-header-content {
    padding: 0.4rem 0 0.4rem 0.3rem;
    background: #fff;
}
.g-housetype-heade-top {
}
.g-housetype-heade-top .u-housetype-h1 {
    font-family: PingFangSC-Medium;
    color: #212832;
    font-size: 0.4rem;
    line-height: 0.4rem;
}
.u-housetype-h2 {
    margin-top: 0.2rem;
    font-family: PingFangSC-Medium;
    color: #8b949e;
    font-size: 0.32rem;
    line-height: 0.32rem;
}
.g-housetype-heade-top .u-housetype-icon {
    display: inline-block;
    margin-left: 0.1rem;
    font-family: PingFangSC-Medium;
    color: #fff;
    font-size: 0.2rem;
    background: #68cda1;
    border-radius: 2px;
    width: 0.72rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
}
.g-housetype-header-content .u-housetype-market-pice {
    margin-top: 0.2rem;
    font-family: PingFangSC-Medium;
    color: #f00;
    font-size: 0.3rem;
    line-height: 0.3rem;
}
.g-housetype-header-content .u-housetype-trait-list {
    margin-top: 0.2rem;
    font-family: PingFangSC-Medium;
    color: #63b1ff;
    font-size: 0.2rem;
    line-height: 0.2rem;
}
.g-housetype-header-content .u-housetype-trait-list span {
    display: inline-block;
    margin-right: 0.1rem;
    margin-bottom: 0.1rem;
    padding: 0.08rem;
    border: 1px solid rgba(99, 177, 255, 1);
    border-radius: 2px;
}
.g-housetype-header-content .u-housetype-header-message {
    margin-top: 0.2rem;
    font-family: PingFangSC-Regular;
    color: #212832;
    font-size: 0.24rem;
    line-height: 0.24rem;
}
.g-housetype-header-content .u-housetype-header-message span {
    display: inline-block;
    width: 48%;
}
.g-housetype-this-house {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    padding: 0.3rem 0 0.4rem 0.3rem;
    background: #fff;
}
.g-housetype-this-house h1 {
    font-family: PingFangSC-Medium;
    color: #212832;
    font-size: 0.28rem;
    line-height: 0.24rem;
}
.g-housetype-this-house p {
    margin-top: 0.3rem;
    font-family: PingFangSC-Regular;
    color: #212832;
    font-size: 0.24rem;
    line-height: 0.24rem;
}
</style>
