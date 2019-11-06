<template>
  <div class="home">
    <HomeContainer></HomeContainer>
  </div>
  <!--End of Home-->
</template>

<script>
// @ is an alias to /src
import HomeContainer from "@/components/Home-Container.vue";

export default {
  name: "home",
  components: {
    HomeContainer
  }
};
</script>
<style scoped>
</style>
