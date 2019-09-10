<template>

  <div class="home">
    <div class="container">
      <div class="head-title">
        <h2>Name of Organization<!-- require a component to display name as required--></h2>
      </div>
        <div class="grid-dashboards">
          <div class="nav-link" id="rlAccount">
            <div class="nav-icon">
               <i class="fas fa-user-graduate"></i>
            </div>
            <div class="nav-label">
              <router-link to="/student">Students</router-link>
            </div>
          </div>

          <div class="nav-link" id="rlEmployee">
            <div class="nav-icon">
               <i class="fas fa-chalkboard-teacher"></i>
            </div>
            <div class="nav-label">
               <router-link to="/employee">Employee</router-link>
            </div>
          </div>

          <div class="nav-link" id="rlExamsAndScores">
            <div class="nav-icon">
               <i class="fas fa-money-check-alt"></i>
            </div>
             <div class="nav-label">
                <router-link to="/account">Account</router-link>
             </div>
          </div>

          <div class="nav-link" id="rlLibrary">
            <div class="nav-icon">
               <i class="fas fa-book"></i>
            </div>
            <div class="nav-label">
               <router-link to="/exams_score">Exams &amp; Scores</router-link> 
            </div>
          </div>

          <div class="nav-link" id="rlHostel">
            <div class="nav-icon">
               <i class="fas fa-hotel"></i>
            </div>
            <div class="nav-label">
               <router-link to="/library">Library</router-link>
            </div>
          </div>

          <div class="nav-link" id="rltransportation">
            <div class="nav-icon">
               <i class="fas fa-bus"></i>
            </div>
            <div class="nav-label">
               <router-link to="/transportation">Transportation</router-link>
            </div>
          </div>

          <div class="nav-link" id="rlAdmin">
            <div class="nav-icon">
                <i class="fas fa-users-cog"></i>
            </div>
            <div class="nav-label">
                <router-link to="/admin">Admin</router-link>
            </div>    
          </div>

        </div><!--End of grid-dashboard-->
        <div class="footer-options">
          <ul>
            <li><i class="fas fa-cogs"></i></li>
            <li><p>Setting</p></li><!--router-link required-->
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
  justify-content: space-around;
  padding-right: 20px;
  font-size: 30px;
}


  
 



 


.grid-dashboards .nav-link:hover{
    border: #fff solid 1px;
}

/* .footer-options */
/* .footer-options{

} */

.footer-options ul{
  list-style: none;
  display: flex;
}

.footer-options li{
  padding-right: 30px;
}


</style>
