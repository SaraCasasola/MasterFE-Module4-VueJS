<template>
  <div>
    <v-app-bar app dark color="amber">
      <v-toolbar-title>Recipe App</v-toolbar-title>
      <v-spacer></v-spacer>
      <label class="mr-10">{{userName}}</label>
      <v-btn depressed @click="onLogout">
        Logout
      </v-btn>
    </v-app-bar>
    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { baseRoutes, localStorageUserKey } from "../../router";
export default Vue.extend({
  name: "AppLayout",
  computed: {
    userName() {
      return localStorage.getItem(localStorageUserKey);
    }
  },
  methods: {
    onLogout() {
      localStorage.removeItem(localStorageUserKey);
      this.$router.push(baseRoutes.root);
    }
  }
});
</script>