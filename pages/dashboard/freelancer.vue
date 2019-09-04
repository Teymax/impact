<template>
  <v-container class="dashboard__content">
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="dashboard__header">
          {{ t('dashboardHeader') }}
        </h4>
      </v-flex>
      <v-flex xs12 order-xs1 class="dashboard__setup">
        <DashboardSetupCard v-if="needSetup" :show="needSetup" @closeSetup="closeSetupCard">
          <template v-slot:freelancer="{ freelancerScope }">
            <v-layout class="py-3" row wrap align-center justify-center>
              <v-layout class="hidden-sm-and-below " md1 flex justify-end>
                <v-img
                  :src="require(`@/assets/images/icons/star.svg`)"
                  contain
                  :max-width="26"
                />
              </v-layout>
              <v-flex sm12 md7 justify-center class="text-xs-center px-4">
                {{ t('setupCard.cardMessage') }}
              </v-flex>
              <v-flex xs12 sm12 md3 class="text-sm-center homepage-btn-container">
                <v-btn
                  flat
                  round
                  class="text-none azure base homepage__btn white--text ml-0"
                >
                  {{ t('setupCard.setupBtn') }}
                </v-btn>
              </v-flex>
            </v-layout>
          </template>
        </DashboardSetupCard>
      </v-flex>
      <v-flex xs12 order-xs3 order-sm2 class="dashboard__content-row">
        <v-layout row wrap align-space-around fill-height>
          <v-flex xs12 sm6 class="dashboard__open-jobs-freelancers">
            <FreelancerBaseCard
              target-component="freelancerCardLeftSide"
              :freelancer-data="jobImpacts"
              :localization="jobsImpactsCard"
              :img="require('@/assets/images/dashboard/freelancer/freelancer-jobs.svg')"
            />
          </v-flex>
          <v-flex xs12 sm6 class="dashboard__jobs-in-progress-articles">
            <FreelancerBaseCard
              target-component="freelancerCardRightSide"
              :freelancer-data="freelancerRating"
              :localization="ratingCard"
              :img="require('@/assets/images/dashboard/freelancer/freelancer-photo.png')"
            />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="dashboard__content-row" xs12 order-xs2 order-sm3>
        <v-layout row wrap align-space-around fill-height>
          <v-flex xs12 sm6 class="dashboard__open-jobs-freelancers">
            <FreelancerJobAndProposals
              :localization="myJobsAndProposalsCard"
              :my-jobs-and-proposals="myJobsAndProposals"
            />
          </v-flex>
          <v-flex xs12 sm6 class="dashboard__jobs-in-progress-articles">
            <FreelancerFinancesCard
              :freelancer-finances="freelancerFinances"
              :localization="financesCard"
            />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="dashboard__content-row" xs12 order-xs4>
        <v-layout row wrap align-space-around fill-height>
          <v-flex xs12 sm6 class="dashboard__open-jobs-freelancers">
            <DashboardCommunityArticles
              :localization="communityArticles"
              :show-freelancers-photo="true"
              :community-articles-list="communityArticlesList"
            />
          </v-flex>
          <v-flex xs12 sm6 class="dashboard__jobs-in-progress-articles">
            <DashboardCommunityArticles
              :localization="communityDiscussions"
              :show-freelancers-photo="true"
              :community-articles-list="communityArticlesList"
            />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import DashboardSetupCard from '@/components/dashboard/DashboardSetupCard';
import FreelancerBaseCard from '@/components/dashboard/freelancer/FreelancerBaseCard';
import DashboardCommunityArticles from '@/components/dashboard/DashboardCommunityArticles';
import FreelancerJobAndProposals from '@/components/dashboard/freelancer/FreelancerJobAndProposals';
import FreelancerFinancesCard from '@/components/dashboard/freelancer/FreelancerFinancesCard';
import textTranslations from '@/mixins/textTranslations';


export default {
  name: 'Dashboard',
  components: {
    DashboardSetupCard,
    FreelancerBaseCard,
    DashboardCommunityArticles,
    FreelancerJobAndProposals,
    FreelancerFinancesCard
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: ['freelancerDashboard'],
      needSetup: true
    };
  },
  computed: {
    ...mapState({
      jobImpacts: state => state.freelancerDashboard.jobImpacts,
      freelancerRating: state => state.freelancerDashboard.freelancerRating,
      communityArticlesList: state => state.dashboard.communityArticlesList,
      myJobsAndProposals: state => state.freelancerDashboard.myJobsAndProposals,
      freelancerFinances: state => state.freelancerDashboard.freelancerFinances
    }),
    jobsImpactsCard: {
      get() {
        const localization = this.t('jobsImpactsCard');
        return {
          headline1: localization.newJobs,
          description1: localization.jobsWaiting,
          headline2: localization.impacts,
          description2: localization.leftForProposals
        };
      }
    },
    ratingCard: {
      get() {
        const localization = this.t('ratingCard');
        return {
          headline1: localization.yourRating,
          description1: localization.increase,
          percentage: localization.percentage,
          headline2: localization.acceptedProposalRate
        };
      }
    },
    communityArticles: {
      get() {
        const localization = this.t('communityArticles');
        return {
          sectionHeader: localization.communityArticles
        };
      }
    },
    communityDiscussions: {
      get() {
        const localization = this.t('communityDiscussions');
        return {
          sectionHeader: localization.communityDiscussions
        };
      }
    },
    myJobsAndProposalsCard: {
      get() {
        const localization = this.t('myJobsAndProposalsCard');
        return {
          header: localization.myJobsAndProposals,
          description1: localization.currentJobs,
          description2: localization.activeProposals
        };
      }
    },
    financesCard: {
      get() {
        const localization = this.t('financesCard');
        return {
          header: localization.myJobsAndProposals,
          description1: localization.balance,
          description2: localization.earnedLastWeek,
          button1: localization.withdraw,
          button2: localization.statistics,
          button3: localization.profits
        };
      }
    }
  },
  asyncData({ store }) {
    store.dispatch('freelancerDashboard/fetchJobImpacts');
    store.dispatch('freelancerDashboard/fetchFreelancerRating');
    store.dispatch('freelancerDashboard/fetchMyJobsAndProposals');
    store.dispatch('freelancerDashboard/fetchFinances');
    store.dispatch('dashboard/fetchCommunityArticles');
  },
  methods: {
    closeSetupCard() {
      this.needSetup = false;
    }
  }
};
</script>
