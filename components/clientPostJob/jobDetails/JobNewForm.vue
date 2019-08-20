<template>
  <v-form>
    <v-layout wrap align-center>
      <v-flex xs10>
        <v-select
          v-model="form.category"
          v-validate="'required'"
          :label="t('jobCategory')"
          :data-vv-name="t('jobCategory')"
          :error-messages="errors.collect(t('jobCategory'))"
          :items="jobCategories"
          return-object
        />
      </v-flex>
      <v-flex xs10>
        <v-text-field
          v-model="form.title"
          v-validate="'required'"
          :label="t('jobTitle')"
          :error-messages="errors.collect(t('jobTitle'))"
          :data-vv-name="t('jobTitle')"
          required
        />
      </v-flex>
      <v-flex xs10>
        <v-text-field
          v-model="form.description"
          v-validate="'required'"
          :label="t('jobDescription')"
          :error-messages="errors.collect(t('jobDescription'))"
          :data-vv-name="t('jobDescription')"
          required
        />
      </v-flex>
      <v-flex xs10 text-xs-left>
        <v-btn
          depressed
          fab
          small
          class="ml-0"
          @click="showUploadDashboard = !showUploadDashboard"
        >
          <v-icon>
            add
          </v-icon>
        </v-btn>
        {{ t('attachFiles') }}
      </v-flex>
      <UppyFilesUploader
        v-if="showUploadDashboard"
        upload-id="job-files-attach"
        @upload-success="addFileData"
      />
      <v-flex xs10 mt-4 mb-2>
        <v-btn
          block
          @click="saveData"
        >
          {{ t('continue') }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';
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
        filesData: []
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
    async saveData() {
      const isValid = await this.$validator.validate();
      if (isValid) this.$emit('save-data', this.form, true);
    },
    setData() {
      this.form.category = this.newJob.category || '';
      this.form.title = this.newJob.title || '';
      this.form.description = this.newJob.description || '';
    },
    addFileData(fileData) {
      this.form.filesData.push(fileData);
    }
  }
};
</script>
