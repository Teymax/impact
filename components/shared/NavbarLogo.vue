<template>
  <v-flex shrink>
    <nuxt-link :to="localePath('index')">
      <v-img
        :src="require('~/assets/images/logos/color/full.png')"
        height="66"
        max-height="70"
        min-width="210"
        contain
        class="main-navbar__logo"
      />
    </nuxt-link>
  </v-flex>
</template>
