<template>
  <v-flex
    xs12
    sm11
    md8
  >
    <v-layout
      wrap
      class="step__container"
    >
      <v-flex xs12 sm10 md9>
        <v-layout>
          <v-btn
            v-for="btn in jobFormToggler"
            :key="btn.id"
            block
            flat
            large
            class="px-4 text-none base toggle"
            :class="{
              'active': choosenJobForm === btn.value,
            }"
            @click="choosenJobForm = btn.value"
          >
            {{ t(btn.name) }}
          </v-btn>
        </v-layout>
      </v-flex>

      <v-flex xs12>
        <v-layout
          justify-center
          wrap
          mt-4
        >
          <v-fade-transition
            mode="out-in"
          >
            <component
              :is="choosenJobForm"
              :key="choosenJobForm"
              @save-data="updateJob"
            />
          </v-fade-transition>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapMutations } from 'vuex';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';
import textTranslations from '@/mixins/textTranslations';
import JobNewForm from '@/components/clientPostJob/jobDetails/JobNewForm';
import JobPreviousForm from '@/components/clientPostJob/jobDetails/JobPreviousForm';

export default {
  components: {
    JobNewForm,
    JobPreviousForm
  },
  mixins: [textTranslations, nextStepBtn],
  data() {
    return {
      translationScope: 'postJob',
      choosenJobForm: 'JobNewForm',
      jobFormToggler: [
        {
          id: 0,
          name: 'useNewJob',
          value: 'JobNewForm'
        },
        {
          id: 1,
          name: 'usePreviousJob',
          value: 'JobPreviousForm'
        }
      ]
    };
  },
  methods: {
    ...mapMutations({
      updateNewJob: 'clientPostJob/UPDATE_JOB'
    }),
    updateJob(data, creatingNewJob) {
      this.updateNewJob(data);
      if (creatingNewJob) {
        this.goToNextStep();
      } else {
        this.choosenJobForm = 'JobNewForm';
      }
    }
  }
};
</script>
