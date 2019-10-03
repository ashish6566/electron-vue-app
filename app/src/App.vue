<template>
  <div id="app">
    <AppControlBar />
    <router-view />
  </div>
</template>
<script>
import AppControlBar from "@/components/App-ControlBar";
export default {
  components: {
    AppControlBar
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300&display=swap");
* {
  font-size: 12px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
body {
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  font-family: "Roboto", sans-serif;
}
#app {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.left-sidebar #back-home a {
  font-size: 15px;
}
.about,
.account,
.admin,
.exams-scores,
.employee,
.library,
.student,
.transportation,
.setting {
  height: 96vh;
  background: white;
  color: #3a3d40;
}
.left-sidebar {
  width: 20%;
  height: 100%;
  /* padding-left: 10px; */
  background-color: rgb(46, 58, 70);
}
a {
  text-decoration: none;
  color: #fff;
}
#back-home {
  width: 100%;
  display: block;
  padding: 10px 0;
}
hr {
  size: 1px;
  background: white;
  /* margin-bottom: 5px; */
}
.page-title {
  padding: 15px;
  color: white;
  font-size: 16px;
}
.content {
  width: 80%;
  position: absolute;
  right: 0;
  top: 25px;
  padding: 10px;
}
.nav-top {
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  color: #0f0c29;
}
label {
  font-size: 1.3rem;
  padding: 10px;
}
input {
  margin-bottom: 5px;
  font-size: 14px;
  padding: 5px auto;
  border: 1px solid rgb(192, 191, 191);
  border-radius: 1px;
  box-shadow: 5px 5px 20px rgb(224, 220, 220);
}
.home {
  padding-top: 0px;
}
</style>
