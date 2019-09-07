<template>
  <div class="about">
    <div class="about__oranle-ellipse">
      <v-img
        :src="require('@/assets/images/about/orangeEllipse.png')"
        :height="496"
        :width="496"
      />
    </div>
    <v-layout row wrap justify-center align-center>
      <v-flex xs11 grow pa-4>
        <TopCard
          :header="aboutWorkImpact.header"
          :content="aboutWorkImpact.content"
        />
      </v-flex>
      <v-flex xs11 grow pa-4>
        <AboutImageCard
          :title="evolvingWorkforce.title"
          :content="evolvingWorkforce.content"
          :img="evolvingWorkforce.img"
          :img-height="342"
          :img-width="440"
        />
      </v-flex>
      <v-flex xs11 grow pa-4>
        <AboutImageCard
          :title="socialEnvironmental.title"
          :content="socialEnvironmental.content"
          :img="socialEnvironmental.img"
          :img-height="363"
          :img-width="479"
          :is-reverse="true"
        />
      </v-flex>
      <v-flex xs11 grow pa-4>
        <AboutImageCard
          :title="bringingTogether.title"
          :content="bringingTogether.content"
          :img="bringingTogether.img"
          :img-height="415"
          :img-width="415"
          :description="bringingTogether.description"
        />
      </v-flex>
      <v-flex xs11 grow pa-4>
        <AboutSignUp
          :title="t('signUpTitle')"
          :btn-text="t('signUpBtn')"
        />
      </v-flex>
    </v-layout>
    <div class="about__blue-ellipse hidden-sm-and-down">
      <v-img
        :src="require('@/assets/images/about/blueEllipse.png')"
        :height="292"
        :width="233"
      />
    </div>
  </div>
</template>

<script>
import evolvingImg from '@/assets/images/about/evolvingImg.png';
import wild from '@/assets/images/about/wild.png';
import multiCircle from '@/assets/images/about/multiCircle.png';
import TopCard from '@/components/general/TopCard';
import AboutImageCard from '@/components/about/AboutImageCard';
import AboutSignUp from '@/components/about/AboutSignUp';
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'About',
  components: {
    TopCard,
    AboutImageCard,
    AboutSignUp
  },
  mixins: [textTranslations],
  data: () => ({
    translationScope: 'about',
    aboutWorkImpact: {},
    evolvingWorkforce: {},
    socialEnvironmental: {},
    bringingTogether: {}
  }),
  created() {
    this.aboutWorkImpact = this.t('aboutWorkImpact');
    this.evolvingWorkforce = this.t('evolvingWorkforce');
    this.socialEnvironmental = this.t('socialEnvironmental');
    this.bringingTogether = this.t('bringingTogether');
    this.evolvingWorkforce.img = evolvingImg;
    this.socialEnvironmental.img = wild;
    this.bringingTogether.img = multiCircle;
  }
};
</script>
