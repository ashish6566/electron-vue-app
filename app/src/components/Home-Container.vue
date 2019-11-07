<template>
  <div class="home-container">
    <div class="head-title">
      <div class="headDiv">
        <h2>
          Shanti Academy
          <br />Information Management System
          <span id="copyright">&copy;</span>
          <!-- require a component to display name as required-->
        </h2>

        <div class="descDiv">
          <p id="head-desc">A Management System Specially Created for Shanti Academy.</p>
        </div>

        <div class="aboutDiv">
          <a id="btnAbout">About Developer</a>
        </div>
      </div>
    </div>

    <v-container
      align-baseline
      align-center
      align-content-center
      align-content-end
      align-content-space-around
      align-content-space-between
      align-content-start
      align-end
      align-start
      d-flex
      fill-height
      fluid
      grid-list-md
      id="dashboard-container"
      justify-center
      justify-end
      justify-space-around
      justify-space-between
      justify-start
      reverse
      tag="div"
      wrap
    >
      <div class="dashboard-section">
        <p>DASHBOARD</p>
      </div>
    </v-container>

    <v-container class="grid-dashboards" fluid>
      <v-layout row wrap justify-center>
        <v-flex xs5 md4 ma-2>
          <router-link to="/student">
            <v-card class="nav-link">
              <v-icon>fas fa-user-graduate</v-icon>
              <v-card-subtitle class="nav-label">Students</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs5 md4 ma-2>
          <!-- To do : add v-flex outside v-card -->
          <router-link to="/employee">
            <v-card class="nav-link">
              <v-icon>fas fa-chalkboard-teacher</v-icon>
              <v-card-subtitle class="nav-label">Employee</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs5 md4 ma-2>
          <router-link to="/account">
            <v-card class="nav-link">
              <v-icon>fas fa-money-check-alt</v-icon>
              <v-card-subtitle class="nav-label">Account</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs5 md4 ma-2>
          <router-link to="/exams_score">
            <v-card class="nav-link" id="rlExams-score">
              <v-icon>fas fa-book</v-icon>
              <v-card-subtitle class="nav-label">Exams &amp; Scores</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs5 md4 ma-2>
          <router-link to="/library">
            <v-card class="nav-link" id="rlLibrary">
              <v-icon>fas fa-hotel</v-icon>
              <v-card-subtitle class="nav-label">Library</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs5 md4 ma-2>
          <router-link to="/transportation">
            <v-card class="nav-link" id="rltransportation">
              <v-icon>fas fa-bus</v-icon>
              <v-card-subtitle class="nav-label">Transportation</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs5 md4 ma-2>
          <router-link to="/admin">
            <v-card class="nav-link" id="rlAdmin">
              <v-icon>fas fa-users-cog</v-icon>
              <v-card-subtitle class="nav-label">Admin</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex xs5 md4 ma-2>
          <router-link to="/setting">
            <v-card class="nav-link" id="rlAdmin">
              <v-icon>fas fa-cogs</v-icon>
              <v-card-subtitle class="nav-label">Setting</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <!--End of grid-dashboard-->
  </div>
  <!--End of container-->
</template>
<script>
export default {
  name: "Container"
};
</script>

<style scoped>
/* .container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
} */

.head-title {
  width: 100%;
  max-height: 40vh;
  padding: 30px;
  /* padding-left: 35px; */
  background: url(../assets/whitelaptopcropped.jpg) no-repeat;
  background-size: cover;
  background-position: 29% 90%;
  margin-bottom: 20px;
}
.head-title h2 {
  font-size: 35px;
  /* color:  #353535 ; */
  color: #575758;
  margin-bottom: 15px;
}

.head-title h2 #copyright {
  font-size: 15px;
}

.head-title #head-desc {
  font-size: 15px;
  color: #353535;
  margin-bottom: 20px;
}

.head-title .aboutDiv {
  padding-right: 100px;
}

.head-title #btnAbout {
  background-color: #ff9f10;
  padding: 10px 20px;
  font-size: 15px;
}
/* 
.dashboard-container .dashboard-section {
  width: 95%;
  margin: auto;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  margin-bottom: 20px;
}

.dashboard-container .dashboard-section p {
  font-size: 20px;
  padding-top: 5px;
  text-align: center;
  border-bottom: 2px solid;
  border-bottom-color: #07d452;
}

.grid-dashboards {
  justify-content: center;
}
 
.grid-dashboards a {
  font-size: 30px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}
.nav-link {
  /* display: flex;
  flex-flow: column; */
/* align-items: center; */
/* justify-content: center; */
/* height: 100%;
} 
   */
/*  */

.grid-dashboards .nav-link .nav-icon {
  padding: 10px;
}
.grid-dashboards .nav-link .nav-icon svg {
  font-size: 30px;
}
.grid-dashboards .nav-link .nav-label p {
  font-size: 15px;
}
.grid-dashboards > a:hover {
  border: #07d452 1px solid;
  margin: -1.1167px;
}

.grid-dashboards .nav-link a:hover .nav-label p {
  color: #07d452;
}
/* */
</style>
