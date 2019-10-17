<template>
  <table id="data-grid-view">
    <thead>
      <tr>
        <th v-for="(col, index) in columns" v-bind:key="index">{{col}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td v-for="col in columns" :key="col">{{row[col]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "DataGridView",
  data() {
    return {
      rows: []
    };
  },
  computed: {
    // columns: () => {
    //   if (this.rows.length == 0) {
    //     return [];
    //   }
    //   return Object.keys(this.rows[0]);
    // },
    ...mapGetters({
      students: "STUDENTS"
    }),
    ...mapActions({
      getstudents: "GET_STUDENTS"
    })
  },
  mounted() {
    console.log(rows);
  }
};
</script>
