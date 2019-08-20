<template>
  <v-layout row fluid justify-center>
    <v-flex xs10>
      <v-radio-group
        v-model="jobType"
        :label="t('jobType')"
        row
      >
        <v-radio
          off-icon="radio_button_unchecked"
          on-icon="radio_button_checked"
          :label="t('fixedBudget')"
          value="fixed_budget"
        />
        <v-radio
          off-icon="radio_button_unchecked"
          on-icon="radio_button_checked"
          :label="t('perHour')"
          value="per_hour"
        />
      </v-radio-group>
      <component
        :is="choosenJobTypeForm"
        :key="choosenJobTypeForm"
        @saveData="saveData"
      />
    </v-flex>
  </v-layout>
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
