<template>
    <div id="app">
        <router-view></router-view>
        <oban v-if="this.$store.state.is_motai"></oban>
        <Hint :h="true" :t="this.ist" v-if="this.hint"/>
    </div>
</template>

<script>
import './common/css/common.css'
import oban from './components/moban/moban'
import Hint from './components/common/hint'
import { mapState, mapActions } from 'vuex'
import Ob from './common/js/obshare'
import setupWebViewJavascriptBridge from './common/js/setupWebViewJavascriptBridge'
import NativeToJs from './common/js/NativeToJs'

export default {
    name: 'app',
    components: {
        oban,
        Hint
    },

    computed: mapState({
        // 箭头函数可使代码更简练
        hint: state => state.hint,
        ist: state => state.ist
    }),
    methods: {
        ...mapActions({
            setIsAppAction: 'setIsAppAction'
        }),
        getIsApp() {
            let isApp = false;
            let appExg = /type=app/g;
            if (this.$route.query.type && this.$route.query.type === 'app') {
                isApp = true;
            } else {
                isApp = appExg.test(window.location.href);
            }
            return isApp;
        },
        getToken() {
            if (Ob.is_iph()) {
                setupWebViewJavascriptBridge(function (bridge) {
                    bridge.registerHandler(NativeToJs['TESTJSFUNCTION'], function (data, responseCallback) {
                        if (data) {
                            window.sessionStorage.setItem('token', data.token);
                        }
                        responseCallback('已获取token');
                    })
                });
            }
            // if (Ob.is_az()) {
                // window[NativeToJs['TESTJSFUNCTIONS']] = function (data) {
                //     alert('拿到了' + data);
                //     if (data) {
                //         window.sessionStorage.setItem('token', data);
                //     }
                // };
            // }
        }
    },
    created() {
        // this.$getToken();
        this.getToken();
        this.setIsAppAction(this.getIsApp());
    }
}

</script>

<style>
#app {
    width: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    font-size: 0.252rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    margin: 0;
    padding: 0;
}
</style>
