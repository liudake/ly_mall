//app.js
import Auth from './util/auth.js';

App({
  onLaunch: function () {
    Auth.versionTip();
    this.globalData = {}
  }
})
