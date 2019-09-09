<template>
  <div class="about">
    <div class="header">
      <div class="router-link" id="back-home">
        <router-link to="/">&#9776;&nbsp;Home</router-link>
      </div>  
    </div>
    <h1>About us</h1>
    
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.header{
  width: 20%;
  padding: 10px;
  display: flex;
  
}
#back-home{
  display: inline-block;
  height: 25px;
}
</style>