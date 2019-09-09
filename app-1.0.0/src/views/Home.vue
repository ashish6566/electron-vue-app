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
        <div class="footer-options">
          <ul>
            <li><p>About</p></li>
            <li><p>Setting</p></li>
          </ul>
        </div>
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
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
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
a{
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
  grid-template-columns: 30% 30% 30%;
  grid-template-rows:100px 100px 100px;
 
  margin-bottom: 50px;
  grid-gap:10px;
}

.grid-dashboards .nav-link{
   display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  font-size: 30px;
}


  
 



 


.grid-dashboards .nav-link:hover{
    border: #fff solid 1px;
}

/* .footer-options */
.footer-options{

}

.footer-options ul{
  list-style: none;
  display: flex;
}

.footer-options li{
  padding-right: 30px;
}


</style>
