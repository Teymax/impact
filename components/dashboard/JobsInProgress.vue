<template>
  <v-card class="dashboard__card base-card-shadow">
    <v-card-title class="dashboard__card-title">
      <h4 class="dashboard__subheaders primary--text text-no-wrap">
        {{ t('jobsInProgress.jobsInProgressHeader') }}
      </h4>
    </v-card-title>
    <v-card-text class="dashboard__card-content">
      <v-layout
        row
        wrap
        justify-center
        text-xs-center
        class="dashboard__jobs-count-row"
      >
        <v-flex md6 xs12>
          <v-layout row wrap align-center class="text-md-center text-xs-left">
            <v-flex md12 sm3 xs2 class="dashboard__jobs-count">
              {{ jobsInProgressList.inProgress }}
            </v-flex>
            <v-flex md12 class="dashboard__job-subheader">
              {{ t('jobsInProgress.jobsInProgressSubheader') }}
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md6 xs12>
          <v-layout row wrap align-center class="text-md-center text-xs-left">
            <v-flex md12 sm3 xs2 class="dashboard__jobs-count">
              {{ jobsInProgressList.currentHours }}
            </v-flex>
            <v-flex md12 class="dashboard__job-subheader">
              {{ t('jobsInProgress.hoursLogged') }}
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-divider />
      <v-layout row wrap class="dashboard__jobs-list">
        <v-flex v-for="item in jobsInProgressList.jobs" :key="item.title" xs12>
          <p>
            <span class="dashboard__job-title">{{ item.title }}</span>
            <span class="dashboard__job-proposals">
              {{ item.hours }} {{ t('jobsInProgress.hours') }} {{ t('jobsInProgress.currency') }}{{ item.price }}
            </span>
            {{ t('jobsInProgress.by') }} {{ item.author }}
          </p>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="dashboard__actions-block">
      <nuxt-link to="#" class="dashboard__link">
        {{ t('jobsInProgress.allJobsInProgress') }}
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'JobsInProgress',
  mixins: [textTranslations],
  props: {
    jobsInProgressList: {
      type: Object,
      default: () => ({
        inProgress: 0,
        currentHours: 0,
        jobs: null
      })
    }
  },
  data() {
    return {
      translationScope: 'dashboard'
    };
  }
};
</script>
