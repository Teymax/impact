<template>
  <v-layout
    row
    justify-center
    wrap
  >
    <v-flex xs12 md10 lg8 text-xs-center shrink>
      <v-stepper v-model="currentStep" class="no-shadow step__box">
        <v-stepper-header class="no-shadow">
          <v-stepper-step
            v-for="step in setupSteps"
            :key="step.step"
            :complete="step.isCompleted"
            :step="step.step"
            complete-icon="done"
            class="pa-2"
          >
            {{ t(step.name) }}
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items class="py-4">
          <v-stepper-content
            v-for="step in setupSteps.length"
            :key="step"
            :step="step"
            class="pa-0"
          >
            <v-fade-transition>
              <component
                :is="currentComponent[step]"
                :step="step"
                @go-to-next-step="nextStep()"
              />
            </v-fade-transition>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
    <v-flex xs12 text-xs-center>
      <v-btn flat round base class="step__postpone text-none no-bg-hover">
        {{ t('continueLater') }}
        <v-icon>
          keyboard_arrow_right
        </v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import FreelancerBasic from '@/components/setupFreelancer/FreelancerBasic';
import PortfolioMainView from '@/components/setupFreelancer/portfolio/PortfolioMainView';
import SkillsMainView from '@/components/setupFreelancer/skills/SkillsMainView';
import VerificationMainView from '@/components/setupFreelancer/identityAndFinance/VerificationMainView';

export default {
  name: 'SetupFreelancer',
  components: {
    FreelancerBasic,
    PortfolioMainView,
    SkillsMainView,
    VerificationMainView
  },
  mixins: [textTranslations],
  data() {
    return {
      currentStep: 1,
      translationScope: 'setupAccount',
      currentComponent: {
        1: 'FreelancerBasic',
        2: 'PortfolioMainView',
        3: 'SkillsMainView',
        4: 'VerificationMainView',
        5: 'VerificationMainView'
      }
    };
  },
  computed: {
    setupSteps() {
      return [
        {
          step: 1,
          name: 'basicInfo',
          isCompleted: this.currentStep > 1
        },
        {
          step: 2,
          name: 'portfolio',
          isCompleted: this.currentStep > 2
        },
        {
          step: 3,
          name: 'skills',
          isCompleted: this.currentStep > 3
        },
        {
          step: 4,
          name: 'identity',
          isCompleted: this.currentStep > 4
        },
        {
          step: 5,
          name: 'finance',
          isCompleted: this.currentStep > 5
        }
      ];
    }
  },
  methods: {
    nextStep() {
      this.currentStep += 1;
    }
  }
};
</script>
