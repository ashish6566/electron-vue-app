<template>
  <div id="app">
    <div class="controlbar">
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
    <router-view/>
  </div>
</template>

<style>
*{
  font-size: 1rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  height: 100vh;
}
.controlbar{
  width: 100%;
  -webkit-app-region: drag;
  -webkit-user-select: none;
  height: 25px;
  display: flex;
  justify-content: flex-end;
}
/* .controls{
  
} */
button {
  border: none;
}
.btnControl{
  font-weight: bold;
  color: whitesmoke;
  height: 100%;
  width: 35px;
  background-color: transparent;
}
#btnAbout{
  margin-right: 5px;
}
#btnMin:hover{
  background-color: grey;
}
#btnClose:hover{
  background-color: red;
}

.footer{
  width: 100%;
  height: 25px;
  position: absolute;
  bottom: 0px;
}
.about, .account, .admin, .exams-scores, .employee, .library, .student, .transportation{
  height: 100%;
  background: aliceblue;
  color: #3a3d40;
}
.left-sidebar{
  width: 20%;
  height: 100%;
  padding-left: 10px;
  /* display: flex; */ 
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

</style>
