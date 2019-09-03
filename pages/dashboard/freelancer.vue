<template>
  <v-container class="dashboard__content">
    <v-layout column wrap justify-space-between>
      <v-flex v-if="needSetup" xs12 class="dashboard__setup">
        <setup-profile @closeSetup="closeSetupCard" />
      </v-flex>
      <v-flex xs12>
        <h4 class="dashboard__header freelancer__header">
          My Dashboard
        </h4>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap justify-space-between align-content-space-between>
          <v-flex xs12 sm12 md5 lg5>
            <new-jobs-impact
              :img="searchJobImg"
              :img-h="153"
              :img-w="123"
              :info="newJobsInfo"
              :is-avatar="false"
            />
          </v-flex>
          <v-flex xs12 sm12 md5 lg5>
            <new-jobs-impact
              :img="avatar"
              :img-h="140"
              :img-w="140"
              :info="rateInfo"
              :is-avatar="true"
            />
          </v-flex>
          <v-flex xs12 sm12 md5 lg5>
            dsdsdsdsdsdsdsd
          </v-flex>
          <v-flex xs12 sm12 md5 lg5>
            dsdsdsdsdsdsdsd
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap justify-space-between align-content-space-between>
          <v-flex xs12 lg6>
            <community-discussions-articles
              :list-title="discussionTitle"
              :items="discussionsItems"
            />
          </v-flex>
          <v-flex xs12 lg6>
            <community-discussions-articles
              :list-title="articlesTitle"
              :items="articlesItems"
            />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SetupProfile from '../../components/dashboard/SetupProfile';
import NewJobsImpact from '../../components/dashboard/NewJobsImpact';
import CommunityDiscussionsArticles from '../../components/dashboard/CommunityDiscussionsArticles';
import textTranslations from '@/mixins/textTranslations';
import searchJobImg from '../../assets/images/dashboard/searchJobImg.png';
import avatar from '../../assets/images/dashboard/avatar.png';

export default {
  name: 'Dashboard',
  components: {
    SetupProfile, NewJobsImpact, CommunityDiscussionsArticles
  },
  mixins: [textTranslations],
  data() {
    return {
      needSetup: true,
      searchJobImg,
      avatar,
      translationScope: 'freelancerDashboard',
      newJobsInfo: [
        {
          number: 25,
          title: 'NEW JOBS',
          description: 'are waiting for you'
        },
        {
          number: 25,
          title: 'IMPACT',
          description: 'left for your proposals'
        }
      ],
      rateInfo: [
        {
          number: '93%',
          title: 'YOUR RATING',
          description: '(<span class="new-job-impact__txt-azure">+2%</span> increase)'
        },
        {
          number: '56%',
          title: 'ACCEPTED PROPOSAL RATE',
          description: ''
        }
      ],
      discussionTitle: 'Communities Discussion',
      articlesTitle: 'Communities Articles',
      discussionsItems: [
        {
          avatar,
          content: 'LOREEEEEEEEM'
        },
        {
          avatar,
          content: 'LOREEEEEEEEM'
        },
        {
          avatar,
          content: 'LOREEEEEEEEM'
        },
        {
          avatar,
          content: 'LOREEEEEEEEM'
        }
      ],
      articlesItems: [
        {
          avatar,
          content: 'LOREEEEEEEEM'
        },
        {
          avatar,
          content: 'LOREEEEEEEEM'
        },
        {
          avatar,
          content: 'LOREEEEEEEEM'
        },
        {
          avatar,
          content: 'LOREEEEEEEEM'
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
