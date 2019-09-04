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
          <v-flex xs12 sm12 md6 lg6 grow pa-3>
            <new-jobs-impact
              :img="searchJobImg"
              :img-height="153"
              :img-width="123"
              :info="newJobsInfo"
              :is-avatar="false"
            />
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 grow pa-3>
            <new-jobs-impact
              :img="avatar"
              :img-height="140"
              :img-width="140"
              :info="rateInfo"
              :is-avatar="true"
            />
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 grow pa-3>
            <jobs-proposals-finances
              :jobs-number="0"
              :proposals-number="0"
              :jobs-description="'ddddd'"
              :proposals-description="'ddddddsdsds'"
              :items="jobsProposalsItems"
              :title="jobsProposalsTitle"></jobs-proposals-finances>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 grow pa-3>
            <jobs-proposals-finances
              :balance="10"
              :earned="20"
              :graph="graph"
              :jobs-description="'ddddd'"
              :proposals-description="'ddddddsdsds'"
              :title="financesTitle"></jobs-proposals-finances>
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
import SetupProfile from '@/components/dashboard/SetupProfile';
import NewJobsImpact from '@/components/dashboard/NewJobsImpact';
import CommunityDiscussionsArticles from '@/components/dashboard/CommunityDiscussionsArticles';
import textTranslations from '@/mixins/textTranslations';
import JobsProposalsFinances from '@/components/dashboard/JobsProposalsFinances';
import searchJobImg from '@/assets/images/dashboard/searchJobImg.png';
import avatar from '@/assets/images/dashboard/avatar.png';

export default {
  name: 'Dashboard',
  components: {
    SetupProfile, NewJobsImpact, CommunityDiscussionsArticles, JobsProposalsFinances
  },
  mixins: [textTranslations],
  data: () => (
    {
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
          description: '(<span class="new-job-impact--txt-azure">+2%</span> increase)'
        },
        {
          number: '56%',
          title: 'ACCEPTED PROPOSAL RATE',
          description: ''
        }
      ],
      discussionTitle: 'Community Discussion',
      articlesTitle: 'Community Articles',
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
      ],
      graph: {
        fill: true,
        gradient: ['#F6F6F6'],
        padding: 8,
        radius: 0,
        value: [3, 2, 4, 2, 2.3, 1.5, 4],
        width: 4
      },
      jobsProposalsTitle: 'My Jobs and Proposals',
      jobsProposalsItems: [
        {
          type: 'job',
          content: 'contentsdcnksdcn kjdjcks sdkjk  kjsnckjsnckjscjdsk',
          lastSeen: '1'
        },
        {
          type: 'proposal',
          content: 'contentybucbsd dcsdj dscjh sdjcsdj ddd',
          messagesNum: '1'
        },
        {
          type: 'job',
          content: 'contentsdcnksdcn kjdjcks sdkjk  kjsnckjsnckjscjdsk',
          lastSeen: '3'
        },
        {
          type: 'job',
          content: 'contentsdcnksdcn kjdjcks sdkjk  kjsnckjsnckjscjdsk',
          lastSeen: '3'
        },
        {
          type: 'proposal',
          content: 'contentybucbsd dcsdj dscjh sdjcsdj ddd',
          messagesNum: '12'
        }
      ],
      financesTitle: 'Finances'
    }
  ),
  methods: {
    closeSetupCard() {
      this.needSetup = false;
    }
  }
};
</script>
