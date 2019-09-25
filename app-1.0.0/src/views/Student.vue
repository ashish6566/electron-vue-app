<template>
  <div class="student">
    <div class="left-sidebar">
      <div class="router-link" id="back-home">
        <router-link to="/">&#9776;&nbsp;Home</router-link>
      </div>
      <hr>
      <h1 class="page-title">Manage Students</h1>
      <hr>  
    </div>
    <div class="content">
      <div class="nav-top">
        Home / Students
      </div>
      <hr id="separate-navtop-content">
      <div class="form">
        <label for="studentName" id="lbl-studentname">Student Name: </label>
        <input type="text" name="student_name" id="student_name" placeholder="Please provide full name">

        <label for="datepicker" id="lbl-dateofbirth">Date of Birth: </label>
        <input type="date" min="2000-01-01" max="2100-12-30" name="datepicker" id="datepicker">

        <label for="gender" id="lbl-gender">Gender: </label>
        <input type="text" name="gender" id="gender" list="list-gender" placeholder="Choose"> 
        <datalist id="list-gender">
          <option value="Male"></option>
          <option value="Female"></option>
          <option value="Others"></option>
        </datalist>

        <label for="guardian-name" id="lbl-guardian-name">Guardian Name: </label>
        <input type="text" name="guardian-name" id="guardian-name" placeholder="Please provide full name">

        <label for="address" id="lbl-address">Address: </label>
        <input type="text" name="address" id="adress" placeholder="minimum street/community, village/town/city, district">

        <label for="phone" id="lbl-phone">Phone No: </label>
        <input type="text" name="phone" id="phone" placeholder="Mobile Phone no.">

        <label for="landline" id="lbl-landline">LandLine: </label>
        <input type="text" name="landline" id="landline" placeholder="(optional)">
        
        <label for="email" id="lbl-email">Email: </label>
        <input type="email" name="email" id="email" placeholder="abc@example.com (optional)">
      </div>
      <div class="datagridview">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'student'
}
</script>

<style scoped>
.form{
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(12, 1fr);
}
#separate-navtop-content{
  background: rgb(32, 67, 90)
}
.form label{
  grid-column-start: 1;
  grid-column-end: 3;
}
input{
  grid-column-start: 3;
  grid-column-end: 8;
  outline: none;
  padding: 10px;
}
#datepicker{
  grid-column-end: 5;
}
#lbl-gender{
  grid-column-start: 5;
  grid-column-end: 6;
  padding-left: 3rem;  
}
#gender{
  grid-column-start: 6;
}
#phone{
  grid-column-end: 5;
}
#lbl-landline{
  grid-column-start: 5;
  grid-column-end: 6;
}
#landline{
  grid-column-start: 6
}
.datagridview{
  margin-top: 15px;
  width: 100%;
}
table{
  display: grid;
  grid-auto-flow: row;
}
tr{
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border-bottom: 1px solid grey;

}
th, td{
  padding: 8px;
  font-size: 1.1rem;
}
th{
  background: darkslategray;
  color: azure;
}
#th1{
  grid-column-start: 1;
  grid-column-end: 2;
}
#th2{
  grid-column-start: 2;
  grid-column-end: 3;
}
#th3{
  grid-column-start: 3;
  grid-column-end: 4;
}
#th4{
  grid-column-start: 4;
  grid-column-end: 5;
}
#th5{
  grid-column-start: 5;
  grid-column-end: 6;
}
#th6{
  grid-column-start: 6;
  grid-column-end: 7;
}
#th7{
  grid-column-start: 7;
  grid-column-end: 8;
}
#th8{
  grid-column-start: 8;
  grid-column-end: 9;
}
</style>