import Ob from './obshare'
import setupWebViewJavascriptBridge from './setupWebViewJavascriptBridge'
import NativeToJs from './NativeToJs'

export default function () {
     return new Promise((resolve) => {
          if (Ob.is_iph()) {
               setupWebViewJavascriptBridge(function (bridge) {
                    bridge.registerHandler(NativeToJs['TESTJSFUNCTION'], function (data, responseCallback) {
                         if (data) {
                              window.sessionStorage.setItem('token', data.token);
                              resolve(data.token);

                         }
                         responseCallback('已获取token');
                    })
               });
          }
          if (Ob.is_az()) {
               window[NativeToJs['TESTJSFUNCTIONS']] = function (data) {
                    if (data) {
                         window.sessionStorage.setItem('token', data);

                         resolve(data);
                    }
               };
          }
     });
}
