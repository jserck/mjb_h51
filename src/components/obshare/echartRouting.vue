<template>
    <div class="m-echartRouting">
        <div class="g-echartRouting-echarts" v-if="echartsLoading">
            <RoutingEchart :data="routingData.propertyScoreList"/>
        </div>
        <div class="g-echartRouting-routing displayFlex">
            <div
                class="g-echartRouting-routing-l displayFlex flexColumn flexAlignJustifyCenter flexAlignItemsCenter"
            >
                <span class="u-sum">{{routingData.score}}分</span>
                <div
                    class="displayFlex flexAlignJustifyCenter flexAlignItemsCenter"
                    style="marginTop:0.2rem"
                >
                    <span class="u-sum-icom u-sum-icom2">
                        <!-- <img src="/static/pingfen/icon_loupanzongfen.png" alt=""> -->
                    </span>
                    <span class="u-type">楼盘总分</span>
                </div>
            </div>
            <div
                class="g-echartRouting-routing-r displayFlex flexColumn flexAlignJustifyCenter flexAlignItemsCenter"
            >
                <div class="displayFlex flexAlignJustifyCenter flexAlignItemsCenter">
                    <span
                        class="u-sum-icom"
                        v-if="routingData.increase > 0 && routingData.increase"
                    >
                        <img src="/static/pingfen/icon_sahngsheng30.png" alt>
                    </span>
                    <span
                        class="u-sum-icom"
                        v-else-if="routingData.increase < 0 && routingData.increase"
                    >
                        <img src="/static/pingfen/icon_xiajiangb.png" alt>
                    </span>
                    <span class="u-sum-icom" v-else>
                        <img src="/static/pingfen/icon_chipingb.png" alt>
                    </span>
                    <span
                        class="u-sum"
                        v-if="routingData.increase !=0&&routingData.increase"
                    >{{Math.abs(routingData.increase)}}分</span>
                    <span class="u-sum" v-else-if="routingData.increase ===0">持平</span>
                    <span class="u-sum" v-else-if="routingData.increase ===''">暂无</span>
                </div>
                <div
                    class="displayFlex flexAlignJustifyCenter flexAlignItemsCenter"
                    style="marginTop:0.2rem"
                >
                    <span class="u-sum-icom u-sum-icom1">
                        <!-- <img src="/static/pingfen/icon_bifen.png" alt=""> -->
                    </span>
                    <span class="u-type">比上次评分</span>
                </div>
            </div>
        </div>
        <a href="#/ereter">什么是鹰眼评分？点击查看详情</a>
    </div>
</template>

<script>
const RoutingEchart = () => import("./echarts/routingEchrat");
export default {
    components: {
        RoutingEchart
    },
    data() {
        return {
            routingData: {},
            echartsLoading: false
        };
    },
    created() {
        this.createData();
    },
    methods: {
        createData(arr) {
            if (!this.$http) {
                return;
            }
            let url = `buildingScoreInfo/${this.$route.params.id}`;
            let body = {
                propertyId: this.$route.params.id
            }
            let options = {
                urls: url,
                methods: 'post',
                data: body,
                des: true,
                // responseType: '',
                types: 1
            };
            this.$http(options).then((res) => {
                if (res.code == 0) {

                    this.routingData = res.response.data;
                    this.echartsLoading = true;
                    console.log(this.routingData);

                }
            }).catch((err) => {

            });
        },
    }
};
</script>
<style scoped>
a:link {
    display: block;
    margin: 0.4rem auto 0.67rem;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #8b949e;
    letter-spacing: 0.79px;
    text-align: center;
    text-decoration: underline;
}

a:visited {
    display: block;
    margin: 0.4rem auto 0.67rem;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #8b949e;
    letter-spacing: 0.79px;
    text-align: center;
}

a:hover {
    display: block;
    margin: 0.4rem auto 0.67rem;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #8b949e;
    letter-spacing: 0.79px;
    text-align: center;
}

a:active {
    display: block;
    margin: 0.4rem auto 0.67rem;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #8b949e;
    letter-spacing: 0.79px;
    text-align: center;
}

.u-sum-icom1 {
    background: url(/static/pingfen/icon_bifen.png);
}

.u-sum-icom2 {
    background: url(/static/pingfen/icon_loupanzongfen.png);
}
.u-sum-icom1,
.u-sum-icom2 {
    background-position: center;
    background-size: cover;
}
.m-echartRouting {
    margin: auto;
    max-width: 7.5rem;
    width: 100%;
}

.g-echartRouting-echarts {
    margin-top: 0.7rem;
    height: 6.5rem;
}

.g-echartRouting-routing {
    width: 6.9rem;
    margin: 1.8rem auto 0;
    height: 1.7rem;
    text-align: center;
    box-shadow: 0 0 0.3rem 0 rgba(169, 183, 197, 0.35);
}
.g-echartRouting-routing-l :after {
    content: "";
    display: block;
    position: absolute;
    padding: 0;
    right: 0;
    width: 0;
    top: 0.5rem;
    height: 0.7rem;
    /* background: #8b949e; */
    border-left: 2px solid #8b949e;
}
.g-echartRouting-routing-l,
.g-echartRouting-routing-r {
    position: relative;
    width: 3.45rem;
    height: 1.7rem;
    text-align: center;
}

.g-echartRouting-routing-l .u-sum,
.g-echartRouting-routing-r .u-sum {
    font-family: PingFangSC-Semibold;
    font-size: 0.48rem;
    color: #000000;
    line-height: 0.48rem;
}

.g-echartRouting-routing-l .u-type,
.g-echartRouting-routing-r .u-type {
    font-family: PingFangSC-Regular;
    font-size: 0.3rem;
    color: #8b949e;
    line-height: 0.3rem;
}

.u-sum-icom {
    display: inline-block;
    margin-right: 0.1rem;
    width: 0.3rem;
    height: 0.3rem;
    /* background: red; */
}

.u-sum-icom img {
    width: 100%;
}
</style>