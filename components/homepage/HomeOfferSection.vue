<template>
  <v-container fluid class="lightestGrey home-offer__container">
    <v-layout wrap justify-center>
      <v-flex xs12 text-xs-center>
        <h2 class="home-offer__header">
          {{ t('offerHeader') }}
        </h2>
      </v-flex>
      <v-flex xs12>
        <v-layout justify-center px-2>
          <v-btn
            v-for="btn in switchBtns"
            :key="btn.id"
            flat
            :outline="btn.value !== activeTab"
            class="mx-0 base toggle mt-5 homepage__btn homepage__toggle-btn text-capitalize azure--text"
            :class="{
              'white--text': btn.value === activeTab,
              'azure': btn.value === activeTab
            }"
            @click="activeTab = btn.value"
          >
            {{ btn.name }}
          </v-btn>
        </v-layout>
      </v-flex>
      <v-fade-transition
        mode="out-in"
      >
        <component
          :is="activeTab === 'jobs' ? 'JobsComponent' : 'FreelancersOffers'"
        />
      </v-fade-transition>
    </v-layout>
  </v-container>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import JobsComponent from './HomeOfferJobs';
import FreelancersOffers from './HomeFreelancersOffers';

export default {
  name: 'HomePageoffer',
  components: {
    JobsComponent,
    FreelancersOffers
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'homepage',
      activeTab: 'jobs'
    };
  },
  computed: {
    switchBtns() {
      return [
        {
          id: 1,
          name: this.t('topFreelancers'),
          value: 'freelancer'
        },
        {
          id: 2,
          name: this.t('newJobs'),
          value: 'jobs'
        }
      ];
    }
  }
};
</script>
