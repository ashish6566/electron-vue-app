import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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
  render: h => h(App)
}).$mount('#app')

