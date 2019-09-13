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


</style>