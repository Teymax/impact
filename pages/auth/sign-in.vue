<template>
  <v-container fluid class="pt-5 auth__main">
    <v-layout row justify-center mt-3>
      <v-flex text-xs-center>
        <h2 class="auth__header">
          {{ t('welcomeBack') }}
        </h2>
      </v-flex>
    </v-layout>

    <v-layout
      row
      justify-center
    >
      <v-flex
        class="auth__container sign-in"
        xs12
        sm11
        md9
        lg7
      >
        <v-form
          @submit.prevent="loginUser"
        >
          <v-container fluid>
            <v-layout justify-center wrap>
              <v-flex
                xs12
                md10
                lg8
              >
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
                  :error-messages="errors.collect(t('email'))"
                  :data-vv-name="t('email')"
                  required
                  solo
                  class="base-input mt-2"
                  type="email"
                  data-vv-validate-on="blur"
                  @keyup.enter.prevent="loginUser"
                />
              </v-flex>
              <v-flex
                xs12
                md10
                lg8
              >
                <label
                  for="password"
                  class="base-input-label"
                >
                  {{ t('password') }}
                </label>
                <v-text-field
                  id="password"
                  v-model="form.password"
                  v-validate="'required|min:8|strong'"
                  :error-messages="errors.collect(t('password'))"
                  :data-vv-name="t('password')"
                  required
                  solo
                  class="base-input mt-2"
                  type="password"
                  data-vv-validate-on="blur"
                  @keyup.enter.prevent="loginUser"
                />
              </v-flex>
              <v-flex
                xs12
                md10
                lg8
              >
                <v-layout
                  class="auth__to-action-box"
                  align-center
                  wrap
                >
                  <v-flex shrink>
                    <v-checkbox
                      v-model="form.rememberMe"
                      :true-value="true"
                      :false-value="false"
                      on-icon="check_box"
                      off-icon="check_box_outline_blank"
                      :label="t('rememberMe')"
                      @keyup.enter.prevent="loginUser"
                    />
                  </v-flex>
                  <v-flex shrink>
                    <v-btn
                      flat
                      round
                      :to="localePath('auth-reset-password')"
                      class="azure--text text-none font-size--p"
                    >
                      {{ t('forgotPassword') }}
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
        <v-layout
          justify-center
        >
          <v-btn
            round
            class="azure white--text px-5 text-none base"
            @click="loginUser"
          >
            {{ t('logIn') }}
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-flex
      v-if="errorOccured"
      xs12
      text-xs-center
      align-center
    >
      <h3 class="red--text">
        Something goes wrong :(
      </h3>
    </v-flex>

    <v-flex
      xs12
      text-xs-center
      align-center
    >
      <v-btn
        flat
        class="base text-none azure--text"
        :to="localePath('auth-sign-up')"
        nuxt
        large
        round
      >
        {{ t('signUp') }}
      </v-btn>
    </v-flex>
  </v-container>
</template>

<script>
import serializeData from '@/mixins/serializeData';
import textTranslations from '@/mixins/textTranslations';
import passwordValidator from '@/mixins/passwordValidator';
import intercomMethods from '@/mixins/intercomMethods';

export default {
  mixins: [textTranslations, serializeData, passwordValidator, intercomMethods],
  data() {
    return {
      errorOccured: false,
      translationScope: 'auth',
      form: {
        email: '',
        password: '',
        rememberMe: false
      }
    };
  },
  computed: {
    signInInputs() {
      return [
        {
          id: 0,
          model: 'email',
          validate: 'required|email',
          name: this.t('email'),
          type: 'text'
        },
        {
          id: 1,
          model: 'password',
          validate: 'required|min:8',
          name: this.t('password'),
          type: 'password'
        }
      ];
    }
  },
  methods: {
    async loginUser() {
      const isFormValid = await this.$validator.validate();
      if (!isFormValid) return;

      const data = {
        type: 'user',
        ...this.form
      };
      const serializedData = this.serializeData(data);
      try {
        await this.$auth.loginWith('local', { data: serializedData });

        this.updateIntercomState();
      } catch (error) {
        this.errorOccured = true;
      }
    }
  }
};
</script>
