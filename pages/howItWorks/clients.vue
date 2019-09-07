<template>
  <div class="how-it-works">
    <div class="hidden-sm-and-down how-it-works__oranle-ellipse-big--top">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="1354"
        :width="1368"
        :min-height="496"
        :min-width="496"
      />
    </div>
    <div class="hidden-sm-and-down how-it-works__oranle-ellipse-big--middle">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="1771"
        :width="1797"
        :min-height="496"
        :min-width="496"
      />
    </div>
    <div class="hidden-sm-and-down how-it-works__oranle-ellipse-big--bottom">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="1354"
        :width="1371"
        :min-height="496"
        :min-width="496"
      />
    </div>

    <div class="hidden-md-and-up how-it-works__oranle-ellipse-small--top">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="496"
        :width="502"
      />
    </div>
    <div class="hidden-md-and-up how-it-works__oranle-ellipse-small--middle">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="824"
        :width="889"
      />
    </div>
    <div class="hidden-md-and-up how-it-works__oranle-ellipse-small--bottom">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="496"
        :width="502"
      />
    </div>
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4 class="text-lg-center text-xs-center">
        <TopCard
          :header="howItWorksC.header"
          :content="howItWorksC.content"
        />
      </v-flex>
      <v-flex v-for="(card, index) in cards" :key="card.id" xs11 grow pa-4>
        <HowItWorksCard
          :card-number="index+1"
          :header="card.header"
          :description="card.description"
          :img="card.img"
          :img-height="card.imgHeight"
          :img-width="card.imgWidth"
          :content="card.content"
          :is-reverse="card.isReverse"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TopCard from '@/components/general/TopCard';
import HowItWorksCard from '@/components/howItWorks/HowItWorksCard';
import textTranslations from '@/mixins/textTranslations';

import profileImg from '@/assets/images/howItWorks/clients/profileImg.png';
import postJobImg from '@/assets/images/howItWorks/clients/postJobImg.png';
import hireFreelancersImg from '@/assets/images/howItWorks/clients/hireFreelancersImg.png';
import getToWorkImg from '@/assets/images/howItWorks/clients/getToWorkImg.png';
import makePaymentsImg from '@/assets/images/howItWorks/clients/makePaymentsImg.png';

export default {
  name: 'Clients',
  components: {
    TopCard,
    HowItWorksCard
  },
  mixins: [textTranslations],
  data: () => ({
    translationScope: 'howItWorks',
    howItWorksC: {},
    cards: [],
    cardsImages: [
      profileImg,
      postJobImg,
      hireFreelancersImg,
      getToWorkImg,
      makePaymentsImg
    ]
  }),
  created() {
    this.howItWorksC = this.t('clients.howItWorksC');
    this.cards = this.t('clients.cards');
    this.cards.forEach((item, index) => {
      item.img = this.cardsImages[index];
    });
  }
};
</script>
