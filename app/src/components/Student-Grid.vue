<template>
  <div class="student-grid">
    <p>Students Data Grid View</p>
    <DataGridView v-bind:rows="students" v-bind:columns="keys" />
    <!-- End of table-responsive-->
  </div>
  <!--End of Student-grid-->
</template>

<script>
import axios from "axios";
import DataGridView from "@/components/Data-Grid-View.vue";
export default {
  name: "StudentGrid",
  data() {
    return {
      students: [],
      keys: []
    };
  },
  components: {
    DataGridView
  },
  mounted() {
    axios
      .get("http://localhost:3000/students")
      .then(res => {
        this.students = res.data;
        this.keys = Object.keys(this.students[0]);
      })
      .catch(e => console.log(e));
  }
};
</script>

<style>
</style>
