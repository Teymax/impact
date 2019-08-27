<template>
  <v-card class="base-card base-card_default base-card-shadow">
    <v-card-title class="base-card__title">
      <h4 class="base-card__header primary--text text-no-wrap">
        {{ t('openJobs.openJobsHeader') }}
      </h4>
    </v-card-title>
    <v-card-text class="base-card__content">
      <v-layout
        row
        wrap
        justify-center
        align-space-between
        text-xs-center
        class="base-card__info-row"
      >
        <v-flex lg4 md6 xs12>
          <v-layout row wrap align-center class="text-md-center text-xs-left">
            <v-flex md12 sm3 xs2 class="base-card__numbers-count">
              {{ openJobsList.currentJobs }}
            </v-flex>
            <v-flex class="base-card__subheader">
              {{ t('openJobs.currentJobs') }}
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex lg4 md6 xs12>
          <v-layout row wrap align-center class="text-md-center text-xs-left">
            <v-flex md12 sm3 xs2 class="base-card__numbers-count">
              {{ openJobsList.activeProposals }}
            </v-flex>
            <v-flex md12 class="base-card__subheader">
              {{ t('openJobs.activeProposals') }}
            </v-flex>
            <v-flex>(<span class="dashboard__job-new-proposals">{{ newProposals }} new</span>)</v-flex>
          </v-layout>
        </v-flex>
        <v-flex lg4 md6 xs12>
          <v-layout row wrap align-center class="text-md-center text-xs-left">
            <v-flex md12 sm3 xs2 class="base-card__numbers-count">
              {{ openJobsList.impactsLeft }}
            </v-flex>
            <v-flex class="base-card__subheader">
              {{ t('openJobs.impactsLeft') }}
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-divider />
      <v-layout row wrap class="dashboard__jobs-list">
        <v-flex v-for="item in openJobsList.jobs" :key="item.title" xs12>
          <p>
            <span class="dashboard__job-title">{{ item.title }}</span>
            <span class="dashboard__job-proposals">{{ item.proposals }}</span>
            <template v-if="item.new > 0">
              (<span class="dashboard__job-new-proposals">{{ `${item.new} new` }}</span>)
            </template>
            {{ t('openJobs.proposals') }}
          </p>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="base-card__action">
      <nuxt-link to="#" class="base-card__link">
        {{ t('openJobs.allOpenJobs') }}
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'OpenJobs',
  mixins: [textTranslations],
  props: {
    openJobsList: {
      type: Object,
      default: () => ({
        currentJobs: 0,
        activeProposals: 0,
        impactsLeft: 0,
        jobs: null
      })
    }
  },
  data() {
    return {
      translationScope: 'dashboard'
    };
  },
  computed: {
    newProposals() {
      return 3;
    }
  }
};
</script>
