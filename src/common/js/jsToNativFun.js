
import Ob from './obshare'
export default function ({ iphData = {}, azData = '', iphFn = '', azFn = '' }) {
     if (Ob.is_iph()) {
          this.$setupWebViewJavascriptBridge(function (bridge) {
               bridge.callHandler(
                    iphFn,
                    iphData,
                    function (response) {
                         return;
                    }
               );
          });
     } else if (Ob.is_az()) {
          window.android[azFn](azData);
     }
}