<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>
      Lets you perform the School Management
      <br/>more conveniently
    </p>
    <h3>Dashboards</h3>
    <div class="grid-dashboards">
      <div class="nav-link" id="btnStudent">
        <a>Student</a>
      </div>
      <div class="nav-link" id="btnAccount">
        <a>Account</a>
      </div>
      <div class="nav-link" id="btnEmployee">
        <a>Employee</a>
      </div>
      <div class="nav-link" id="btnExamsAndScores">
        <a>Exams and Scores</a>
      </div>
      <div class="nav-link" id="btnLibrary">
        <a>Library</a>
      </div>
      <div class="nav-link" id="btnHostel">
        <a>Hostel</a>
      </div>
      <div class="nav-link" id="btntransportation">
        <a>Transportation</a>
      </div>
      <div class="nav-link" id="btnAdmin">
        <a>Admin</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
