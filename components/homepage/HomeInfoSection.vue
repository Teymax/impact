<template>
  <v-layout
    class="work-steps__container"
    justify-center
    wrap
  >
    <v-flex lg7 class="home-info__head-container">
      <i18n
        path="homepage.infoHeader"
        tag="p"
        class="home-info__header baseGrey--text text-xs-center"
      >
        <span
          place="percent"
          class="font-weight-bold primary--text"
        >{{ t('percent') }}</span>
      </i18n>
    </v-flex>
    <v-flex lg8 text-xs-center class="home-info__header mb-4 baseGrey--text">
      <h3>{{ t('signUpInfo') }}</h3>
    </v-flex>
    <v-flex xs12 mb-5>
      <v-layout justify-center>
        <v-btn
          class="text-capitalize px-5 white--text azure homepage__btn base homepage__btn--wide"
          large
          round
          flat
          nuxt
          :to="localePath('auth-sign-up')"
        >
          {{ t('signUp') }}
        </v-btn>
      </v-layout>
    </v-flex>
    <v-flex lg9 class="mt-5">
      <v-layout wrap justify-center>
        <v-flex
          v-for="item in percentageItems"
          :key="item.percent"
          xs5
          md2
          class="text-xs-center d-inline"
        >
          <p class="home-info__percentage mb-4">
            {{ item.percent }}
          </p>
          <p class="baseGrey--text font-weight-bold">
            {{ t(item.description) }}
          </p>
        </v-flex>
        <v-flex xs12 md8 px-4 text-xs-center text-md-left>
          <p class="home-info__description baseGrey--text mb-1">
            {{ t('transparentPricing') }}
          </p>
          <v-btn
            flat
            right
            class="azure--text ml-0 font-weight-bold text-none home-info__btn"
          >
            {{ t('learnMore') }}
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'homepage',
      percentageItems: [
        {
          percent: '3%',
          description: 'transactionFee'
        },
        {
          percent: '10%',
          description: 'projectFee'
        }
      ]
    };
  }
};
</script>
