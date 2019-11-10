import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//For FontAwesome
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

import VueElectron from "vue-electron";
import Vuelidate from "vuelidate";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

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

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueElectron);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
