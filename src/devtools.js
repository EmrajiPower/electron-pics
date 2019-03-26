import {enableLiveReload} from 'electron-compile'
import electronDebug from 'electron-debug'
import $ from "jquery"

module.exports = function devtools() {
  enableLiveReload();
  electronDebug({showDevTools:true})
}

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err)
        return;
    }

    var $ = require("jquery")(window)
})
