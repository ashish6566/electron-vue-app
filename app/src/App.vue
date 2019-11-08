<template>
  <v-app id="app">
    <!-- Provides the application the proper gutter -->
    <v-system-bar window color="transparent">
      <div id="win-controls">
        <v-btn text tile>
          <v-icon dense>mdi-minus</v-icon>
        </v-btn>
        <!-- <v-btn text tile>
          <v-icon dense>mdi-checkbox-blank-outline</v-icon>
        </v-btn>-->
        <v-btn text tile>
          <v-icon dense>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-system-bar>
    <router-view></router-view>
  </v-app>
  <!-- <div id="app">
    
  </div>-->
</template>
<script>
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
  /* background: linear-gradient(to right, #0f0c29, #302b63, #24243e); */
  font-family: "Roboto", sans-serif;
}
#app {
  /* background: linear-gradient(to right, #0f0c29, #302b63, #24243e); */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(49, 49, 49);
}
#home-container {
  padding: 0;
}
#win-controls {
  position: absolute;
  right: 3px;
}
#back-home {
  width: 100%;
  display: block;
  padding: 10px 0;
}
/* .nav-top {
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  color: #0f0c29;
} */
</style>
