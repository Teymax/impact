<template>
  <v-layout
    class="main-navbar__mobile-view"
    :class="{ 'center': itemsHidden }"
  >
    <MainLogo
      v-if="!itemsHidden"
    />
    <v-flex
      shrink
    >
      <v-layout align-center>
        <SearchIcon
          :hidden="itemsHidden"
          @toggle-search-bar="itemsHidden = true"
        />
        <v-toolbar-side-icon
          v-if="!itemsHidden"
          large
          class="mx-3"
          @click="TOGGLE_MENU"
        >
          <v-icon
            active-class="azure-text"
            class="main-navbar__toggler baseGrey--text"
          >
            menu
          </v-icon>
        </v-toolbar-side-icon>
      </v-layout>
    </v-flex>
    <SearchComponent
      :is-hidden="itemsHidden"
      @colapse-search-bar="itemsHidden = false"
    />
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex';
import SearchIcon from '@/components/shared/NavbarSearchIcon';
import MainLogo from '@/components/shared/NavbarLogo';
import SearchComponent from '@/components/shared/SearchComponent';

export default {
  components: { MainLogo, SearchIcon, SearchComponent },
  data() {
    return {
      itemsHidden: false
    };
  },
  methods: {
    ...mapMutations('homepage', ['TOGGLE_MENU'])
  }
};

</script>
