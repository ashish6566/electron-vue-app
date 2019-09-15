<template>
  <div class="controlbar">
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
const {BrowserWindow} = require('electron').remote

export default {
  name: 'ControlBar',
  methods: {
    close: function(){
      var window = BrowserWindow.getFocusedWindow();
      window.close();
    },
    minimize: function(){
      var window = BrowserWindow.getFocusedWindow();
      window.minimize();
    }
  }
}
</script>)

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.controlbar{
  background-color: rgb(44, 44, 44);
}
button{
  border: none;
  outline: none;
  font-size: 15px;
}

.btnControl{
  font-weight: bold;
  height: 100%;
  width: 40px;
}

#btnAbout a{
  height: 100%;
  font-size: 16px;
  color: darkslategray;
}
#btnMin:hover, #btnAbout:hover{
  background-color: rgb(199, 199, 199);
}

#btnClose:hover{
  background-color: red;
}

</style>
