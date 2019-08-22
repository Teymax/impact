<template>
  <v-card class="dashboard__card base-card-shadow">
    <v-card-title class="dashboard__card-title">
      <h4 class="dashboard__subheaders primary--text text-no-wrap">
        Open Jobs and Proposals
      </h4>
    </v-card-title>
    <v-card-text class="dashboard__card-content">
      <v-layout
        row
        wrap
        justify-center
        align-space-between
        text-xs-center
        class="dashboard__first-row"
      >
        <v-flex lg4 md6 xs12>
          <p class="dashboard__jobs-count">
            {{ openJobsList.currentJobs }}
          </p>
          <p class="dashboard__job-subheader">
            Current Jobs
          </p>
        </v-flex>
        <v-flex lg4 md6 xs12>
          <p class="dashboard__jobs-count">
            {{ openJobsList.activeProposals }}
          </p>
          <p class="dashboard__job-subheader">
            Active Proposals
          </p>
          <p>(<span class="dashboard__job-new-proposals">{{ newProposals }} new</span>)</p>
        </v-flex>
        <v-flex lg4 md12 xs12>
          <p class="dashboard__jobs-count">
            {{ openJobsList.impactsLeft }}
          </p>
          <p class="dashboard__job-subheader">
            Impacts Left
          </p>
        </v-flex>
      </v-layout>
      <v-divider />
      <v-layout row wrap class="dashboard__second-row">
        <v-flex v-for="item in openJobsList.jobs" :key="item.title" xs12>
          <p>
            <span class="dashboard__job-title">{{ item.title }}</span>
            <span class="dashboard__job-proposals">{{ item.proposals }}</span>
            <template v-if="item.new > 0">
              (<span class="dashboard__job-new-proposals">{{ `${item.new} new` }}</span>)
            </template>
            Proposals
          </p>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="dashboard__actions-block">
      <a class="dashboard__link">All Open Jobs</a>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'OpenJobs',
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
  computed: {
    newProposals() {
      return 3;
    }
  }
};
</script>

<style scoped>

</style>
