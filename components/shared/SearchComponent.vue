<template>
  <v-flex
    v-if="isHidden"
    md8
    lg6
    xl8
    grow
    @keyup.esc="$emit('colapse-search-bar')"
  >
    <v-layout align-center>
      <v-text-field
        v-model="searchQuery"
        solo
        class="base-input main-navbar__search"
        autofocus
      />
      <v-btn
        icon
        @click="$emit('colapse-search-bar')"
      >
        <v-icon class="d-inline">
          close
        </v-icon>
      </v-btn>
    </v-layout>
  </v-flex>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  props: {
    isHidden: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      translationScope: 'navigation',
      searchQuery: ''
    };
  }
};
</script>
