<template>
  <v-flex
    class="nav-menu__container hidden-md-and-down"
    shrink
  >
    <v-layout align-center>
      <Avatar
        :name="setFullName(user.firstName, user.lastName)"
        size="xs"
      />
      <v-flex grow>
        <v-menu
          transition="slide-y-transition"
          bottom
          nudge-bottom="82"
          min-width="230"
          content-class="main-navbar__dropdown"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              v-ripple="false"
              flat
              round
              class="text-none base no-bg-hover pa-0 my-0 mb-2 ml-2"
              v-on="on"
            >
              <v-layout
                column
                class="text-xs-left"
              >
                <v-flex class="nav-menu__name">
                  {{ setFullName(user.firstName, user.lastName) }}
                  <v-icon class="primary--text nav-menu__icon">
                    keyboard_arrow_down
                  </v-icon>
                </v-flex>
                <v-flex class="nav-menu__name font-weight-regular">
                  {{ user.freelancer ? t('freelancer') : t('client') }}
                </v-flex>
              </v-layout>
            </v-btn>
          </template>
          <v-list dense class="py-3 px-2">
            <v-list-tile
              v-for="item in listItems"
              :key="item.id"
              :to="localePath(item.to)"
              nuxt
              active-class="none"
            >
              <v-list-tile-title
                class="nav-menu__list-item"
              >
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile>
            <v-divider class="my-2 mx-3" />
            <v-list-tile
              nuxt
              active-class="none"
              :to="localePath('index')"
            >
              <v-list-tile-title
                class="nav-menu__list-item"
              >
                {{ t('accountProfile', { type: user.freelancer ? 'Freelancer' : 'Client'}) }}
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              nuxt
              active-class="none"
              @click="logOut"
            >
              <v-list-tile-title
                class="nav-menu__list-item"
              >
                {{ t('logOut') }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import fullName from '@/mixins/fullName';
import Avatar from '@/components/shared/AvatarComponent.vue';

export default {
  components: {
    Avatar
  },
  mixins: [textTranslations, fullName],
  data() {
    return {
      translationScope: 'navigation'
    };
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
    listItems() {
      return [
        {
          id: 0,
          title: this.t('dashboard'),
          to: 'index'
        },
        {
          id: 1,
          title: this.t('myProfile'),
          to: 'index'
        },
        {
          id: 2,
          title: this.t('settings'),
          to: 'index'
        }
      ];
    }
  },
  methods: {
    logOut() {
      this.$auth.logout();
      this.$intercom.shutdown();
    }
  }
};
</script>
