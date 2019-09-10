import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// const {BrowserWindow} = require('electron').remote

import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch();
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faUserGraduate, faMoneyCheckAlt, faBook, faHotel, faBus, faUsersCog, faChalkboardTeacher, faCogs
} from '@fortawesome/free-solid-svg-icons';

library.add( faUserGraduate, faMoneyCheckAlt, faBook, faHotel, faBus, faUsersCog, faChalkboardTeacher, faCogs);

  Vue.component('font-awesome-icon', FontAwesomeIcon)

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

