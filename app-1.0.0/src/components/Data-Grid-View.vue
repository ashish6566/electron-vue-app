<template>
  <table id="data-grid-view">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col">{{col}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row">
        <td v-for="col in columns" :key="col">{{row[col]}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DataGridView",
  data() {
    rows: [
      {
        id: 1,
        name: "Chandler Bing",
        phone: "305-917-1301",
        profession: "IT Manager"
      },
      {
        id: 2,
        name: "Ross Geller",
        phone: "210-684-8953",
        profession: "Paleontologist"
      },
      {
        id: 3,
        name: "Rachel Green",
        phone: "765-338-0312",
        profession: "Waitress"
      },
      {
        id: 4,
        name: "Monica Geller",
        phone: "714-541-3336",
        profession: "Head Chef"
      },
      {
        id: 5,
        name: "Joey Tribbiani",
        phone: "972-297-6037",
        profession: "Actor"
      },
      {
        id: 6,
        name: "Phoebe Buffay",
        phone: "760-318-8376",
        profession: "Masseuse"
      }
    ];
  },
  computed: {
    columns: function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0]);
    }
  }
};
</script>

<style>
</style>