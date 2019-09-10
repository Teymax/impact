<template>
  <v-layout column class="base-card base-card--default base-card-shadow freelancer-card">
    <v-flex mb-4 class="base-card__title">
      <h4 class="base-card__header primary--text text-no-wrap">
        {{ localization.header }}
      </h4>
    </v-flex>
    <v-layout
      row
      wrap
      justify-center
      align-space-between
      text-xs-center
      pt-4
      pb-5
      class="base-card__content"
    >
      <v-flex xs12 md6>
        <v-layout row wrap align-center class="text-md-center text-xs-left">
          <v-flex xs3 md12 class="freelancer-card__number-primary">
            {{ myJobsAndProposals.currentJobs }}
          </v-flex>
          <v-flex class="freelancer-card__title">
            {{ localization.currentJobsDescription }}
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6>
        <v-layout row wrap align-center class="text-md-center text-xs-left">
          <v-flex xs3 md12 class="freelancer-card__number-primary">
            {{ myJobsAndProposals.activeProposals }}
          </v-flex>
          <v-flex md12 class="freelancer-card__title">
            {{ localization.activeProposalsDescription }}
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider />
    <v-layout column wrap class="dashboard__jobs-list">
      <v-layout
        v-for="item in myJobsAndProposals.items"
        :key="item.id"
        mb-3
        row
        wrap
        justify-start
        align-center
      >
        <v-flex xs12 sm3>
          <v-flex
            xs8
            class="freelancer-card__affair-type mr-3"
            :class="`freelancer-card__affair-type--${item.type.toLowerCase()}`"
          >
            {{ item.type }}
          </v-flex>
        </v-flex>
        <v-flex xs12 sm8 mr-3 mb-0 class="freelancer-card__subtitle">
          {{ item.title }}
          <span class="freelancer-card__secondary-text">{{ item.status }}</span>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'FreelancerJobAndProposals',
  mixins: [textTranslations],
  props: {
    myJobsAndProposals: {
      type: Object,
      default: () => ({
        currentJobs: 0,
        activeProposals: 0,
        items: [
          {
            type: 'Job',
            title: 'Some proposal name',
            status: '1 day left',
            id: 1
          }
        ]
      })
    },
    localization: {
      type: Object,
      default: () => ({
        header: 'My Jobs and Proposals',
        currentJobsDescription: '',
        activeProposalsDescription: ''
      })
    }
  },
  data() {
    return {
      translationScope: 'freelancerDashboard'
    };
  },
  computed: {
    newProposals() {
      return 3;
    }
  }
};
</script>
