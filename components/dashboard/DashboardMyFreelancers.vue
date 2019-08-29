<template>
  <v-card class="base-card base-card_default base-card-shadow">
    <v-card-title class="base-card__title">
      <h4 class="base-card__header primary--text text-no-wrap">
        {{ t('myFreelancers.myFreelancersHeader') }}
      </h4>
    </v-card-title>
    <v-card-text class="base-card__content">
      <v-layout row wrap>
        <v-flex v-for="item in myFreelancersList" :key="item.name" xs12 class="dashboard__freelancer-row">
          <DashboardFreelancerCard :item="item" />
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="base-card__action">
      <nuxt-link to="#" class="base-card__link">
        {{ t('myFreelancers.hiredFreelancers') }} (15)
      </nuxt-link>
      <v-spacer />
      <nuxt-link to="#" class="base-card__link text-sm-right">
        <v-icon>search</v-icon>
        {{ t('myFreelancers.findNewFreelancers') }}
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import DashboardFreelancerCard from './DashboardFreelancerCard';
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'DashboardMyFreelancers',
  components: {
    DashboardFreelancerCard
  },
  mixins: [textTranslations],
  props: {
    myFreelancersList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      translationScope: 'dashboard'
    };
  }
};
</script>
