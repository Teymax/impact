<template>
  <v-flex
    xs12
    sm10
    md9
  >
    <v-form>
      <v-layout class="text-xs-left" column>
        <v-flex>
          <label
            class="base-input-label"
          >
            {{ t('jobCategory') }}
          </label>
          <v-select
            v-model="form.category"
            v-validate="'required'"
            :data-vv-name="t('jobCategory')"
            :error-messages="errors.collect(t('jobCategory'))"
            :items="jobCategories"
            return-object
            append-icon="keyboard_arrow_down"
            class="base-input mt-2"
            solo
          />
        </v-flex>
        <v-flex>
          <v-layout align-center>
            <v-flex>
              <label
                class="base-input-label"
              >
                {{ t('jobTitle') }}
                <v-text-field
                  v-model="form.title"
                  v-validate="'required'"
                  :error-messages="errors.collect(t('jobTitle'))"
                  :data-vv-name="t('jobTitle')"
                  class="base-input mt-2"
                  solo
                  required
                />
              </label>
            </v-flex>
            <v-flex shrink>
              <v-btn depressed fab class="xsmall step__btn-box">
                <span class="step__btn--mark" />
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <v-layout align-center>
            <v-flex>
              <label class="base-input-label">
                {{ t('jobDescription') }}
                <v-text-field
                  v-model="form.description"
                  v-validate="'required'"
                  :error-messages="errors.collect(t('jobDescription'))"
                  :data-vv-name="t('jobDescription')"
                  class="base-input mt-2"
                  solo
                  required
                />
              </label>
            </v-flex>
            <v-flex shrink>
              <v-btn depressed fab class="xsmall step__btn-box">
                <span class="step__btn--mark" />
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex text-xs-left>
          <v-btn
            depressed
            class="ml-0 step__add-portfolio uppy-uploader"
            @click="showUploadDashboard = !showUploadDashboard"
          >
            <v-icon class="white--text">
              add
            </v-icon>
          </v-btn>
          <p class="ma-0 ml-3 font-weight-bold d-inline">
            {{ t('attachFiles') }}
          </p>
        </v-flex>
        <v-flex class="overflow-hidden">
          <v-fade-transition
            leave-absolute
          >
            <UppyFilesUploader
              v-if="showUploadDashboard"
              upload-id="job-files-attach"
              @upload-success="addFileData"
            />
          </v-fade-transition>
        </v-flex>
        <v-flex class="mt-5">
          <v-layout justify-center>
            <v-btn
              round
              class="azure white--text px-5 text-none base"
              @click="saveData"
            >
              {{ t('continue') }}
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-form>
  </v-flex>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import UppyFilesUploader from '@/components/shared/UppyFilesUploader';

export default {
  components: { UppyFilesUploader },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'postJob',
      showUploadDashboard: false,
      form: {
        category: '',
        title: '',
        description: '',
        attachments: []
      }
    };
  },
  computed: {
    ...mapState('clientPostJob', ['jobCategories', 'newJob'])
  },
  mounted() {
    this.setData();
  },
  methods: {
    ...mapMutations({
      updateAttachments: 'clientPostJob/UPDATE_ATTACHMENTS'
    }),
    async saveData() {
      const isValid = await this.$validator.validate();
      if (this.form.attachments.length) delete this.form.attachments;
      if (isValid) this.$emit('save-data', this.form, true);
    },
    setData() {
      this.form.category = this.newJob.category || '';
      this.form.title = this.newJob.title || '';
      this.form.description = this.newJob.description || '';
    },
    addFileData(fileData) {
      this.updateAttachments(JSON.stringify(fileData));
    }
  }
};
</script>
