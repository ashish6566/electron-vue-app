import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueElectron from "vue-electron";

import { dom } from "@fortawesome/fontawesome-svg-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserGraduate,
  faMoneyCheckAlt,
  faBook,
  faHotel,
  faBus,
  faUsersCog,
  faChalkboardTeacher,
  faCogs
} from "@fortawesome/free-solid-svg-icons";

dom.watch();
library.add(
  faUserGraduate,
  faMoneyCheckAlt,
  faBook,
  faHotel,
  faBus,
  faUsersCog,
  faChalkboardTeacher,
  faCogs
);

Vue.use(VueElectron);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
