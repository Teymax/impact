<template>
  <v-layout
    row
    fluid
    justify-center
    class="step__box"
  >
    <v-flex xs12 sm11 md9 text-xs-left>
      <v-layout
        class="step__container"
        row
        justify-center
      >
        <v-flex xs12 md10 lg9>
          <v-layout justify-center wrap>
            <v-flex shrink text-xs-left>
              <UppyImageUploader
                upload-id="freelancer-profile-image-upload"
                choose-file-label="Upload a profile picture"
                @handle-image-uppload="handleImageUppload"
              >
                <v-btn
                  v-if="!upploadedAvatar"
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
                <Avatar
                  v-else
                  size="lg"
                  :img="upploadedAvatar"
                />
              </UppyImageUploader>
            </v-flex>
            <v-fade-transition>
              <v-flex
                v-if="messageData"
                xs12
              >
                <NotificationMessage
                  :message-type="messageData.messageType"
                  :message="messageData.message"
                  @close-message="messageData = null"
                />
              </v-flex>
            </v-fade-transition>
            <v-flex xs12 mt-4 justify-center>
              <v-form>
                <v-layout wrap justify-center>
                  <ExpertisesInput @expertise-changed="id => expertiseId = id" />
                  <v-flex xs10>
                    <label
                      for="profileTitle"
                      class="base-input-label"
                    >
                      {{ t('profileTitle') }}
                    </label>
                    <v-layout row align-baseline>
                      <v-text-field
                        v-model="form.title"
                        v-validate="'required|min:2'"
                        :error-messages="errors.collect(t('profileTitle'))"
                        :data-vv-name="t('profileTitle')"
                        class="base-input mt-2"
                        solo
                        required
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
                  <LanguageLevelsInput
                    language-name="English"
                    @language-level-changed="(value) => form.englishProficiency = value"
                  />
                  <LocationsInput @location-changed="location => form.location = location" />
                  <TimezonesInput @timezone-changed="timezone => form.timezone = timezone" />
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
import Avatar from '@/components/shared/AvatarComponent';
import LanguageLevelsInput from '@/components/shared/Inputs/LanguageLevelsInput';
import TimezonesInput from '@/components/shared/Inputs/TimezonesInput';
import ExpertisesInput from '@/components/shared/Inputs/ExpertisesInput';
import LocationsInput from '@/components/shared/Inputs/LocationsInput';
import NotificationMessage from '@/components/notifications/NotificationMessage';

export default {
  components: {
    Avatar,
    UppyImageUploader,
    LanguageLevelsInput,
    TimezonesInput,
    ExpertisesInput,
    LocationsInput,
    NotificationMessage
  },
  mixins: [textTranslations, nextStepBtn, serializeData, saveProfileImageData],
  data() {
    return {
      translationScope: 'setupAccount',
      form: {
        title: null,
        location: null,
        timezone: null,
        englishProficiency: null,
        availiability: null
      },
      expertiseId: '',
      messageData: null,
      upploadedAvatar: null
    };
  },
  computed: {
    ...mapState({
      freelancerId: state => state.auth.user.freelancer.id
    })
  },
  methods: {
    ...mapActions({
      updateFreelancer: 'setupFreelancer/updateFreelancer'
    }),
    async nextStep() {
      const isValid = await this.$validator.validate();

      if (!isValid) return;
      if (this.updateFreelancerBasicInfo()) this.goToNextStep();
    },
    async updateFreelancerBasicInfo() {
      const data = {
        id: this.freelancerId,
        type: 'freelancer',
        ...this.form
      };
      const isUpdated = await this.updateFreelancer(this.serializeData(data));
      return isUpdated;
    },
    async handleImageUppload(imageData) {
      if (!imageData) {
        this.messageData = {
          messageType: 'error',
          message: this.t('addedError', null, 'notifications')
        };
      } else {
        const { sm } = await this.saveProfileImageData(imageData, this.freelancerId, 'freelancer', { type: 'Avatar' });

        this.messageData = {
          messageType: 'success',
          message: this.t('addedSuccesfully', null, 'notifications')
        };
        this.upploadedAvatar = sm;
      }
    }
  }
};
</script>
