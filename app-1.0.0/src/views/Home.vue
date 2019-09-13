<template>
<!-- npm run serve -->
<!-- npm run electron:serve -->
  <div class="home">
    <div class="container">
      <div class="head-title">
        <div class="headDiv">
             <h2>Shanti Academy <br> Information Management System<span id="copyright">&copy;</span><!-- require a component to display name as required--></h2>
        </div>
        <div class="descDiv">
           <p id="head-desc">School Management System Specially Created for Shanti Academy.</p>
        </div>
        <div class="aboutDiv">
           <a id="btnAbout">About Developer</a>
        </div>
      </div>

      <div class="dashboard-container">
        <div class="dashboard-section">
            <p>DASHBOARD</p>
         </div>
        <div class="grid-dashboards">
          <router-link to="/student">
            <div class="nav-link">
                <div class="nav-icon">
                  <i class="fas fa-user-graduate"></i>
                </div>
                <div class="nav-label">
                    <p>Students</p>
                </div>
            </div>
          </router-link>
  
          <router-link to="/employee">
            <div class="nav-link"> 
                <div class="nav-icon">
                  <i class="fas fa-chalkboard-teacher"></i>
                </div>
                <div class="nav-label">
                     <p>Employee</p>
                </div> 
            </div>
          </router-link>
  
          <router-link to="/account">
            <div class="nav-link">
                <div class="nav-icon">
                  <i class="fas fa-money-check-alt"></i>
                </div>       
                <div class="nav-label">
                   <p>Account</p>
                </div>     
            </div>
          </router-link>
  
          <router-link to="/exams_score">
            <div class="nav-link" id="rlExams-score">
                <div class="nav-icon">
                  <i class="fas fa-book"></i>
                </div>
                <div class="nav-label">
                   <p>Exams &amp; Scores</p>
                </div>  
            </div>
          </router-link> 
          
           <router-link to="/library">
            <div class="nav-link" id="rlLibrary">
                <div class="nav-icon">
                  <i class="fas fa-hotel"></i>
                </div>
                <div class="nav-label">
                   <p>Library</p>
                </div> 
            </div>
          </router-link>  
  
          <router-link to="/transportation">
            <div class="nav-link" id="rltransportation">
            
                <div class="nav-icon">
                  <i class="fas fa-bus"></i>
                </div>
                <div class="nav-label">
                   <p>Transportation</p>
                </div> 
            </div>
          </router-link>
  
          <router-link to="/admin">
            <div class="nav-link" id="rlAdmin"> 
                <div class="nav-icon">
                    <i class="fas fa-users-cog"></i>
                </div>
                <div class="nav-label">
                  <p>Admin</P>
                </div> 
            </div>  
          </router-link> 

           <a><!--Need router-link-->
          <div class="nav-link" id="rlAdmin"> 
            <div class="nav-icon">
              <i class="fas fa-cogs"></i>
            </div>
              <div class="nav-label">
                    <p>Setting</P>
              </div> 
          </div>
        </a>       
        </div><!--End of grid-dashboard-->
      </div> <!--End of Dashboard-container-->
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
<style scoped>

.container{
  display: flex;
  flex-direction: column;
  width:100%;
  margin: 0 auto;
}
.head-title{
  height: 35vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  padding: 30px;
  background: url(../assets/whitelaptopcropped.jpg) no-repeat;
  background-size: cover;
  background-position: 29% 90%;
  margin-bottom: 20px;
}
.head-title h2{
  font-size: 35px;
  /* color:  #353535 ; */
  color:    #575758  ;
  margin-bottom: 15px;
}

.head-title  h2 #copyright{
  font-size: 15px;
}

.head-title #head-desc{
  font-size: 15px;
  color:  #353535 ;
  margin-bottom: 20px;
}

.head-title .aboutDiv
{
  padding-right: 100px;
}

.head-title #btnAbout{
  background-color: #ff9f10;
  padding: 10px 20px;;
  font-size: 15px;
}

.dashboard-container .dashboard-section{
  width: 95%;
  margin: auto;
  height:5vh;
 display: flex;
  justify-content: center;
  align-items: center;
 
 background-color: rgba(255, 255, 255, .15);  
 backdrop-filter: blur(5px);
 margin-bottom:20px;

}

.dashboard-container .dashboard-section p{
  font-size:20px;
  padding-top: 5px;
   text-align: center;
   border-bottom: 2px solid;
   border-bottom-color: #07d452;
  
}

.grid-dashboards{
  display: grid;
  grid-template-columns: 19.3% 19.3% 19.3% 19.3% 19.3%;
  grid-template-rows: 140px 140px;
  margin-bottom: 0px;
  grid-gap:14px;
  width: 95%;
  margin: auto;
}


.grid-dashboards a{
  font-size: 30px;
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px)
 
}

.grid-dashboards .nav-link{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.grid-dashboards .nav-link .nav-icon{
  padding: 10px;


}
.grid-dashboards .nav-link .nav-icon svg{
  font-size: 30px;
}
.grid-dashboards .nav-link .nav-label p{
  font-size: 15px;
}
.grid-dashboards > a:hover{
    border:  #07d452 1px  solid;
    margin: -1.1167px;

}

.grid-dashboards .nav-link a:hover .nav-label  p{
      color:#07d452;
}

</style>