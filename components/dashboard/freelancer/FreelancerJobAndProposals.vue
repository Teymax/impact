<template>
  <v-layout column class="base-card base-card_default base-card-shadow freelancer-card">
    <v-flex class="base-card__title" mb-4>
      <h4 class="base-card__header primary--text text-no-wrap">
        {{ localization.header }}
      </h4>
    </v-flex>
    <v-layout
      class="base-card__content pt-4 pb-5"
      row
      wrap
      justify-center
      align-space-between
      text-xs-center
    >
      <v-flex md6 xs12>
        <v-layout row wrap align-center class="text-md-center text-xs-left">
          <v-flex md12 xs3 class="freelancer-card__number-primary">
            {{ myJobsAndProposals.value1 }}
          </v-flex>
          <v-flex class="freelancer-card__title">
            {{ localization.description1 }}
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md6 xs12>
        <v-layout row wrap align-center class="text-md-center text-xs-left">
          <v-flex md12 xs3 class="freelancer-card__number-primary">
            {{ myJobsAndProposals.value2 }}
          </v-flex>
          <v-flex md12 class="freelancer-card__title">
            {{ localization.description2 }}
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider />
    <v-layout column wrap class="dashboard__jobs-list">
      <v-layout
        v-for="(item, index) in myJobsAndProposals.items"
        :key="index"
        mb-3
        row
        wrap
        justify-start
        align-center
      >
        <div
          class="freelancer-card__affair-type mr-3"
          :class="'freelancer-card__affair-type_' + item.type.toLowerCase()"
        >
          {{ item.type }}
        </div>
        <p class="d-inline-block mr-3 freelancer-card__subtitle mb-0">
          {{ item.title }}
          <span class="d-inline-block freelancer-card__secondary-text">{{ item.status }}</span>
        </p>
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
        value1: 0,
        value2: 0,
        items: [
          {
            type: 'Job',
            title: 'Some proposal name',
            status: '1 day left'
          }
        ]
      })
    },
    localization: {
      type: Object,
      default: () => ({
        header: 'My Jobs and Proposals',
        description1: '',
        description2: ''
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
