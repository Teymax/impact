<template>
  <v-layout mt-5 justify-center wrap>
    <v-flex xs12>
      <h2 class="step__main-header text-xs-center">
        {{ t('postAJob') }}
      </h2>
    </v-flex>
    <v-flex
      xs12
      sm11
      md10
      lg8
      text-xs-center
    >
      <v-stepper
        v-model="currentStep"
        class="no-shadow step__box"
      >
        <v-stepper-header class="no-shadow">
          <v-layout justify-space-between>
            <v-stepper-step
              v-for="step in setupSteps"
              :key="step.step"
              :complete="step.isCompleted"
              :step="step.step"
              complete-icon="done"
              editable
              class="no-wrap"
            >
              {{ t(step.name) }}
            </v-stepper-step>
          </v-layout>
        </v-stepper-header>

        <v-stepper-items class="py-4">
          <v-stepper-content
            v-for="step in setupSteps.length"
            :key="step"
            :step="step"
            class="pa-0"
          >
            <v-layout justify-center>
              <v-fade-transition>
                <component
                  :is="currentComponent[step]"
                  v-if="step === currentStep"
                  :key="step.step"
                  :step="step"
                  class="mb-4"
                  @go-to-next-step="nextStep()"
                  @go-to-previous-step="previousStep()"
                />
              </v-fade-transition>
            </v-layout>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import JobBasicDetailsView from '@/components/clientPostJob/jobDetails/JobBasicDetailsView';
import JobTermsBasicView from '@/components/clientPostJob/jobTerms/JobTermsBasicView';
import JobRequirementsForm from '@/components/clientPostJob/jobRequirements/RequirementsMainView';
import JobVisibilityBoostForm from '@/components/clientPostJob/JobVisibilityBoostForm';
import JobPreviewView from '@/components/clientPostJob/JobPreviewView';

export default {
  components: {
    JobBasicDetailsView,
    JobTermsBasicView,
    JobRequirementsForm,
    JobVisibilityBoostForm,
    JobPreviewView
  },
  mixins: [textTranslations],
  data() {
    return {
      currentStep: 1,
      translationScope: 'postJob',
      currentComponent: {
        1: 'JobBasicDetailsView',
        2: 'JobTermsBasicView',
        3: 'JobRequirementsForm',
        4: 'JobVisibilityBoostForm',
        5: 'JobPreviewView'
      }
    };
  },
  computed: {
    setupSteps() {
      return [
        {
          step: 1,
          name: 'detailsStep',
          isCompleted: this.currentStep > 1
        },
        {
          step: 2,
          name: 'termsStep',
          isCompleted: this.currentStep > 2
        },
        {
          step: 3,
          name: 'requirementsStep',
          isCompleted: this.currentStep > 3
        },
        {
          step: 4,
          name: 'visibilityBoostStep',
          isCompleted: this.currentStep > 4
        },
        {
          step: 5,
          name: 'previewStep',
          isCompleted: this.currentStep > 5
        }
      ];
    }
  },
  methods: {
    nextStep() {
      this.currentStep += 1;
    },
    previousStep() {
      this.currentStep -= 1;
    }
  }
};
</script>
