<template>
  <v-layout
    row
    justify-center
    wrap
  >
    <v-flex xs12 sm11 md10 text-xs-center>
      <v-stepper v-model="currentStep" class="no-shadow step__box">
        <v-stepper-header class="no-shadow px-3">
          <v-layout justify-center>
            <v-flex
              v-for="step in setupSteps"
              :key="step.step"
              shrink
              class="step__stepper--step"
            >
              <v-stepper-step
                :complete="step.isCompleted"
                :step="step.step"
                complete-icon="done"
                class="pa-2 text-xs-center"
              >
                {{ t(step.name) }}
              </v-stepper-step>
            </v-flex>
          </v-layout>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content
            v-for="step in setupSteps.length"
            :key="step"
            :step="step"
            class="pa-0"
          >
            <v-layout
              justify-center
              class="pb-4"
            >
              <v-fade-transition>
                <component
                  :is="currentComponent[step]"
                  :step="step"
                  @go-to-next-step="nextStep()"
                />
              </v-fade-transition>
            </v-layout>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
    <v-flex xs12>
      <v-fade-transition>
        <GettingStartedView
          v-if="isSetupFinished"
        />
      </v-fade-transition>
    </v-flex>
    <v-flex
      v-if="!isSetupFinished"
      xs12
      text-xs-center
    >
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
import ClientBasic from '@/components/setupClient/clientInfo/ClientBasic';
import PaymentVerificationView from '@/components/setupClient/PaymentVerificationView';
import GettingStartedView from '@/components/setupClient/GettingStartedView';

export default {
  name: 'ClientSetup',
  components: {
    ClientBasic,
    PaymentVerificationView,
    GettingStartedView
  },
  mixins: [textTranslations],
  data() {
    return {
      currentStep: 1,
      translationScope: 'setupAccount',
      currentComponent: {
        1: 'ClientBasic',
        2: 'PaymentVerificationView',
        3: 'GettingStartedView'
      }
    };
  },
  computed: {
    isSetupFinished() {
      return this.currentStep > this.setupSteps.length;
    },
    setupSteps() {
      return [
        {
          step: 1,
          name: 'myCompany',
          isCompleted: this.currentStep > 1
        },
        {
          step: 2,
          name: 'paymentVerification',
          isCompleted: this.currentStep > 2
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
