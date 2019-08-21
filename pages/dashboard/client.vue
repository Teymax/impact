<template>
  <v-container>
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
        <v-layout row align-space-around fill-height>
          <v-flex xs12 sm6 class="pr-4">
            <open-jobs :open-jobs-list="openJobsList" />
          </v-flex>
          <v-flex xs12 sm6 class="pl-4">
            <jobs-in-progress :jobs-in-progress-list="jobsInProgressList" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout row>
          <v-flex xs12 sm6 class="pr-4">
            <v-card>
              <v-card-title>
                <h1 class="dashboard__subheaders primary--text text-no-wrap">
                  My Freelancers
                </h1>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 class="pl-4">
            <community-articles />
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
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'Dashboard',
  components: {
    SetupCard, OpenJobs, JobsInProgress, CommunityArticles
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'clientDashboard',
      needSetup: true,
      openJobsList: {
        currentJobs: 2,
        activeProposals: 12,
        impactsLeft: 30,
        jobs: [
          {
            title: 'A job with a sort name',
            proposals: 5,
            new: 3
          },
          {
            title: 'Some longer job name, it can be long',
            proposals: 7,
            new: 0
          }
        ]
      },
      jobsInProgressList: {
        inProgress: 5,
        currentHours: 17,
        jobs: [
          {
            title: 'A job with a sort name',
            hours: 8,
            price: 45,
            author: 'Roman Brown'
          },
          {
            title: 'Some longer job name, it can be...',
            hours: 3,
            price: 50,
            author: 'Joanna Pierce'
          },
          {
            title: 'Urgent job redesigning marketi...',
            hours: 10,
            price: 35,
            author: 'Tim Baker'
          }
        ]
      }
    };
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
