<template>
  <v-container fluid py-0>
    <v-layout wrap justify-center class="intro__container">
      <v-flex xs12>
        <h2 class="homepage__intro-header text-xs-center">
          {{ t('whoWe') }}
        </h2>
      </v-flex>
      <h3 class="homepage__intro-subheader text-xs-center">
        {{ t('introHeader') }}
      </h3>
      <v-flex xs12 class="intro__cards-box">
        <v-layout justify-center align-baseline wrap>
          <v-flex
            v-for="card in introCards"
            :key="card.id"
            shrink
            class="intro__card"
            xs12
            sm4
            lg3
          >
            <v-layout justify-center>
              <v-img
                :src="require(`@/assets/images/icons/${card.img}.svg`)"
                contain
                :max-width="41"
              />
            </v-layout>
            <v-layout justify-center>
              <div class="intro__text-box">
                <div class="intro__header">
                  {{ card.header }}
                </div>
                <div class="intro__subheader">
                  {{ card.subheader }}
                </div>
              </div>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'homepage'
    };
  },
  computed: {
    introCards() {
      return [
        {
          id: 0,
          header: this.t('verified'),
          subheader: this.t('showCase'),
          img: 'star'
        },
        {
          id: 1,
          header: this.t('impactful'),
          subheader: this.t('workForVetted'),
          img: 'globe'
        },
        {
          id: 2,
          header: this.t('lowAndTransparent'),
          subheader: this.t('ourCharges'),
          img: 'credit'
        }
      ];
    }
  }
};
</script>
