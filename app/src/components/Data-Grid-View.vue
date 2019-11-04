<template>
  <table id="data-grid-view" class="table-responsive">
    <tbody>
      <tr>
        <td id="table-head" v-for="(col, index) in columns" v-bind:key="index">{{ col }}</td>
      </tr>
      <tr v-for="(row, index) in rows" :key="index">
        <td v-for="col in row" :key="col">{{ col }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DataGridView",
  props: {
    rows: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  }
};
</script>
<style>
.table-responsive {
  overflow: auto;
  width: 100%;
}
#table-head {
  background: rgb(130, 165, 160);
}
td {
  border-bottom: 1px solid #ddd;
  padding: 12px;
  font-size: 1.1rem;
  text-align: left;
}
tr:hover {
  background-color: #f5f5f5;
}
</style>
