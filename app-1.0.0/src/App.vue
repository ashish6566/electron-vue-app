<template>
  <div id="app">
    <ControlBar></ControlBar>
    <router-view/>
  </div>
</template>
<script>
import ControlBar from '@/components/ControlBar.vue'

export default {
  components: {
    ControlBar
  }
}
</script>
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

a{
  text-decoration: none;
  color: #fff;
}

.left-sidebar #back-home a{
  font-size: 15px;

}
.about, .account, .admin, .exams-scores, .employee, .library, .student, .transportation, .setting{
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
.nav-top{
  width: 100%;
  height: 30px;
}
label{
  font-size: 14px;
  padding: 5px;
}

input{
  font-size: 14px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px 20px rgb(224, 220, 220);
}

.home{
  padding-top: 0px;
 
}
</style>
