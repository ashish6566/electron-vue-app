<template>
  <div class="home">
    <div class="container">
      <div class="head-title">
        <h2>Name of Organization<!-- require a component to display name as required--></h2>
      </div>
        <div class="grid-dashboards">
          <div class="nav-link" id="rlAccount">
            <router-link to="/student">Students</router-link>
          </div>
          <div class="nav-link" id="rlEmployee">
            <router-link to="/employee">Employee</router-link>
          </div>
          <div class="nav-link" id="rlExamsAndScores">
            <router-link to="/account">Account</router-link>
          </div>
          <div class="nav-link" id="rlLibrary">
            <router-link to="/exams_score">Exams and Scores</router-link> 
          </div>
          <div class="nav-link" id="rlHostel">
            <router-link to="/library">Library</router-link>
          </div>
          <div class="nav-link" id="rltransportation">
            <router-link to="/transportation">Transportation</router-link>
          </div>
          <div class="nav-link" id="rlAdmin">
            <router-link to="/admin">Admin</router-link>
          </div>
        </div><!--End of grid-dashboard-->
    </div><!--End of container-->
  </div><!--End of Home-->
</template>

<script>
// @ is an alias to /src
//import router from '@/router.js'

export default {
  name: 'home'
}
</script>

<style>
.home{
  padding-top: 50px;
}
.container{
  display: flex;
  text-align: center;
  flex-direction: column;
  width:80%;
  margin: 0 auto;
}
.grid-dashboards a{
  text-decoration: none;
  color: #fff;
}
/* .head-title */
.head-title{
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.head-title h2{
  font-size: 45px;
}

/* .grid-dashboards */
.grid-dashboards{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows:100px 100px 100px;
  align-items: center;
}


</style>
