<template>
  <div id="app">
    <div class="controlbar">
      <div class="controls">
        <button class="btnControl">_</button>
      </div>
      <div class="controls">
        <button class="btnControl">X</button>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
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
  background-color: aliceblue;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
}
#btnClose:hover{
  background-color: red;
}

</style>
