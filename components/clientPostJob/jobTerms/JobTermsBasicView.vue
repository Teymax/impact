<template>
  <v-flex xs12 sm10>
    <v-layout
      row
      justify-center
      class="step__container"
    >
      <v-flex
        xs12
        sm10
        md9
        lg7
        class="text-xs-left"
      >
        <p
          class="base-input-label"
        >
          {{ t('jobType') }}
        </p>
        <v-radio-group
          v-model="jobType"
          row
          class="base"
          color="primary"
        >
          <v-layout justify-space-between>
            <v-radio
              off-icon="radio_button_unchecked"
              on-icon="radio_button_checked"
              :label="`${t('perHour')} ${t('recommended')}`"
              value="per_hour"
              color="primary"
            />
            <v-radio
              off-icon="radio_button_unchecked"
              on-icon="radio_button_checked"
              :label="t('fixedPrice')"
              value="fixed_budget"
              color="primary"
            />
          </v-layout>
        </v-radio-group>

        <v-divider
          class="step__divider"
        />
        <v-fade-transition
          mode="out-in"
        >
          <component
            :is="choosenJobTypeForm"
            :key="choosenJobTypeForm"
            @saveData="saveData"
          />
        </v-fade-transition>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import previousStepBtn from '@/components/setupMixins/previousStepBtn';
import textTranslations from '@/mixins/textTranslations';
import JobPerHourForm from '@/components/clientPostJob/jobTerms/JobPerHourForm';
import JobFixedBudgetForm from '@/components/clientPostJob/jobTerms/JobFixedBudgetForm';

export default {
  components: {
    JobPerHourForm,
    JobFixedBudgetForm
  },
  mixins: [textTranslations, nextStepBtn, previousStepBtn],
  data() {
    return {
      translationScope: 'postJob',
      jobType: 'fixed_budget'
    };
  },
  computed: {
    ...mapState('clientPostJob', ['newJob']),
    choosenJobTypeForm() {
      return this.jobType === 'fixed_budget' ? 'JobFixedBudgetForm' : 'JobPerHourForm';
    }
  },
  mounted() {
    this.jobType = this.newJob.jobType || 'fixed_budget';
  },
  methods: {
    ...mapMutations({
      updateNewJob: 'clientPostJob/UPDATE_JOB',
      updateNewJobRequirements: 'clientPostJob/UPDATE_JOB_REQUIREMENTS',
      clearJobTermsData: 'clientPostJob/CLEAR_NEW_JOB_TERMS_DATA'
    }),
    saveData(data, direction) {
      const { requirements, ...jobData } = data;
      const jobTermsData = Object.assign(jobData, { jobType: this.jobType });
      this.clearJobTermsData(this.jobType);
      if (requirements) this.updateNewJobRequirements(requirements);
      this.updateNewJob(jobTermsData);
      return direction === 'next' ? this.goToNextStep() : this.goToPreviousStep();
    }
  }
};
</script>
