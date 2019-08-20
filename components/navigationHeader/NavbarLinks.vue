<template>
  <v-flex
    shrink
    class="hidden-md-and-down"
  >
    <v-layout>
      <v-btn
        v-for="userLink in usersLinks"
        :key="userLink.id"
        class="text-none base font-weight-regular no-bg-hover main-navbar__navlinks"
        flat
        round
        :to="userLink.to"
        active-class="active"
      >
        {{ userLink.name }}
      </v-btn>
      <v-menu
        transition="slide-y-transition"
        bottom
        nudge-bottom="78"
        min-width="280"
        content-class="main-navbar__dropdown"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            flat
            round
            class="text-none base font-weight-regular no-bg-hover main-navbar__navlinks"
            v-on="on"
          >
            {{ $t('navigation.about') }}
            <v-icon class="primary--text">
              keyboard_arrow_down
            </v-icon>
          </v-btn>
        </template>
        <v-list dense class="py-4 px-2">
          <v-list-tile
            v-for="item in listItems"
            :key="item.id"
            :to="localePath(item.to)"
            nuxt
            active-class="none"
          >
            <v-list-tile-title
              class="main-navbar__list-item"
            >
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-layout>
  </v-flex>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'navigation'
    };
  },
  computed: {
    usersLinks() {
      return [
        {
          id: 0,
          name: this.$t('navigation.forClients'),
          to: { path: '/for-clients' }
        },
        {
          id: 1,
          name: this.$t('navigation.forFreelancers'),
          to: { path: '/for-freelancers' }
        }
      ];
    },
    listItems() {
      return [
        { title: this.t('whoWe'), to: 'index' },
        { title: this.t('getInvolved'), to: 'index' },
        { title: this.t('ourMission'), to: 'index' },
        { title: this.t('community'), to: 'index' },
        { title: this.t('contacts'), to: 'index' }
      ];
    }
  }
};
</script>
