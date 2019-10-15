<template>
  <div class="student">
    <div class="left-sidebar">
      <div class="router-link" id="back-home">
        <router-link to="/">&#9776;&nbsp;Home</router-link>
      </div>
      <hr />
      <h1 class="page-title">Manage Students</h1>
      <hr />
      <div class="sub-view-link" id="mng-studentclass">
        <a class="sub-nav" to="/student/register">Register New Students</a>
        <a class="sub-nav" to="/student/classes">Update Grades of Students</a>
      </div>
    </div>
    <div class="content">
      <div class="nav-top">Home / Students</div>
      <hr id="separate-navtop-content" />
      <StudentRegister />
      <hr />
      <DataGridView />
      <!-- <div class="datagridview">
        <table class="student-view">
          <tr>
            <th id="th1">ID</th>
            <th id="th2">Registration ID</th>
            <th id="th3">Full Name</th>
            <th id="th4">Date of Birth</th>
            <th id="th5">Gender</th>
            <th id="th6">Guardian</th>
            <th id="th7">Contact Info</th>
            <th id="th8">Address</th>
          </tr>
          <tr>
            <td>Demo Data</td>
          </tr>
        </table>
      </div>-->
    </div>
  </div>
</template>

<script>
import StudentRegister from "@/components/Student-Register.vue";
import DataGridView from "@/components/Data-Grid-View.vue";
export default {
  name: "student",
  components: {
    StudentRegister
  }
};
</script>

<style scoped>
.sub-nav {
  width: 100%;
  font-size: 1.3rem;
  display: inline-block;
  padding: 10px;
  border-bottom: 1px solid;
}
.sub-nav:hover {
  background: darkslategrey;
  /* add linear-gradient in background */
}

#separate-navtop-content {
  background: rgb(32, 67, 90);
}

.datagridview {
  padding: 10px 0;
  width: 100%;
  /* overflow-y: scroll; */
}
table {
  display: grid;
  grid-auto-flow: row;
}
tr {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border-bottom: 1px solid grey;
}
th,
td {
  padding: 8px;
  font-size: 1.1rem;
}
th {
  background: darkslategray;
  color: azure;
}
#th1 {
  grid-column-start: 1;
  grid-column-end: 2;
}
#th2 {
  grid-column-start: 2;
  grid-column-end: 3;
}
#th3 {
  grid-column-start: 3;
  grid-column-end: 4;
}
#th4 {
  grid-column-start: 4;
  grid-column-end: 5;
}
#th5 {
  grid-column-start: 5;
  grid-column-end: 6;
}
#th6 {
  grid-column-start: 6;
  grid-column-end: 7;
}
#th7 {
  grid-column-start: 7;
  grid-column-end: 8;
}
#th8 {
  grid-column-start: 8;
  grid-column-end: 9;
}
</style>
