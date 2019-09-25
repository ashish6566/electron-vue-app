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
        <router-link to="/">&#9776;&nbsp;Home</router-link>/
      </div>
      <hr>
      <div class="form">
        <label for="studentName">Full Name</label>
        <input type="text" name="student_name" id="student_name">
        
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
  grid-template-columns: repeat(10, 1fr);
}
label{
  grid-column-start: 1;
  grid-column-end: 3;
}
input{
  grid-column-start: 3;
  grid-column-end: 6;
  outline: none;
  padding: 10px;
}
hr{
  margin: 5px 0 10px 0;
  size: 1px;
  background-color: black;
}
</style>