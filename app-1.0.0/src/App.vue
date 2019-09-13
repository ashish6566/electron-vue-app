<template>
  <div id="app">
    <div class="controlbar">
      <div class="window-control">  
        <div class="controls">
          <button class="btnControl" id="btnAbout">
            <router-link to="/about" id="rlHome">&#8505;</router-link>
          </button>
        </div>
        <div class="controls">
            <button class="btnControl" id="btnMin">&#9866;</button>
        </div>
        <div class="controls">
          <button class="btnControl" id="btnClose">&#9747;</button>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
*{
  font-size: 10px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
}
body{
  background:linear-gradient(to right, #0f0c29, #302b63, #24243e);
  font-family: 'Roboto', sans-serif;
}
#app {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.controlbar{
  width: 100%;
  -webkit-app-region: drag;
  height: 25px;
   background-color: #fff8ed;
}
.window-control{
  position: absolute;
  right: 0px;
  display: flex;
  -webkit-app-region: no-drag;
  height: 25px;
}
button{
  border: none;
}
.btnControl{
  font-weight: bold;
  color: #000 ;
  height: 100%;
  width: 35px;
  background-color: transparent;
}
#btnAbout a{
  margin-right: 5px;
}
#btnMin:hover{
  background-color: grey;
}
#btnClose:hover{
  background-color: red;
}
a{
  text-decoration: none;
  color: #fff;
}
.left-sidebar #back-home a{
  color: #000;
}

.about, .account, .admin, .exams-scores, .employee, .library, .student, .transportation{
  height: 100vh;
  background: aliceblue;
  color: #3a3d40;
}
.left-sidebar{
  width: 20%;
  height: 100%;
  padding-left: 10px;
}
#back-home{
  width: 100%;
  display: block;
  padding: 10px 0;
}
hr{
  background:white; 
}
.page-title{
  padding: 10px 0px;
}
.home{
  padding-top: 0px;
 
}
</style>
