<template>
  <v-flex
    xs12
    sm11
    md8
  >
    <v-layout
      class="step__container"
      column
    >
      <v-icon size="150" color="grey" class="mb-3">
        account_balance
      </v-icon>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        corrupti illo, beatae aut explicabo aliquam sed sint moleionem mollitia.
        Quas blanditiis repellat maxime voluptatem.
      </p>
      <v-flex shrink>
        <v-btn
          round
          class="azure white--text px-5 text-none base mt-4"
          @click="goToNextStep()"
        >
          {{ 'Start Payment Verification' }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';
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
    ...mapState('setupClient', ['clientTypes', 'newClientId'])
  }
};
</script>
