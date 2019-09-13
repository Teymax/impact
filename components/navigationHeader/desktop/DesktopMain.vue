<template>
  <v-layout
    v-resize="resetSearchBarVisibility"
    align-center
  >
    <MainLogo />
    <v-scroll-x-transition
      mode="out-in"
      hide-on-leave
    >
      <NavbarLinks
        v-if="!areItemsHidden"
      />
    </v-scroll-x-transition>
    <SearchIcon
      :hidden="areItemsHidden"
      @toggle-search-bar="areItemsHidden = true"
    />
    <v-fade-transition
      hide-on-leave
    >
      <SearchComponent
        :is-hidden="areItemsHidden"
        @colapse-search-bar="areItemsHidden = false"
      />
    </v-fade-transition>
    <v-spacer />
    <v-flex shrink>
      <v-layout>
        <v-btn
          v-for="loginLink in loginLinks"
          :key="loginLink.id"
          flat
          round
          :to="loginLink.to"
          class="base text-capitalize font-weight-regular ma-0 no-bg-hover main-navbar__loginlinks"
          nuxt
          :class="{'active': loginLink.id === 1}"
          exact-active-class="active-route"
        >
          {{ loginLink.name }}
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import watchBreakPoints from '@/mixins/watchBreakPoints';
import MainLogo from '@/components/shared/NavbarLogo';
import SearchComponent from '@/components/shared/SearchComponent';
import NavbarLinks from '@/components/navigationHeader/NavbarLinks';
import SearchIcon from '@/components/shared/NavbarSearchIcon';

export default {
  components: {
    SearchComponent, NavbarLinks, MainLogo, SearchIcon
  },
  mixins: [textTranslations, watchBreakPoints],
  data() {
    return {
      translationScope: 'navigation',
      areItemsHidden: false
    };
  },
  computed: {
    loginLinks() {
      return [
        {
          id: 0,
          name: this.$t('navigation.signIn'),
          to: this.localePath('auth-sign-in')
        },
        {
          id: 1,
          name: this.$t('navigation.signUp'),
          to: this.localePath('auth-sign-up')
        }
      ];
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$intercom.shutdown();
    },
    resetSearchBarVisibility() {
      if (window.innerWidth < 1264) this.areItemsHidden = false;
    }
  }
};
</script>
