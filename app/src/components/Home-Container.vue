<template>
  <v-container class="home" fluid>
    <!--  -->
    <v-container class="head-title" fluid>
      <v-container grid-list-xs>
        <h1>
          Shanti Academy
          <br />Information Management System
          <span id="copyright">&copy;</span>
          <!-- require a component to display name as required-->
        </h1>
        <p id="head-desc">A Management System Specially Created for Shanti Academy.</p>
      </v-container>
      <!-- <v-container id="descDiv">
      </v-container>-->
      <v-container>
        <v-btn id="website-link" tile orange>go the school website</v-btn>
      </v-container>
    </v-container>
    <!-- end of head-title -->
    <v-container id="dashbrd-title-container">
      <v-layout row justify-center>
        <strong id="dashboard-title">Dashboard</strong>
      </v-layout>
    </v-container>
    <!-- end of dashboard-title-container -->
    <v-container class="dashboard-container" fill-height fluid>
      <v-layout row wrap justify-center>
        <!--  -->
        <v-flex sm4 md3 ma-1>
          <router-link to="/student">
            <v-card class="nav-link" tile>
              <v-icon class="dashbrd-icons">fas fa-user-graduate</v-icon>
              <v-card-subtitle class="nav-label">Students</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex sm4 md3 ma-1>
          <!-- To do : add v-flex outside v-card -->
          <router-link to="/employee">
            <v-card class="nav-link" tile>
              <v-icon class="dashbrd-icons">fas fa-chalkboard-teacher</v-icon>
              <v-card-subtitle class="nav-label">Employee</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex sm4 md3 ma-1>
          <router-link to="/account">
            <v-card class="nav-link" tile>
              <v-icon class="dashbrd-icons">fas fa-money-check-alt</v-icon>
              <v-card-subtitle class="nav-label">Account</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex sm4 md3 ma-1>
          <router-link to="/exams_score" tile>
            <v-card class="nav-link" id="rlExams-score" tile>
              <v-icon class="dashbrd-icons">fas fa-book</v-icon>
              <v-card-subtitle class="nav-label">Exams &amp; Scores</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex sm4 md3 ma-1>
          <router-link to="/library" tile>
            <v-card class="nav-link" id="rlLibrary" tile>
              <v-icon class="dashbrd-icons">fas fa-hotel</v-icon>
              <v-card-subtitle class="nav-label">Library</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex sm4 md3 ma-1>
          <router-link to="/transportation" tile>
            <v-card class="nav-link" id="rltransportation">
              <v-icon class="dashbrd-icons">fas fa-bus</v-icon>
              <v-card-subtitle class="nav-label">Transportation</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex sm4 md3 ma-1>
          <router-link to="/admin">
            <v-card class="nav-link" id="rlAdmin" tile>
              <v-icon class="dashbrd-icons">fas fa-users-cog</v-icon>
              <v-card-subtitle class="nav-label">Admin</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>

        <v-flex sm4 md3 ma-1>
          <router-link to="/setting">
            <v-card class="nav-link" id="rlAdmin" tile>
              <v-icon class="dashbrd-icons">fas fa-cogs</v-icon>
              <v-card-subtitle class="nav-label">Setting</v-card-subtitle>
            </v-card>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <!--End of dashboard-contaier -->
  </v-container>
</template>
<script>
export default {
  name: "HomeContainer"
};
</script>

<style scoped>
.home {
  padding: 0;
}
.head-title {
  padding: 0;

  /* background-image: ""; */
}
.head-title h1 {
  font-size: 35px;
  color: #575758; /* change color after head-title gets bg img */
  margin-top: 40px;
}

#copyright {
  font-size: 15px;
}

#head-desc {
  font-size: 15px;
  color: #353535;
}

#website-link {
  background-color: #ff9f10;
  padding: 10px 20px;
  font-size: 15px;
}
#dashbrd-title-container {
  padding: 0;
}

#dashboard-title {
  font-size: 15px;
  padding: 10px;
}

.dashbrd-icons {
  font-size: 48px;
  margin: 10px;
}

.nav-label {
  padding: 7px;
}
</style>
