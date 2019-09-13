<template>
  <v-flex>
    <v-form>
      <v-layout column justify-center py-5>
        <v-flex class="step__input-box">
          <label
            for="yourName"
            class="base-input-label"
          >
            {{ t('yourName') }}
          </label>
          <v-text-field
            v-model="form.name"
            v-validate="'required|min:2'"
            :error-messages="errors.collect(t('yourName'))"
            :data-vv-name="t('yourName')"
            class="base-input mt-2"
            solo
            required
          />
        </v-flex>
        <v-flex text-xs-left class="step__input-box">
          <UppyImageUploader
            upload-id="individual-client-image-upload"
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
            <span class="font-weight-bold">
              {{ t('uploadAvatar') }}
            </span>
          </UppyImageUploader>
        </v-flex>

        <FormDescription
          @set-input-data="setInputData"
        />
        <FormUrl
          @set-input-data="setInputData"
        />

        <v-flex shrink mt-4 mb-2 d-flex>
          <v-layout justify-center>
            <v-btn
              round
              class="azure white--text px-5 text-none base"
              @click="saveData"
            >
              {{ t('saveContinue') }}
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-form>
  </v-flex>
</template>
<script>
import serializeData from '@/mixins/serializeData';
import textTranslations from '@/mixins/textTranslations';
import saveProfileImageData from '@/components/setupMixins/saveProfileImageData';
import UppyImageUploader from '@/components/shared/UppyImageUploader';
import FormDescription from '@/components/setupClient/commonForms/ClientDescription';
import FormUrl from '@/components/setupClient/commonForms/ClientUrl';

export default {
  components: { UppyImageUploader, FormDescription, FormUrl },
  mixins: [textTranslations, saveProfileImageData, serializeData],
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
        url: ''
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
