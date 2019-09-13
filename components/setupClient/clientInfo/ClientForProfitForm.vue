<template>
  <v-flex>
    <v-form>
      <v-layout column justify-center py-5>
        <v-flex xs12>
          <label
            for="companyName"
            class="base-input-label"
          >
            {{ t('companyName') }}
          </label>
          <v-layout row align-baseline>
            <v-text-field
              v-model="form.name"
              v-validate="'required|min:2'"
              :error-messages="errors.collect(t('companyName'))"
              :data-vv-name="t('companyName')"
              class="base-input mt-2"
              solo
              required
            />
          </v-layout>
        </v-flex>
        <v-flex xs12 text-xs-left>
          <UppyImageUploader
            upload-id="nonprofit-client-image-upload"
            @upload-succeed="updateClientLogo"
          >
            <v-btn
              depressed
              class="ml-0 step__add-portfolio uppy-uploader"
            >
              <v-icon color="white">
                add
              </v-icon>
            </v-btn>
            <span class="font-weight-bold"> {{ t('uploadLogo') }}</span>
          </UppyImageUploader>
        </v-flex>

        <FormDescription
          @set-input-data="setInputData"
        />
        <FormUrl
          @set-input-data="setInputData"
        />

        <v-flex my-3 xs10>
          <v-divider class="step__divider" />
        </v-flex>
        <TimezonesInput
          @timezone-changed="timezone => form.timezone = timezone"
        />
        <v-layout
          justify-center
          mt-4
        >
          <v-btn
            round
            flat
            class="azure white--text px-5 text-none base"
            @click="saveData"
          >
            {{ t('saveNgo') }}
          </v-btn>
        </v-layout>
      </v-layout>
    </v-form>
  </v-flex>
</template>
<script>
import UppyImageUploader from '@/components/shared/UppyImageUploader';
import serializeData from '@/mixins/serializeData';
import textTranslations from '@/mixins/textTranslations';
import saveProfileImageData from '@/components/setupMixins/saveProfileImageData';
import FormDescription from '@/components/setupClient/commonForms/ClientDescription';
import FormUrl from '@/components/setupClient/commonForms/ClientUrl';
import TimezonesInput from '@/components/shared/Inputs/TimezonesInput';

export default {
  components: {
    UppyImageUploader,
    FormDescription,
    FormUrl,
    TimezonesInput
  },
  mixins: [textTranslations, serializeData, saveProfileImageData],
  props: {
    clientId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      translationScope: 'setupAccount',
      form: {
        name: '',
        description: '',
        url: '',
        timezone: ''
      }
    };
  },
  methods: {
    setInputData(payload) {
      this.form[payload.field] = payload.value;
    },
    async saveData() {
      const isValid = await this.$validator.validate();

      if (isValid) this.$emit('save-data', this.form);
    },
    updateClientLogo(imageData) {
      this.saveProfileImageData(imageData, this.clientId, 'client', { type: 'Logo' });
    }
  }
};
</script>
