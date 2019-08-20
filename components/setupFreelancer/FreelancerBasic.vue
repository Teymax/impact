<template>
  <v-layout row fluid justify-center>
    <v-flex xs12 sm11 md9 text-xs-left>
      <v-layout
        class="step__container"
        row
        justify-center
      >
        <v-layout row justify-center>
          <v-flex xs12 md10 lg9>
            <v-layout justify-center wrap>
              <v-flex shrink text-xs-left>
                <UppyImageUploader
                  upload-id="freelancer-profile-image-upload"
                  choose-file-label="Upload a profile picture"
                  @upload-succeed="updateFreelancerAvatar"
                >
                  <v-btn
                    type="button"
                    fab
                    depressed
                    large
                    class="step__pf-img-btn"
                  >
                    <v-icon>
                      add
                    </v-icon>
                  </v-btn>
                </UppyImageUploader>
              </v-flex>
              <v-flex xs12 mt-4 justify-center>
                <v-form>
                  <v-layout wrap justify-center>
                    <v-flex xs10>
                      <label
                        for="speclialization"
                        class="base-input-label"
                      >
                        {{ t('speclialization') }}
                      </label>
                      <v-layout row align-baseline>
                        <v-select
                          v-model="form.speclialization"
                          v-validate="'required'"
                          :items="specializationItems"
                          :data-vv-name="t('speclialization')"
                          return-object
                          :error-messages="errors.collect(t('speclialization'))"
                          append-icon="keyboard_arrow_down"
                          class="base-input mt-2"
                          solo
                        />
                        <v-flex shrink>
                          <v-btn
                            depressed
                            fab
                            class="xsmall azure white--text step__btn-box"
                          >
                            <v-icon class="step__btn">
                              add
                            </v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs10>
                      <label
                        for="profileTitle"
                        class="base-input-label"
                      >
                        {{ t('profileTitle') }}
                      </label>
                      <v-layout row align-baseline>
                        <v-text-field
                          v-model="form.profilTitle"
                          v-validate="'required|min:2'"
                          :error-messages="errors.collect(t('profileTitle'))"
                          :data-vv-name="t('profileTitle')"
                          class="base-input mt-2"
                          solo
                          required
                          data-vv-validate-on="blur"
                        />
                        <v-flex shrink>
                          <v-btn depressed fab class="xsmall step__btn-box">
                            <span class="step__btn--mark" />
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex my-3 xs10>
                      <v-divider class="step__divider" />
                    </v-flex>
                    <v-flex
                      v-for="item in locationSection"
                      :key="item.id"
                      xs10
                    >
                      <label
                        :for="item.model"
                        class="base-input-label"
                      >
                        {{ item.label }}
                      </label>
                      <v-select
                        v-model="form[item.model]"
                        v-validate="'required'"
                        :items="item.content"
                        :error-messages="errors.collect(item.label)"
                        :data-vv-name="item.label"
                        class="base-input mt-2"
                        required
                        solo
                        return-object
                        append-icon="keyboard_arrow_down"
                      />
                    </v-flex>

                    <v-flex my-3 xs10>
                      <v-divider class="step__divider" />
                    </v-flex>

                    <v-flex xs10>
                      <v-layout row wrap justify-space-between>
                        <v-flex xs12 sm5>
                          <v-layout align-center>
                            <v-flex
                              :shrink="$vuetify.breakpoint.smAndUp"
                            >
                              <label
                                for="hourlyRate"
                                class="base-input-label"
                              >
                                {{ t('hourlyRate') }}
                              </label>
                              <v-text-field
                                v-model="form.hourlyRate"
                                v-validate="'required|numeric'"
                                placeholder="0.00"
                                :error-messages="errors.collect(t('hourlyRate'))"
                                :data-vv-name="t('hourlyRate')"
                                class="base-input mt-2 step__input--hour"
                                required
                                prefix="$"
                                solo
                              />
                            </v-flex>
                            <v-flex ml-2 shrink>
                              <span>USD</span>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-spacer />
                        <v-flex xs12 sm6>
                          <v-layout align-center justify-end>
                            <v-flex
                              :shrink="$vuetify.breakpoint.smAndUp"
                            >
                              <label
                                for="availability"
                                class="base-input-label"
                              >
                                {{ t('availiability') }}
                              </label>
                              <v-text-field
                                v-model="form.availiability"
                                v-validate="'required|numeric'"
                                placeholder="0.00"
                                :error-messages="errors.collect(t('availiability'))"
                                :data-vv-name="t('availiability')"
                                class="base-input mt-2 step__input--availiability"
                                required
                                solo
                              />
                            </v-flex>
                            <v-flex ml-2 shrink>
                              <span class="no-wrap">{{ t('hoursPerWeek') }}</span>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex shrink mt-4 mb-2>
                      <v-btn
                        round
                        class="azure white--text px-5 text-none base"
                        @click="nextStep"
                      >
                        {{ t('saveNgo') }}
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import serializeData from '@/mixins/serializeData';
import textTranslations from '@/mixins/textTranslations';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import saveProfileImageData from '@/components/setupMixins/saveProfileImageData';
import UppyImageUploader from '@/components/shared/UppyImageUploader';

export default {
  components: { UppyImageUploader },
  mixins: [textTranslations, nextStepBtn, serializeData, saveProfileImageData],
  data() {
    return {
      translationScope: 'setupAccount',
      form: {
        specialization: null,
        profilTitle: '',
        location: '',
        englishProficiency: ''
      }
    };
  },
  computed: {
    ...mapState({ freelancerId: state => state.auth.user.freelancer.id }),
    specializationItems() {
      return ['Design | UX/UI design', 'Developer | front-end', 'Developer | back-end'];
    },
    locationSection() {
      return [
        {
          id: 0,
          label: this.t('locationTimezone'),
          content: ['Kiev, Ukraine(+3 UTC)', 'Wroclaw, Poland(+1 UTC)'],
          model: 'location'
        },
        {
          id: 1,
          label: this.t('englishProficiency'),
          content: ['Conversational', 'Liquid xD'],
          model: 'englishProficiency'
        }
      ];
    }
  },
  methods: {
    ...mapActions({
      updateFreelancer: 'setupFreelancer/updateFreelancer'
    }),
    async nextStep() {
      const isValid = await this.$validator.validate();

      if (isValid) {
        this.updateFreelancerBasicInfo();
        this.goToNextStep();
      }
    },
    async updateFreelancerBasicInfo() {
      const data = {
        id: this.freelancerId,
        type: 'freelancer',
        ...this.form
      };
      this.updateFreelancer(this.serializeData(data));
    },
    async updateFreelancerAvatar(imageData) {
      this.saveProfileImageData(imageData, this.freelancerId, 'freelancer');
    }
  }
};
</script>
