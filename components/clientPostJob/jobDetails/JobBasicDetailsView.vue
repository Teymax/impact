<template>
  <v-layout row fluid justify-center>
    <v-flex xs9>
      <v-card
        class="mb-5"
        height="auto"
      >
        <v-layout row justify-center py-5>
          <v-flex xs8>
            <v-layout wrap>
              <v-flex xs12 mt-2>
                <v-layout wrap align-center>
                  <v-btn-toggle
                    v-model="choosenJobForm"
                    mandatory
                  >
                    <v-btn
                      v-for="btn in jobFormToggler"
                      :key="btn.id"
                      :value="btn.value"
                      block
                      class="px-4"
                    >
                      {{ t(btn.name) }}
                    </v-btn>
                  </v-btn-toggle>
                  <component
                    :is="choosenJobForm"
                    :key="choosenJobForm"
                    @save-data="updateJob"
                  />
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
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
