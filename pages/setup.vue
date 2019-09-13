<template>
  <v-container
    fluid
    class="step__layout"
  >
    <v-layout>
      <v-flex text-xs-center>
        <h2 class="step__main-header">
          {{ t('setup', headerName) }}
        </h2>
      </v-flex>
    </v-layout>
    <nuxt-child />
  </v-container>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'setupAccount'
    };
  },
  computed: {
    headerName() {
      return this.$route.name.includes('freelancer') ? { type: 'Freelancer' } : { type: 'Client' };
    }
  }
};
</script>
