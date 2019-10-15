import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    school: "Shanti Academy",
    students: []
  }

  // actions: {
  //   getstudents() {
  //     axios.get("");
  //   }
  // }
});
