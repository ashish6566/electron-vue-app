<template>
  <div class="student-grid">
    <h1>
      <strong>Students Data Grid View</strong>
    </h1>
    <table id="data-grid-view">
      <thead>
        <tr>
          <th>ID</th>
          <th>Registration ID</th>
          <th>Firstname</th>
          <th>Surname</th>
          <th>Gender</th>
          <th>Birth Date</th>
          <th>Guardian Name</th>
          <th>Contact Info</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(col, index) in row" :key="index">{{ col }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentGrid",

  data: () => {
    return {
      rows: []
    };
  },

  computed: {},

  mounted() {
    axios
      .get("http://localhost:3000/api/students")
      .then(res => {
        this.rows = res.data;
      })
      .catch(e => console.log(e));
  }
};
</script>

<!--<style>
</style>-->
