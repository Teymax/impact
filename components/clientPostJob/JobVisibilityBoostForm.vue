<template>
  <v-layout wrap align-center>
    <v-flex xs10>
      <p> {{ t('visibilityBoost') }}</p>
      <v-checkbox
        id="visibiityBoost"
        v-model="boosted"
        v-validate="'required'"
        :error-messages="errors.collect(t('visibilityBoostDescription'))"
        :data-vv-name="t('visibilityBoostDescription')"
        on-icon="check_box"
        off-icon="check_box_outline_blank"
        :label="t('visibilityBoostDescription')"
      />
    </v-flex>
    <v-flex xs10 mt-4 mb-2>
      <v-btn
        block
        @click="nextStep"
      >
        {{ t('continue') }}
      </v-btn>
    </v-flex>
    <v-flex xs10 mt-4 mb-2>
      <v-btn
        block
        @click="previousStep"
      >
        {{ t('back') }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import previousStepBtn from '@/components/setupMixins/previousStepBtn';

export default {
  mixins: [textTranslations, nextStepBtn, previousStepBtn],
  data() {
    return {
      translationScope: 'postJob',
      boosted: false
    };
  },
  computed: {
    ...mapState('clientPostJob', ['newJob'])
  },
  mounted() {
    this.setData();
  },
  methods: {
    ...mapMutations({
      updateNewJob: 'clientPostJob/UPDATE_JOB'
    }),
    previousStep() {
      this.updateNewJob({ boosted: this.boosted });
      this.goToPreviousStep();
    },
    nextStep() {
      this.updateNewJob({ boosted: this.boosted });
      this.goToNextStep();
    },
    setData() {
      this.boosted = this.newJob.boosted || false;
    }
  }
};
</script>
