<template>
  <v-flex
    shrink
    class="hidden-md-and-down main-navbar__link-box"
  >
    <v-btn
      v-for="btn in navLinks"
      :key="btn.id"
      flat
      class="text-none base font-weight-regular no-bg-hover main-navbar__navlinks pa-2"
      round
      :to="localePath(btn.to)"
    >
      <v-icon
        v-if="btn.icon"
        class="mr-2 azure--text"
      >
        add_circle_outline
      </v-icon>
      {{ btn.name }}
    </v-btn>
  </v-flex>
</template>

<script>
export default {
  props: {
    navLinks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      translationScope: 'navigation'
    };
  }
};
</script>
