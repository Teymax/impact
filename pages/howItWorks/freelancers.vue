<template>
  <div class="how-it-works">
    <div class="hidden-sm-and-down how-it-works__orange-ellipse-big--top">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="1354"
        :width="1368"
        :min-height="496"
        :min-width="496"
      />
    </div>
    <div class="hidden-sm-and-down how-it-works__orange-ellipse-big--middle">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="1771"
        :width="1797"
        :min-height="496"
        :min-width="496"
      />
    </div>
    <div class="hidden-sm-and-down how-it-works__orange-ellipse-big--bottom">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="1354"
        :width="1371"
        :min-height="496"
        :min-width="496"
      />
    </div>

    <div class="hidden-md-and-up how-it-works__orange-ellipse-small--top">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="496"
        :width="502"
      />
    </div>
    <div class="hidden-md-and-up how-it-works__orange-ellipse-small--middle">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="824"
        :width="889"
      />
    </div>
    <div class="hidden-md-and-up how-it-works__orange-ellipse-small--bottom">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        :height="496"
        :width="502"
      />
    </div>
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4 class="text-lg-center text-xs-center">
        <TopCard
          :header="howItWorksF.header"
          :content="howItWorksF.content"
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

import profileImg from '@/assets/images/howItWorks/freelancers/profileImg.png';
import applyForJobsImg from '@/assets/images/howItWorks/freelancers/applyForJobsImg.png';
import getHiredImg from '@/assets/images/howItWorks/freelancers/getHiredImg.png';
import startWorkingImg from '@/assets/images/howItWorks/freelancers/startWorkingImg.png';
import getPaidImg from '@/assets/images/howItWorks/freelancers/getPaidImg.png';

export default {
  name: 'freelancers',
  components: {
    TopCard,
    HowItWorksCard
  },
  mixins: [textTranslations],
  data: () => ({
    translationScope: 'howItWorks',
    howItWorksF: {},
    cards: [],
    cardsImages: [
      profileImg,
      applyForJobsImg,
      getHiredImg,
      startWorkingImg,
      getPaidImg
    ]
  }),
  created() {
    this.howItWorksF = this.t('freelancers.howItWorksF');
    this.cards = this.t('freelancers.cards');
    this.cards.forEach((item, index) => {
      item.img = this.cardsImages[index];
    });
  }
};
</script>
