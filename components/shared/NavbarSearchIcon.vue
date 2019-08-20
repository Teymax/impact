<template>
  <v-flex
    shrink
  >
    <v-btn
      icon
      class="ma-0 ml-3 no-bg-hover"
      @click="handleSearchMethods"
    >
      <v-hover>
        <v-icon
          slot-scope="{ hover }"
          class="main-navbar__search-btn baseGrey--text"
          :class="{
            'primary--text': hover || hidden
          }"
        >
          search
        </v-icon>
      </v-hover>
    </v-btn>
  </v-flex>
</template>

<script>
export default {
  props: {
    hidden: {
      type: Boolean
    }
  },
  methods: {
    handleSearchMethods() {
      this.$emit('toggle-search-bar');
    }
  }
};
</script>
