<template>
  <div class="home">
    <HomeComponent msg="Shanti Academy"/>
    <div class="">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'home',
  components: {
    HomeComponent
  }
}
</script>
