<template>
  <v-container fluid class="pt-5">
    <v-layout row justify-center mt-3>
      <v-flex text-xs-center>
        <h2>
          {{ t('passwordRetrieval') }}
        </h2>
      </v-flex>
    </v-layout>

    <v-layout row justify-center mt-5>
      <v-flex xs12 sm9 md6 lg4>
        <v-card depressed class="px-4 pt-5 pb-4">
          <v-card-text>
            <v-form>
              <v-container fluid>
                <v-layout justify-space-between wrap>
                  <v-flex
                    v-for="input in passwordInputs"
                    :key="input.id"
                    xs12
                  >
                    <v-text-field
                      :ref="input.ref"
                      v-model="form[input.model]"
                      v-validate="input.validation"
                      :label="input.label"
                      :error-messages="errors.collect(input.label)"
                      :data-vv-name="input.label"
                      required
                      type="password"
                      :data-vv-as="input.label"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              block
              @click="resetPassword"
            >
              {{ t('newPassword') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-flex xs12 text-xs-center align-center mt-5>
      <nuxt-link :to="localePath('auth-sign-in')" class="text-uppercase">
        {{ t('remembeSign') }}
      </nuxt-link>
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
      translationScope: 'auth',
      form: {
        password: '',
        confirmationPassword: ''
      }
    };
  },
  computed: {
    passwordLabel() {
      return this.t('password');
    },
    confirmPasswordLabel() {
      return this.t('passwordConfirm');
    },
    passwordInputs() {
      return [
        {
          id: 0,
          label: this.passwordLabel,
          model: 'password',
          validation: 'required|min:8',
          ref: 'password'
        },
        {
          id: 1,
          label: this.confirmPasswordLabel,
          model: 'confirmationPassword',
          validation: 'required|confirmed:password'
        }
      ];
    }
  },
  methods: {
    ...mapActions({
      updateUserPassword: 'auth/updateUserPassword'
    }),
    async resetPassword() {
      const isValid = await this.$validator.validate();
      if (!isValid) return;

      const data = this.serializeData({
        type: 'user',
        password: this.form.password,
        recoveryToken: this.$route.query.token
      });
      const result = await this.updateUserPassword(data);

      if (result) this.$router.push(this.localePath('auth-sign-in'));
    }
  }
};
</script>
