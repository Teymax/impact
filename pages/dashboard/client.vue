<template>
  <v-container class="dashboard__content">
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="dashboard__header">
          {{ t('dashboardHeader') }}
        </h4>
      </v-flex>
      <v-flex xs12 class="dashboard__setup">
        <setup-card v-if="needSetup" :show="needSetup" @closeSetup="closeSetupCard" />
      </v-flex>
      <v-flex xs12 class="dashboard__content-row">
        <v-layout row wrap align-space-around fill-height>
          <v-flex xs12 sm6 class="dashboard__open-jobs-freeelancers">
            <open-jobs :open-jobs-list="openJobsList" />
          </v-flex>
          <v-flex xs12 sm6 class="dashboard__jobs-in-progress-articles">
            <jobs-in-progress :jobs-in-progress-list="jobsInProgressList" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap align-space-around fill-height>
          <v-flex xs12 sm6 class="dashboard__open-jobs-freeelancers">
            <my-freelancers :my-freelancers-list="myFreelancersList" />
          </v-flex>
          <v-flex xs12 sm6 class="dashboard__jobs-in-progress-articles">
            <community-articles :community-articles-list="communityArticlesList" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import SetupCard from '@/components/dashboard/SetupCard';
import OpenJobs from '@/components/dashboard/OpenJobs';
import JobsInProgress from '@/components/dashboard/JobsInProgress';
import CommunityArticles from '@/components/dashboard/CommunityArticles';
import MyFreelancers from '@/components/dashboard/MyFreelancers';
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'Dashboard',
  components: {
    SetupCard, OpenJobs, JobsInProgress, CommunityArticles, MyFreelancers
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
