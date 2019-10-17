<template>
  <div class="student-grid">{{STUDENTS}}</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "StudentGrid",
  computed: {
    ...mapGetters(["STUDENTS"])
  },
  methods: {
    ...mapActions(["LOAD_STUDENTS"])
  },
  mounted() {
    LOAD_STUDENTS();
  }
};
</script>

<style>
</style>