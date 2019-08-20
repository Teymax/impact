<template>
  <v-form>
    <v-layout wrap align-center>
      <v-flex xs10>
        <v-select
          v-model="choosenJob"
          v-validate="'required'"
          :label="t('selectPreviousJob')"
          :data-vv-name="t('selectPreviousJob')"
          :error-messages="errors.collect(t('selectPreviousJob'))"
          :items="jobs"
          item-text="title"
          return-object
        />
      </v-flex>
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

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'postJob',
      choosenJob: null
    };
  },
  computed: {
    ...mapState('clientPostJob', ['jobs'])
  },
  methods: {
    async saveData() {
      const isValid = await this.$validator.validate();
      if (isValid) this.$emit('save-data', this.choosenJob, false);
    }
  }
};
</script>
