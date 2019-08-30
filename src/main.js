// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import fastclick from 'fastclick';
import setFontsize from './common/js/setFontsize';
import weixin from './common/js/weixin'
import Http from './common/js/axios'
import {
    Button,
    Notification,
    Progress,
    Carousel,
    Radio,
    // Step,
    // Steps,
    Rate,
    CarouselItem,
    Input,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Dialog,
    // tabPane,
    // tabs,
    // Form,
    // FormItem,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
    url
} from './common/js/urlLocation';
import store from './common/js/store';
import SetupWebViewJavascriptBridge from "./common/js/setupWebViewJavascriptBridge";
import JsToNative from './common/js/jsToNative'
import NativeToJs from './common/js/NativeToJs'
import GetToken from './common/js/getToken';
import JsToNativeFun from './common/js/jsToNativFun'
// import AMap from 'vue-amap';
// import echarts from 'echarts';
import {
    class_name_ftn
} from './common/js/computed_class_name';
// import $ from 'jquery'
// Vue.prototype.$echarts = echarts;
Vue.prototype.$http = Http;
// Vue.prototype.$map = AMap;
Vue.prototype.$JsToNative = JsToNative;
Vue.prototype.$NativeToJs = NativeToJs;
Vue.prototype.$setupWebViewJavascriptBridge = SetupWebViewJavascriptBridge;
Vue.prototype.$JsToNativeFun = JsToNativeFun;
Vue.prototype.$url = url;
Vue.prototype.$store = store;
Vue.prototype.$weixin = weixin;
Vue.prototype.$class_name_ftn = class_name_ftn;
Vue.prototype.$getToken = GetToken;
// Vue.use(AMap);
Vue.use(Button);
// Vue.component(Notification);
Vue.use(Progress);
Vue.use(Carousel);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(CarouselItem);
Vue.use(Dialog);
Vue.use(Rate);
// Vue.use(tabPane);
// Vue.use(tabs);
// Vue.use(Form);
// Vue.use(FormItem);
GetToken().then((res) => {
    console.log(res);
}).catch((err) => {}); {
    Vue.config.productionTip = false;
    // fastclick.attach(document.body);
    setFontsize();
    router.afterEach((to, from, next) => {
        window.scrollTo(0, 0);
    });
}
/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    },
});