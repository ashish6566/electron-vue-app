import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: []
  },
  getters: {
    STUDENTS: state => {
      return state.students;
    }
  },
  mutations: {
    SET_STUDENTS: (state, student) => {
      state.students = student;
    }
  },
  action: {
    LOAD_STUDENTS({ commit }) {
      axios
        .get("http://localhost:3000/api/students")
        .then(res => {
          let student = res.data;
          commit("SET_STUDENTS", student);
        })
        .catch(error => console.log(error));
    }
  }
});
