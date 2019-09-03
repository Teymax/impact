<template>
  <v-flex
    xs12
    sm10
    md9
  >
    <v-form>
      <v-layout
        column
        class="text-xs-left"
      >
        <v-flex>
          <label
            class="base-input-label"
          >
            {{ t('selectPreviousJob') }}
            <v-select
              v-model="choosenJob"
              v-validate="'required'"
              :data-vv-name="t('selectPreviousJob')"
              :error-messages="errors.collect(t('selectPreviousJob'))"
              :items="jobs"
              item-text="title"
              return-object
              append-icon="keyboard_arrow_down"
              class="base-input mt-2"
              solo
            />
          </label>
        </v-flex>
        <v-flex class="mt-3">
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
