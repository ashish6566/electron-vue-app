<template>
  <div class="student-grid">
    <h1>
      <strong>Data Grid</strong>
    </h1>
    <p></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentGrid",
  data() {
    return {
      students: []
    };
  },
  computed: {
    getStudent() {
      return this.students;
    }
  },
  methods: {
    name() {}
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/students")
      .then(res => {
        this.students = res;
        commit("SET_STUDENT", res);
      })
      .catch(e => console.log(e));
  }
};
</script>

<!--<style>
</style>-->
