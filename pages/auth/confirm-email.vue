<template>
  <v-container fluid class="auth__main pt-5">
    <v-layout row justify-center mt-3>
      <v-flex text-xs-center>
        <h2 class="auth__header">
          {{ headerMessage }}
        </h2>
      </v-flex>
    </v-layout>

    <v-flex xs12 text-xs-center align-center mt-5>
      <v-btn
        flat
        round
        class="base azure--text px-5 text-none"
        :to="localePath('index')"
      >
        <v-icon class="mr-1">
          keyboard_arrow_left
        </v-icon>
        {{ t('toMainPage') }}
      </v-btn>
    </v-flex>
  </v-container>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'auth'
    };
  },
  computed: {
    headerMessage() {
      if (this.isVerificationSucceed) {
        return this.t('emailConfirm');
      }
      // TODO: just for presenting 'error state', has to be change in the future.
      return 'Yor email is already confirmed!';
    }
  },
  async asyncData({ store, route }) {
    const token = route.query.confirmation_token;
    try {
      const isVerificationSucceed = await store.dispatch('auth/confirmRegistration', token);

      return { isVerificationSucceed };
    } catch (e) {
      return { isVerificationSucceed: false };
    }
  }
};
</script>
