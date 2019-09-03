<template>
  <v-container
    class="auth__main py-5"
    fluid
  >
    <v-layout row justify-center my-3>
      <v-flex text-xs-center>
        <h2 class="auth__header">
          {{ t('signUp') }}
        </h2>
        <h4 class="auth__subheader mb-3">
          {{ t('authSubheader') }}
        </h4>
      </v-flex>
    </v-layout>

    <v-layout
      row
      justify-center
      mt-5
    >
      <v-flex
        class="auth__container"
        :class="{'last-step': isLastStep}"
        xs12
        sm11
        md9
        lg7
      >
        <v-layout justify-center wrap>
          <v-fade-transition
            leave-absolute
          >
            <v-flex
              v-if="!isLastStep"
              xs12
              md10
              lg9
              d-flex
            >
              <v-btn
                v-for="btn in userBtnToggler"
                :key="btn.id"
                block
                flat
                large
                class="px-4 text-none base toggle"
                :class="{
                  'active': userType === btn.value,
                }"
                @click="userType = btn.value"
              >
                {{ t(btn.name) }}
              </v-btn>
            </v-flex>
          </v-fade-transition>
          <v-flex fill-height lg9 mt-5>
            <v-fade-transition
              hide-on-leave
              origin="center center"
              mode="out-in"
            >
              <v-form
                v-if="!isLastStep"
                @submit.prevent="handleSubmitButton"
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
                  class="base-input mt-2"
                  :error-messages="errors.collect(t('email'))"
                  :data-vv-name="t('email')"
                  :placeholder="t('emailPlaceholder')"
                  solo
                  required
                  color="azure"
                />
              </v-form>
            </v-fade-transition>
          </v-flex>
        </v-layout>
        <v-fade-transition
          origin="center center"
          mode="out-in"
        >
          <v-form
            v-if="isLastStep"
          >
            <v-container fluid class="px-0 py-0">
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <label
                    for="firstName"
                    class="base-input-label"
                  >
                    {{ t('firstName') }}
                  </label>
                  <v-text-field
                    id="firstName"
                    v-model="form.firstName"
                    v-validate="'required|min:2'"
                    :error-messages="errors.collect(t('firstName'))"
                    :data-vv-name="t('firstName')"
                    class="base-input mt-2"
                    solo
                    required
                    data-vv-validate-on="blur"
                  />
                </v-flex>
                <v-flex xs12 sm6>
                  <label
                    for="lastName"
                    class="base-input-label"
                  >
                    {{ t('lastName') }}
                  </label>
                  <v-text-field
                    id="lastName"
                    v-model="form.lastName"
                    v-validate="'required|min:2'"
                    :error-messages="errors.collect('Last Name')"
                    :data-vv-name="t('lastName')"
                    class="base-input mt-2"
                    solo
                    required
                    data-vv-validate-on="blur"
                  />
                </v-flex>
                <v-flex xs12>
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
                    class="base-input mt-2"
                    solo
                    required
                    type="password"
                    data-vv-validate-on="blur"
                  />
                </v-flex>
                <v-flex xs12>
                  <v-checkbox
                    v-model="form.acceptsTerms"
                    v-validate="'required'"
                    :true-value="true"
                    :false-value="null"
                    :error-messages="errors.collect(t('termsConfirm'))"
                    :data-vv-name="t('termsConfirm')"
                    on-icon="check_box"
                    off-icon="check_box_outline_blank"
                    label="I Agree to Terms of Service and ..."
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-fade-transition>
        <v-layout justify-center>
          <v-btn
            large
            round
            class="text-capitalize base azure white--text mt-5"
            @click="handleSubmitButton"
          >
            {{ isLastStep ? t('getStarted') : t('continue' ) }}
            <v-icon v-if="!isLastStep">
              keyboard_arrow_right
            </v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-flex
      v-if="!isLastStep"
      xs12
      text-xs-center
      align-center
      mt-5
    >
      <v-btn
        flat
        class="base azure--text text-none px-4"
        round
        nuxt
        :to="localePath('auth-sign-in')"
        @click="isLastStep = false"
      >
        {{ t('signIn') }}
      </v-btn>
    </v-flex>
    <v-flex
      v-else
      xs12
      text-xs-center
      align-center
      mt-5
    >
      <v-btn
        flat
        class="base azure--text text-none px-4"
        round
        @click="isLastStep = false"
      >
        <v-icon>
          keyboard_arrow_left
        </v-icon>
        {{ t('startAsClient') }}
      </v-btn>
    </v-flex>
  </v-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import uuid from 'uuid/v4';
import serializeData from '@/mixins/serializeData';
import passwordValidator from '@/mixins/passwordValidator';
import textTranslations from '@/mixins/textTranslations';
import watchBreakPoints from '@/mixins/watchBreakPoints';

export default {
  mixins: [textTranslations, serializeData, watchBreakPoints, passwordValidator],
  data() {
    return {
      translationScope: 'auth',
      isLastStep: false,
      userTypeActive: 0,
      userType: 'clients',
      form: {
        email: '',
        acceptsTerms: null,
        password: '',
        firstName: '',
        lastName: ''
      }
    };
  },
  computed: {
    userBtnToggler() {
      return [
        {
          name: this.breakpoint.smAndUp ? 'startAsClient' : 'client',
          value: 'clients',
          id: 0
        },
        {
          name: this.breakpoint.smAndUp ? 'startAsFreelancer' : 'freelancer',
          value: 'freelancer',
          id: 1
        }
      ];
    }
  },
  methods: {
    ...mapMutations({
      setNewClientId: 'setupClient/SET_NEW_CLIENT_ID'
    }),
    ...mapActions({
      registerUser: 'auth/registerUser'
    }),
    async handleSubmitButton() {
      if (!this.isLastStep) {
        const isEmailValid = await this.$validator.validate(this.t('email'));
        this.isLastStep = isEmailValid;
      } else {
        const isFormValid = await this.$validator.validate();
        if (isFormValid) this.register();
      }
    },
    async register() {
      const currentLocale = this.$i18n.locale;
      const userTypeId = await uuid();
      const relationshipData = {
        type: this.userType,
        id: userTypeId
      };

      const data = {
        id: await uuid(),
        type: 'user',
        ...this.form,
        [this.userType]: this.userType === 'freelancer' ? relationshipData : [relationshipData],
        relationshipNames: [this.userType]
      };

      await this.registerUser(this.serializeData(data));

      if (this.userType === 'freelancer') {
        this.$router.push(this.localePath('setup-freelancer', currentLocale));
      } else {
        this.setNewClientId(userTypeId);
        this.$router.push(this.localePath('setup-client', currentLocale));
      }
    }
  }
};
</script>
