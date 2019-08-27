<template>
  <v-card class="base-card base-card_default base-card-shadow">
    <v-card-title class="base-card__title">
      <h4 class="base-card__header primary--text text-no-wrap">
        {{ t('jobsInProgress.jobsInProgressHeader') }}
      </h4>
    </v-card-title>
    <v-card-text class="base-card__content">
      <v-layout
        row
        wrap
        justify-center
        text-xs-center
        class="base-card__info-row"
      >
        <v-flex md6 xs12>
          <v-layout row wrap align-center class="text-md-center text-xs-left">
            <v-flex md12 sm3 xs2 class="base-card__numbers-count">
              {{ jobsInProgressList.inProgress }}
            </v-flex>
            <v-flex md12 class="base-card__subheader">
              {{ t('jobsInProgress.jobsInProgressSubheader') }}
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md6 xs12>
          <v-layout row wrap align-center class="text-md-center text-xs-left">
            <v-flex md12 sm3 xs2 class="base-card__numbers-count">
              {{ jobsInProgressList.currentHours }}
            </v-flex>
            <v-flex md12 class="base-card__subheader">
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
    <v-card-actions class="base-card__action">
      <nuxt-link to="#" class="base-card__link">
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
