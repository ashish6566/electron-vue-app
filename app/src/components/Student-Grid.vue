<template>
  <div class="student-grid">
    <h1>
      <strong>Students Data Grid View</strong>
    </h1>
    <div class="table-responsive">
    <table id="data-grid-view" class="table">
      ..<thead>
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
   </div><!-- End of table-responsive-->
  </div><!--End of Student-grid-->
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
        consol.log(res.data);
      })
      .catch(e => console.log(e));
  }
};
</script>

<style>
.table-responsive{
  overflow-x:auto;
}

th{
  background-color:  #e6edff;
}

th, td {
  border-bottom: 1px solid #ddd;
  padding: 15px;
  font-size: 1.2rem;
  text-align: left;
}
tr:hover {
  background-color: #f5f5f5;
  }
</style>
