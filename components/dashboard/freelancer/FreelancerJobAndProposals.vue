<template>
  <v-layout column class="base-card base-card_default base-card-shadow freelancer-card">
    <v-flex class="base-card__title" mb-4>
      <h4 class="base-card__header primary--text text-no-wrap">
        {{ localization.header }}
      </h4>
    </v-flex>
    <v-layout
      class="base-card__content base-card__info-row"
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
          <v-flex class="freelancers__freelancer-name base-card__subheader">
            {{ localization.description1 }}
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md6 xs12>
        <v-layout row wrap align-center class="text-md-center text-xs-left">
          <v-flex md12 xs3 class="freelancer-card__number-primary">
            {{ myJobsAndProposals.value2 }}
          </v-flex>
          <v-flex md12 class="freelancers__freelancer-name base-card__subheader">
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
        mb-4
        row
        justify-start
      >
        <v-flex
          mr-4
          xs2
          class="freelancer-card__affair-type"
          :class="'freelancer-card__affair-type_' + item.type.toLowerCase()"
        >
          {{ item.type }}
        </v-flex>
        <v-flex class="d-inline-block">
          <span class="d-inline-block mr-3">
            {{ item.title }}
          </span>
          <span>{{ item.status }}</span>
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
