<template>
  <v-app id="app">
    <!-- Provides the application the proper gutter -->

    <v-container id="app-bar" fluid pa-0>
      <v-app-bar-nav-icon id="btn-home" @click="returnhome" />
      <v-btn class="btn-ctrl" icon @click="minimize">
        <v-icon id="btn-min">mdi-minus</v-icon>
      </v-btn>&nbsp;&nbsp;
      <v-btn class="btn-ctrl" icon @click="close">
        <v-icon id="btn-close">mdi-close</v-icon>
      </v-btn>
    </v-container>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isHome: true
    };
  },
  methods: {
    close() {
      var window = this.$electron.remote.BrowserWindow.getFocusedWindow();
      window.close();
    },
    minimize() {
      var window = this.$electron.remote.BrowserWindow.getFocusedWindow();
      window.minimize();
    },
    returnhome() {
      this.$router.push("/");
    }
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
#app-bar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
  padding: 0%;
}

.btn-ctrl {
  position: relative;
  left: calc(100% - 130px);
}
#btn-close:hover {
  color: red;
}

#btn-min:hover {
  color: darkslateblue;
}

/* #back-home {
  position: relative;
  right: 50%; 
} */
</style>
