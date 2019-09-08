<template>
  <div id="app">
    <div class="controlbar">
      <div class="controls">
        <button class="btnControl">
          <router-link to="/about" class="router-link" id="rlHome">&#8505;</router-link>
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
    <div class="footer">
      
      <div class="router-link">
        <router-link to="/">&#9776;</router-link>
      </div>
    </div>
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

#btnMin:hover{
  background-color: grey;
}
#btnClose:hover{
  background-color: red;
}
.footer{
  width: 100%;
  padding: 10px 20px;
  position: absolute;
  bottom: 0px;
  display: flex;
}
.routerlink{
  padding: 0 10px;
  font-size: 0px;
}
</style>
