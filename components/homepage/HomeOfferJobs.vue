<template>
  <v-flex
    xs12
  >
    <v-layout justify-center wrap>
      <Categories
        scope="jobs"
        :categories="allJobsCategories"
      />
      <v-flex
        xs11
        md10
        lg8
        class="home-offer__box"
      >
        <OfferComponent
          v-for="offer in jobsOffers"
          :key="offer.id"
          :offer="offer"
        />
      </v-flex>
      <v-flex xs12 sm11 md8 lg6 class="d-flex justify-center">
        <h3
          class="text-xs-center font-weight-bold home-offer__header--large px-2"
        >
          {{ t('findProjectPassionate') }}
        </h3>
      </v-flex>
      <v-flex xs12>
        <v-layout justify-center>
          <v-btn
            flat
            class="azure base white--text mt-5 px-5 font-weight-bold text-capitalize"
            round
          >
            {{ t('browseJobs') }}
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import OfferComponent from './HomeOfferComponent';
import Categories from './shared/Categories';

export default {
  name: 'HomepageJobs',
  components: {
    OfferComponent,
    Categories
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'homepage'
    };
  },
  computed: {
    ...mapState({
      allJobsCategories: state => state.homepage.allJobsCategories,
      jobsOffers: state => state.homepage.jobsOffers
    })
  }
};
</script>
