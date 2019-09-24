import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { dom } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faUserGraduate, faMoneyCheckAlt, faBook, faHotel, faBus, faUsersCog, faChalkboardTeacher, faCogs
} from '@fortawesome/free-solid-svg-icons'

// --------Database Connection Here For Test-------------
import mysqlConnection from './db/dbconnection.js'
//--------------------------------------------------
dom.watch()
library.add( faUserGraduate, faMoneyCheckAlt, faBook, faHotel, faBus, faUsersCog, faChalkboardTeacher, faCogs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

