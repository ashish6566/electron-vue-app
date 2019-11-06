<template>
  <!-- <v-navigation-drawer>
    <hr />
      <h1 class="page-title"></h1>
    <hr />
    <div class="sub-view-link" id="mng-studentclass">
      <a class="sub-nav" to="/student/register">Register New Students</a>
      <a class="sub-nav" to="/student/classes">Update Grades of Students</a>
    </div>
  </v-navigation-drawer>-->
  <v-navigation-drawer permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Manage Students</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.key">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.items }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [[{}]]
    };
  }
};
</script>


//        To Do
//        - Provide data
