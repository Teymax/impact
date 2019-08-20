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
        <v-flex xs10>
          <label
            for="nonProfitCategory"
            class="base-input-label"
          >
            {{ t('nonProfitCategory') }}
          </label>
          <v-select
            v-model="form.nonProfitCategory"
            v-validate="'required'"
            :items="nonProfitCategories"
            :data-vv-name="t('nonProfitCategory')"
            return-object
            :error-messages="errors.collect(t('nonProfitCategory'))"
            append-icon="keyboard_arrow_down"
            class="base-input mt-2"
            solo
          />
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
        <v-flex>
          <label
            class="base-input-label"
          >
            {{ t('roleTitle') }}
            <span
              v-if="form.name"
              class="primary--text"
            > {{ form.name }} </span>
            <v-text-field
              v-model="form.roleTitle"
              v-validate="'required'"
              :error-messages="errors.collect(t('roleTitle'))"
              :data-vv-name="t('roleTitle')"
              class="base-input mt-2"
              solo
              required
            />
          </label>
        </v-flex>
        <v-flex xs10>
          <label
            for="timezone"
            class="base-input-label"
          >
            {{ t('timezone') }}
          </label>
          <v-select
            v-model="form.timezone"
            v-validate="'required'"
            :items="timezoneItems"
            :data-vv-name="t('timezone')"
            return-object
            :error-messages="errors.collect(t('timezone'))"
            append-icon="keyboard_arrow_down"
            class="base-input mt-2"
            solo
          />
        </v-flex>
        <v-layout
          justify-center
          mt-4
        >
          <v-btn
            round
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
import { mapState } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import serializeData from '@/mixins/serializeData';
import saveProfileImageData from '@/components/setupMixins/saveProfileImageData';
import UppyImageUploader from '@/components/shared/UppyImageUploader';
import FormDescription from '@/components/setupClient/commonForms/ClientDescription';
import FormUrl from '@/components/setupClient/commonForms/ClientUrl';

export default {
  components: { UppyImageUploader, FormDescription, FormUrl },
  mixins: [textTranslations, saveProfileImageData, serializeData],
  props: {
    newClientId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      translationScope: 'setupAccount',
      timezoneItems: ['Kiev, Ukraine(+3 UTC)', 'Wroclaw, Poland(+1 UTC)'],
      form: {
        name: '',
        description: '',
        url: '',
        nonProfitCategory: '',
        roleTitle: '',
        timezone: ''
      }
    };
  },
  computed: {
    ...mapState('setupClient', ['nonProfitCategories'])
  },
  methods: {
    async saveData() {
      const isValid = await this.$validator.validate();
      if (isValid) this.$emit('save-data', this.form);
    },
    updateClientLogo(imageData) {
      this.saveProfileImageData(imageData, this.newClientId, 'client');
    }
  }
};
</script>
