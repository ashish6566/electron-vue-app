<template>
  <!-- npm run serve -->
  <!-- npm run electron:serve -->
  <div class="home">
    <Container></Container>
  </div>
  <!--End of Home-->
</template>

<script>
// @ is an alias to /src
import Container from "@/components/Home-Container.vue";

export default {
  name: "home",
  components: {
    Container
  }
};
</script>
<style scoped></style>
