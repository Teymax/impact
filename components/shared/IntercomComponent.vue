<template>
  <v-btn
    icon
    flat
    class="intercom__btn primary--text"
    @click="showIntercom"
  >
    <v-img
      :src="require('~/assets/images/icons/intercom.svg')"
      contain
      class="intercom__img"
    />
  </v-btn>
</template>

<script>
import intercomMethods from '@/mixins/intercomMethods';

export default {
  mixins: [intercomMethods],
  mounted() {
    this.initializeIntercom();
  },
  methods: {
    showIntercom() {
      this.$intercom.show();
    }
  }
};
</script>
