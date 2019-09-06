<template>
  <div class="home">
    <HomeComponent msg="Shanti Academy"/>
    <h1>{{ msg }}</h1>
    <p>
      Lets you perform the School Management
      <br/>more conveniently
    </p>
    <h3>Dashboards</h3>
    <div class="grid-dashboards">
      <div class="nav-link" id="btnStudent">
        <router-link to="/about">About</router-link>
      </div>
      <div class="nav-link" id="btnAccount">
        <router-link to="/student">Stuents</router-link>
      </div>
      <div class="nav-link" id="btnEmployee">
        <router-link to="/employee">Employee</router-link>
      
      </div>
      <div class="nav-link" id="btnExamsAndScores">
        <router-link to="/account">Account</router-link>
      
      </div>
      <div class="nav-link" id="btnLibrary">
        <router-link to="/exams_score">Exams and Scores</router-link> |
      
      </div>
      <div class="nav-link" id="btnHostel">
        <router-link to="/library">Library</router-link>
      
      </div>
      <div class="nav-link" id="btntransportation">
        <router-link to="/transportation">Transportation</router-link>
      </div>
      <div class="nav-link" id="btnAdmin">
        <router-link to="/admin">Admin</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import router from '../router.js'

export default {
  name: 'home'
}
</script>
