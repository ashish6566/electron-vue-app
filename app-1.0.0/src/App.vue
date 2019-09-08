<template>
  <div id="app">
    <div class="controlbar">
      <div class="controls">
        <button class="btnControl" id="btnMin">_</button>
      </div>
      <div class="controls">
        <button class="btnControl" id="btnClose">x</button>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <div class="routerlink">
        <router-link to="/">Home</router-link>
      </div>
      <div class="routerlink">
        <router-link to="/about">About</router-link>
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
button{
  border: none;
}
.btnControl{
  height: 100%;
  width: 30px;
  background-color: transparent;
  color: black;
  font-weight: bold;
}
#btnMin:hover{
  background-color: grey;
  color: white;
}
#btnClose:hover{
  background-color: red;
  color: white;
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
}
</style>
