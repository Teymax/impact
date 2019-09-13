<template>
  <v-layout
    wrap
    fluid
    justify-center
  >
    <v-flex xs12 sm10 md9>
      <h4
        class="step__header step__header--mid text-capitalize"
      >
        {{ header }}
      </h4>

      <v-layout
        wrap
        class="mb-5 step__container"
      >
        <v-flex
          xs12
          class="setup-item__integrated-img"
        />
        <v-layout justify-center>
          <v-btn
            flat
            round
            large
            class="azure white--text px-5 base text-none step__btn--large"
            @click="goToNextStep"
          >
            {{ t('finishTest') }}
          </v-btn>
        </v-layout>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import nextStepBtn from '@/components/setupMixins/nextStepBtn';

export default {
  mixins: [textTranslations, nextStepBtn],
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      translationScope: 'setupAccount'
    };
  },
  computed: {
    header() {
      if (this.step === 4) return this.t('identityVerification');
      return this.t('financeVerification');
    },
    btnName() {
      if (this.step === 4) return this.t('complete');
      return this.t('finish');
    }
  }
};
</script>
