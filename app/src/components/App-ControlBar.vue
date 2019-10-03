<template>
  <div class="app-controlbar">
    <div class="window-control">
      <div class="controls">
        <button class="btnControl" id="btnAbout">
          <router-link to="/about" id="rlHome">&#8505;</router-link>
        </button>
      </div>
      <div class="controls">
        <button class="btnControl" id="btnMin" v-on:click="minimize">&#9866;</button>
      </div>
      <div class="controls">
        <button class="btnControl" id="btnClose" v-on:click="close">&#9747;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppControlBar",
  methods: {
    close: function() {
      var window = this.$electron.remote.BrowserWindow.getFocusedWindow();
      window.close();
    },
    minimize: function() {
      var window = this.$electron.remote.BrowserWindow.getFocusedWindow();
      window.minimize();
    }
  }
};
</script
>)

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controlbar {
  background-color: rgb(44, 44, 44);
  width: 100%;
  -webkit-app-region: drag;
  height: 25px;
  background-color: rgb(3, 41, 41);
}
.window-control {
  position: absolute;
  right: 0px;
  display: flex;
  -webkit-app-region: no-drag;
  height: 25px;
}
button {
  border: none;
  outline: none;
  font-size: 15px;
}
.btnControl {
  font-weight: bold;
  height: 100%;
  width: 40px;
}
#btnAbout a {
  height: 100%;
  font-size: 16px;
  color: darkslategray;
}
#btnMin:hover,
#btnAbout:hover {
  background-color: rgb(199, 199, 199);
}
#btnClose:hover {
  background-color: red;
}
</style>
