<template>
  <v-container fluid class="pt-5 auth__main">
    <v-layout justify-center mt-3>
      <v-flex text-xs-center>
        <h2 class="auth__header">
          {{ t('passwordRetrieval') }}
        </h2>
      </v-flex>
    </v-layout>

    <v-layout row justify-center mt-5>
      <v-flex
        class="auth__container sign-in"
        xs12
        sm11
        md9
        lg7
      >
        <v-form>
          <v-container fluid wrap>
            <v-layout justify-center wrap>
              <v-flex xs10>
                <label
                  for="email"
                  class="base-input-label"
                >
                  {{ t('email') }}
                </label>
                <v-text-field
                  id="email"
                  v-model="form.email"
                  v-validate="'required|email'"
                  class="base-input mt-2"
                  :error-messages="errors.collect(t('email'))"
                  :data-vv-name="t('email')"
                  :placeholder="t('sampleEmail')"
                  solo
                  required
                  color="azure"
                />
              </v-flex>
              <v-flex shrink>
                <v-btn
                  :disabled="showMsg"
                  large
                  round
                  class="text-capitalize base azure white--text"
                  @click="resetPassword"
                >
                  {{ t('resetPassword') }}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>

    <v-fade-transition mode="out-in">
      <v-flex
        v-if="showMsg"
        xs12
        text-xs-center
        align-center
        mt-5
        class="red--text"
      >
        <p>Please check your email! :)</p>
      </v-flex>
    </v-fade-transition>
    <v-flex xs12 text-xs-center align-center mt-5>
      <v-btn
        :disabled="showMsg"
        round
        flat
        :to="localePath('auth-sign-in')"
        class="text-capitalize base azure--text"
      >
        {{ t('rememberSign') }}
      </v-btn>
      <nuxt-link to="/sign-in" class="text-uppercase" />
    </v-flex>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import serializeData from '@/mixins/serializeData';
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations, serializeData],
  data() {
    return {
      showMsg: false,
      translationScope: 'auth',
      form: {
        email: ''
      }
    };
  },
  methods: {
    ...mapActions({
      resetUserPassword: 'auth/resetUserPassword'
    }),
    async resetPassword() {
      const isValid = await this.$validator.validate();
      if (!isValid) return;

      const data = await this.serializeData({
        type: 'user',
        ...this.form
      });

      this.resetUserPassword(data);
      this.showMsg = true;
    }
  }
};
</script>
