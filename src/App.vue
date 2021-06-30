<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
        v-if="Username()"
    >
    </v-navigation-drawer>
    <v-app-bar
        app
        color="primary"
        dark

    >
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="Username()"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-tooltip bottom v-if="Username()">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              class="ma-2"
              text
              icon
              v-bind="attrs"
              v-on="on"
              @click="OnLogoutClicked"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Logout ({{ Username() }})</span>
      </v-tooltip>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>


  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Parse from 'parse';
import {Helper} from "@/./Helper";
import {getModule} from "vuex-module-decorators";
import {YourObjectStore} from "@/store/modules/YourObjectStore";

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false
  }),
  mounted() {
    // load data
    getModule(YourObjectStore).loadItems();
  },

  methods: {
    async OnLogoutClicked() {
      await Parse.User.logOut();
      this.$router.push({
        name: "Login"
      })
    },
    Username: () => {
      return Helper.CurrentUser()?.getUsername();
    }
  }
});
</script>
