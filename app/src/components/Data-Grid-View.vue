<template>
  <table id="data-grid-view">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col">{{col}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows.id" :key="row.id">
        <td v-for="col in columns" :key="col">{{row[col]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "DataGridView",
  data() {
    rows: [];
  },
  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0]);
    }
  }
  // mounted () {
  //   axios.get("https");
  // },
};
</script>

<style>
</style>