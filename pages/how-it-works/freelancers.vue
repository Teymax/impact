<template>
  <div class="how-it-works">
    <div class="hidden-sm-and-down how-it-works__orange-ellipse-big--top">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        height="1354"
        width="1368"
        min-height="496"
        min-width="496"
      />
    </div>
    <div class="hidden-sm-and-down how-it-works__orange-ellipse-big--middle">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        height="1771"
        width="1797"
        min-height="496"
        min-width="496"
      />
    </div>
    <div class="hidden-sm-and-down how-it-works__orange-ellipse-big--bottom">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        height="1354"
        width="1371"
        min-height="496"
        min-width="496"
      />
    </div>

    <div class="hidden-md-and-up how-it-works__orange-ellipse-small--top">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        height="496"
        width="502"
      />
    </div>
    <div class="hidden-md-and-up how-it-works__orange-ellipse-small--middle">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        height="824"
        width="889"
      />
    </div>
    <div class="hidden-md-and-up how-it-works__orange-ellipse-small--bottom">
      <v-img
        :src="require('@/assets/images/howItWorks/ellipses/ellipse.png')"
        height="496"
        width="502"
      />
    </div>
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4 class="text-lg-center text-xs-center">
        <TopCard
          :header="howItWorksFreelancers.header"
          :content="howItWorksFreelancers.content"
        />
      </v-flex>
      <v-flex v-for="(card, index) in cards" :key="card.id" xs11 grow pa-4>
        <HowItWorksCard
          :card-number="index+1"
          :header="card.header"
          :description="card.description"
          :img="require(`../../assets/images/howItWorks/freelancers/${card.img}`)"
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

export default {
  name: 'Freelancers',
  components: {
    TopCard,
    HowItWorksCard
  },
  mixins: [textTranslations],
  data: () => ({
    translationScope: 'howItWorks',
    howItWorksFreelancers: {},
    cards: []
  }),
  created() {
    this.howItWorksFreelancers = this.t('freelancers.howItWorksFreelancers');
    this.cards = this.t('freelancers.cards');
  }
};
</script>
