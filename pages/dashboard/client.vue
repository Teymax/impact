<template>
  <v-container class="dashboard__content">
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="dashboard__header">
          My Dashboard
        </h4>
      </v-flex>
      <v-flex xs12 class="dashboard__setup">
        <setup-card v-if="needSetup" :show="needSetup" @closeSetup="closeSetupCard" />
      </v-flex>
      <v-flex xs12 class="mb-5">
        <v-layout row wrap align-space-around fill-height>
          <v-flex xs12 sm6 class="dashboard__left-card">
            <open-jobs :open-jobs-list="openJobsList" />
          </v-flex>
          <v-flex xs12 sm6 class="dashboard__right-card">
            <jobs-in-progress :jobs-in-progress-list="jobsInProgressList" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap align-space-around fill-height>
          <v-flex xs12 sm6 class="dashboard__left-card">
            <my-freelancers :my-freelancers-list="myFreelancersList" />
          </v-flex>
          <v-flex xs12 sm6 class="dashboard__right-card">
            <community-articles :community-articles-list="communityArticlesList" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SetupCard from '../../components/dashboard/SetupCard';
import OpenJobs from '../../components/dashboard/OpenJobs';
import JobsInProgress from '../../components/dashboard/JobsInProgress';
import CommunityArticles from '../../components/dashboard/CommunityArticles';
import MyFreelancers from '../../components/dashboard/MyFreelancers';
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'Dashboard',
  components: {
    SetupCard, OpenJobs, JobsInProgress, CommunityArticles, MyFreelancers
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'clientDashboard',
      needSetup: true
    };
  },
  computed: {
    openJobsList() {
      return this.$store.state.dashboard.openJobsList;
    },
    jobsInProgressList() {
      return this.$store.state.dashboard.jobsInProgressList;
    },
    communityArticlesList() {
      return this.$store.state.dashboard.communityArticlesList;
    },
    myFreelancersList() {
      return this.$store.state.dashboard.myFreelancersList;
    }
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

<style scoped>

</style>
