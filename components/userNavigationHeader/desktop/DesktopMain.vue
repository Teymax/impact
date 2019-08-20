<template>
  <v-layout
    align-center
    no-wrap
  >
    <v-scroll-x-transition
      mode="out-in"
      hide-on-leave
    >
      <NavbarLogo />
    </v-scroll-x-transition>
    <v-scroll-x-transition
      mode="out-in"
      hide-on-leave
    >
      <Navlinks
        v-if="!areItemsHidden"
        :nav-links="navLinks"
      />
    </v-scroll-x-transition>
    <v-spacer
      v-if="areItemsHidden"
    />
    <SearchIcon
      @toggle-search-bar="areItemsHidden = true"
    />
    <v-fade-transition
      mode="out-in"
      hide-on-leave
    >
      <SearchComponent
        :is-hidden="areItemsHidden"
        @colapse-search-bar="areItemsHidden = false"
      />
    </v-fade-transition>
    <v-spacer />
    <v-scroll-x-transition
      mode="out-in"
      hide-on-leave
    >
      <ActionIcons
        v-if="!areItemsHidden"
      />
    </v-scroll-x-transition>
    <UserMenu />
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import NavbarLogo from '@/components/shared/NavbarLogo';
import Navlinks from './DesktopNavlinks';
import UserMenu from '@/components/shared/NavbarUserMenu';
import SearchIcon from '@/components/shared/NavbarSearchIcon';
import ActionIcons from '@/components/shared/NavbarUserIcons';
import SearchComponent from '@/components/shared/SearchComponent';


export default {
  components: {
    NavbarLogo,
    Navlinks,
    SearchIcon,
    SearchComponent,
    ActionIcons,
    UserMenu
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'navigation',
      areItemsHidden: false
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
    navLinks() {
      if (this.user.freelancer) {
        return [
          {
            id: 0,
            to: 'index',
            name: this.t('searchJobs')
          },
          {
            id: 1,
            to: 'index',
            name: this.t('proposals')
          },
          {
            id: 2,
            to: 'index',
            name: this.t('myJobs')
          },
          {
            id: 3,
            to: 'index',
            name: this.t('finances')
          }
        ];
      }

      return [
        {
          id: 0,
          icon: true,
          to: 'client-post-job',
          name: this.t('postJob')
        },
        {
          id: 1,
          to: 'index',
          name: this.t('freelancers')
        },
        {
          id: 2,
          to: 'index',
          name: this.t('myJobs')
        },
        {
          id: 3,
          to: 'index',
          name: this.t('finances')
        }
      ];
    }
  }
};
</script>
