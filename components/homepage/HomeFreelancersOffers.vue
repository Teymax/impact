<template>
  <v-flex xs12>
    <v-layout justify-center wrap>
      <Categories
        scope="freelancers"
        :categories="allFreelancersCategories"
      />
      <v-flex xs12 mt-5>
        <v-container fluid>
          <v-layout justify-center wrap>
            <FreelancerOfferComponent
              v-for="offer in freelancersOffers"
              :key="offer.fullName"
              :offer="offer"
            />
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import Categories from './shared/Categories';
import FreelancerOfferComponent from './HomeFreelancerOfferComponent';

export default {
  name: 'HomepageFreelancersOffers',
  components: {
    Categories,
    FreelancerOfferComponent
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'homepage'
    };
  },
  computed: {
    ...mapState({
      allFreelancersCategories: state => state.homepage.allFreelancersCategories,
      freelancersOffers: state => state.homepage.freelancersOffers
    })
  }
};
</script>
