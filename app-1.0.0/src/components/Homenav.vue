<template>
  <div class="homenav">
    <router-link to="/" id="homelink">Home</router-link>
  </div>
</template>

<script>
import router from '../router.js'
export default {
  name: 'Homenav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homenav{
  font-size: 2rem;
  position: absolute;
  left: 30px;
}
#homelink{
  display: inline-block;
}
</style>
