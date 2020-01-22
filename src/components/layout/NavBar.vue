<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <span v-for="(route,index) in routes" :key="index">
          <router-link :to="route.path" v-if="route.show === true">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                
                  <span v-if="is_login && route.name === 'Login' ">Log Out</span>
                <span v-else>{{ route.name }}</span> 
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </span>
      </v-list>
    </v-navigation-drawer>

    <template v-if="$vuetify.breakpoint.mdAndDown">
      <v-app-bar app dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ toolBarTitle }}</v-toolbar-title>
      </v-app-bar>
    </template>

    <template v-if="$vuetify.breakpoint.lg">
      <div>
        <v-app-bar fixed dark>
          <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

          <v-toolbar-title>Page title</v-toolbar-title>

          <v-spacer></v-spacer>

          <span v-for="(route,index) in routes" :key="index">
            <router-link :to="route.path" :key="index" v-if="route.show">
              <v-btn text :key="index">{{ route.name }}</v-btn>
            </router-link>
          </span>
        </v-app-bar>
      </div>
    </template>

    <template v-if="$vuetify.breakpoint.lg">
      <v-content style="margin-top:60px !important">
        <router-view></router-view>
      </v-content>
    </template>

    <template v-if="$vuetify.breakpoint.mdAndDown">
      <v-content>
        <router-view></router-view>
      </v-content>
    </template>
  </v-app>
</template>

<script>
import routes from "../../route";
import { mapState } from "vuex";

export default {
  props: {
    source: String
  },
  data: () => ({
    routes: routes,
    drawer: false,
    is_login: false
  }),
  computed: {
    ...mapState(["toolBarTitle", "loginStatus"])
  },
  beforeMount() {
    this.is_login = this.$store.getters.loginStatus;
  },
  created() {
    this.$vuetify.theme.dark = true;
    console.log();
  }
};
</script>

<style>
a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

.router-link-exact-active {
  color: white;
}
</style>