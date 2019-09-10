import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const {BrowserWindow} = require('electron').remote

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    minimize: function(event){
      var window = BrowserWindow.getFocusedWindow();
      window.minimize();
    },
    close: function(event){
      var window = BrowserWindow.getFocusedWindow();
      window.close();
    }
  },
  render: h => h(App)
}).$mount('#app')

