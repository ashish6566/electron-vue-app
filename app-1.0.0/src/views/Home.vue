<template>
<!-- npm run serve -->
<!-- npm run electron:serve -->
  <div class="home">
    <div class="container">
      <div class="head-title">
        <h2>Name of Organization<!-- require a component to display name as required--></h2>
      </div>
        <div class="grid-dashboards">

          <div class="nav-link">
            <router-link to="/student">
              <div class="nav-icon">
                <i class="fas fa-user-graduate"></i>
              </div>
              Students
            </router-link>
          </div>

          <div class="nav-link">
            <router-link to="/employee">
              <div class="nav-icon">
                <i class="fas fa-chalkboard-teacher"></i>
              </div>
              Employee
            </router-link>
          </div>

          <div class="nav-link">
            
            <router-link to="/account">
              <div class="nav-icon">
                <i class="fas fa-money-check-alt"></i>
              </div>            
              Account
            </router-link>
          </div>

          <div class="nav-link" id="rlExams-score">
            <router-link to="/exams_score">
              <div class="nav-icon">
                <i class="fas fa-book"></i>
              </div>
              Exams &amp; Scores
            </router-link> 
          </div>

          <div class="nav-link" id="rlLibrary">
            <router-link to="/library">
              <div class="nav-icon">
                <i class="fas fa-hotel"></i>
              </div>
              Library
            </router-link>
          </div>

          <div class="nav-link" id="rltransportation">
            <router-link to="/transportation">
              <div class="nav-icon">
                <i class="fas fa-bus"></i>
              </div>
              Transportation
            </router-link>
          </div>

          <div class="nav-link" id="rlAdmin"> 
            <router-link to="/admin">
              <div class="nav-icon">
                  <i class="fas fa-users-cog"></i>
              </div>Admin
            </router-link>    
          </div>        
        </div><!--End of grid-dashboard-->
        <div class="footer-options">
          <div class="foot-icon">
            <i class="fas fa-cogs"></i>
          </div>
      </div>
    </div><!--End of container-->  
  </div><!--End of Home-->
</template>

<script>
// @ is an alias to /src
//import router from '../router.js'

export default {
  name: 'home'
}
</script>
