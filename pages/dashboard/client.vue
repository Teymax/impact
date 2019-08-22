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
      },
      communityArticlesList: [
        {
          title: 'Best ways to increase your rating?',
          comments: 117,
          new: 2
        },
        {
          title: 'How to get your first client as a new freelanc...',
          comments: 100,
          new: 3
        },
        {
          title: 'Best positive impact stories so far?',
          comments: 98,
          new: 5
        },
        {
          title: 'I need help with some developement issues.',
          comments: 95,
          new: 1
        },
        {
          title: 'Social Impact opportunities for a Writer?',
          comments: 80,
          new: 1
        }
      ],
      myFreelancersList: [
        {
          name: 'Julie Knowles',
          speciality: 'Writer / Translator',
          hours: 15,
          img: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
        },
        {
          name: 'Ben Henderson',
          speciality: 'Full Stack Developer',
          hours: 12,
          img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        },
        {
          name: 'Karen Chen',
          speciality: 'VR / AR Developer',
          hours: 12,
          img: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
        }
      ]
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
