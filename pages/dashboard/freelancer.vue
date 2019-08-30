<template>
  <v-container class="dashboard__content">
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="dashboard__header">
          {{ t('dashboardHeader') }}
        </h4>
      </v-flex>
      <v-flex xs12 class="dashboard__setup">
        <DashboardSetupCard v-if="needSetup" :show="needSetup" @closeSetup="closeSetupCard">
          <template v-slot:freelancer="{ freelancerScope }">
            <v-layout class="py-3" row wrap align-center justify-center>
              <v-layout class="dashboard__icon" md1 flex justify-end>
                <v-img
                  :src="require(`@/assets/images/icons/star.svg`)"
                  contain
                  :max-width="26"
                />
              </v-layout>
              <v-flex sm12 md7 justify-center class="text-xs-center px-4">
                {{ t('freelancerDashboard.setupCard.cardMessage') }}
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
      <v-flex xs12 class="dashboard__content-row">
        <v-layout row wrap align-space-around fill-height>
          <v-flex xs12 sm6 class="dashboard__open-jobs-freeelancers">
            <DashboardOpenJobs :open-jobs-list="openJobsList" />
          </v-flex>
          <v-flex xs12 sm6 class="dashboard__jobs-in-progress-articles">
            <DashboardJobsInProgress :jobs-in-progress-list="jobsInProgressList" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap align-space-around fill-height>
          <v-flex xs12 sm6 class="dashboard__open-jobs-freeelancers">
            <DashboardMyFreelancers :my-freelancers-list="myFreelancersList" />
          </v-flex>
          <v-flex xs12 sm6 class="dashboard__jobs-in-progress-articles">
            <DashboardCommunityArticles :community-articles-list="communityArticlesList" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import DashboardSetupCard from '@/components/dashboard/DashboardSetupCard';
import DashboardOpenJobs from '@/components/dashboard/DashboardOpenJobs';
import DashboardJobsInProgress from '@/components/dashboard/DashboardJobsInProgress';
import DashboardCommunityArticles from '@/components/dashboard/DashboardCommunityArticles';
import DashboardMyFreelancers from '@/components/dashboard/DashboardMyFreelancers';
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'Dashboard',
  components: {
    DashboardSetupCard, DashboardOpenJobs, DashboardJobsInProgress, DashboardCommunityArticles, DashboardMyFreelancers
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'dashboard',
      needSetup: true
    };
  },
  computed: {
    ...mapState({
      openJobsList: state => state.dashboard.openJobsList,
      jobsInProgressList: state => state.dashboard.jobsInProgressList,
      communityArticlesList: state => state.dashboard.communityArticlesList,
      myFreelancersList: state => state.dashboard.myFreelancersList
    })
  },
  asyncData({ store }) {
    store.dispatch('dashboard/fetchOpenJobs');
    store.dispatch('dashboard/fetchJobsInProgress');
    store.dispatch('dashboard/fetchCommunityArticles');
    store.dispatch('dashboard/fetchMyFreelancers');
  },
  methods: {
    closeSetupCard() {
      this.needSetup = false;
    }
  }
};
</script>
