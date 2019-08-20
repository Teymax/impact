14yuio<template>
  <v-app class="white">
    <v-fade-transition mode="out-in">
      <component
        :is="currentNavbar"
      />
    </v-fade-transition>
    <component
      :is="currentMenuDrawer"
      :is-freelancer="user.freelancer"
      :drawer-width="drawerWidth"
    />
    <v-content>
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </v-content>
    <FooterMain />
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import NavigationHeader from '@/components/navigationHeader/NavbarMain';
import UserNavbar from '@/components/userNavigationHeader/UserNavbarMain';
import MobileMenuDrawer from '@/components/navigationHeader/mobile/MobileMenuDrawer';
import LoggedMenuDrawer from '@/components/userNavigationHeader/mobile/MobileMenuDrawer';
import FooterMain from '@/components/footer/FooterMain';

export default {
  components: {
    NavigationHeader, UserNavbar, FooterMain, MobileMenuDrawer, LoggedMenuDrawer
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
    currentNavbar() {
      return this.$auth.loggedIn ? 'UserNavbar' : 'NavigationHeader';
    },
    currentMenuDrawer() {
      return this.$auth.loggedIn ? 'LoggedMenuDrawer' : 'MobileMenuDrawer';
    },
    drawerWidth() {
      return this.$vuetify.breakpoint.xs ? 600 : 320;
    }
  }
};
</script>
