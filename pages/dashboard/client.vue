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
          <template v-slot:client="{ clientScope }">
            <v-layout row wrap align-center>
              <v-flex xs3 sm1 lg1>
                <v-icon class="dashboard__setup-avatar" large dark>
                  person
                </v-icon>
              </v-flex>
              <v-flex sm5 md4 lg3>
                {{ t('setupCard.setupInProgress') }}
              </v-flex>
              <v-flex sm4 md3 class="dashboard__progress-container">
                <v-progress-linear v-model="clientScope.currentProgress" class="dashboard__progress-bar" />
              </v-flex>
              <v-flex xs12 sm12 md3 class="text-sm-center">
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
            <DashboardCommunityArticles
              :localization="t('communityArticles')"
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
