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
*{
  font-size: 10px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
body{
  background: linear-gradient(to right, #000046, #1cb5e0);
}
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.controlbar{
  width: 100%;
  -webkit-app-region: drag;
  height: 25px;
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
a{
  text-decoration: none;
  color: #fff;
}
.left-sidebar #back-home a{
  font-size: 15px;

}
.about, .account, .admin, .exams-scores, .employee, .library, .student, .transportation{
  height: 96vh;
  background: white;
  color: #3a3d40;
}
.left-sidebar{
  width: 20%;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(6, 41, 71)
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
  color: white;
  font-size: 16px;
}
.content{
  width: 80%;
  position: absolute;
  right: 0;
  top: 25px; 
  padding: 10px;
}
label{
  font-size: 14px;
  padding: 5px;
  text-shadow: 5px 5px 10px grey;
}
input{
  font-size: 14px;
  padding: 2px;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px 10px grey;
}
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
.head-title{
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head-title h2{
  font-size: 45px;
}
.grid-dashboards{
  display: grid;
  grid-template-columns: 34% 33.33% 33.33%;
  grid-template-rows:120px 120px 120px;
  margin-bottom: 100px;
  grid-gap:14px;
}
.grid-dashboards .nav-link{
  display: flex;
  align-items: center;
  justify-content:left;
  padding-right: 20px;
  /* font-size: 40px; */
  box-sizing: border-box; 
}
.grid-dashboards .nav-link a .nav-icon{
  padding: 10px;
  margin: 0px auto;
}
.grid-dashboards .nav-link a .nav-icon svg{
  width: 90px;
  height: 80px;
}
.grid-dashboards .nav-link a{
  font-size: 16px;
  margin: 0px auto;
}
.grid-dashboards .nav-link:hover{
    /* border: #fff solid 1px; */
      /* background: linear-gradient(to bottom, #ff8008, #ffc837); */
    border:  #ED8F03 1px  solid;
    margin: -1.1167px;
}
.footer-options{
  position: absolute;
  bottom: 10px;
  left: 30px;
  display: flex;
  margin-left:30px;
  padding: 2px 3px;
}
.footer-options .foot-icon{
  padding-right: 10px;
   color: #ED8F03;
}
.footer-options .foot-icon svg{
  width: 30px;
  height: 30px;
}
.footer-options:hover{
   /* background-color:   #ED8F03; */
     color: #fff;  
}
.footer-options .foot-label{
  color: #ED8F03;
}
</style>
