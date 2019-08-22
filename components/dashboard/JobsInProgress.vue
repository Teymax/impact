<template>
  <v-card class="dashboard__card base-card-shadow">
    <v-card-title class="dashboard__card-title">
      <h4 class="dashboard__subheaders primary--text text-no-wrap">
        Jobs in Progress
      </h4>
    </v-card-title>
    <v-card-text class="dashboard__card-content">
      <v-layout
        row
        wrap
        justify-center
        text-xs-center
        class="dashboard__first-row"
      >
        <v-flex md6 xs12>
          <v-layout row wrap align-center class="text-md-center text-xs-left">
            <v-flex md12 sm3 xs2 class="dashboard__jobs-count">
              {{ jobsInProgressList.inProgress }}
            </v-flex>
            <v-flex md12 class="dashboard__job-subheader">
              Jobs in Progress
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md6 xs12>
          <v-layout row wrap align-center class="text-md-center text-xs-left">
            <v-flex md12 sm3 xs2 class="dashboard__jobs-count">
              {{ jobsInProgressList.currentHours }}
            </v-flex>
            <v-flex md12 class="dashboard__job-subheader">
              Hours Logged This Week
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-divider />
      <v-layout row wrap class="dashboard__second-row">
        <v-flex v-for="item in jobsInProgressList.jobs" :key="item.title" xs12>
          <p>
            <span class="dashboard__job-title">{{ item.title }}</span>
            <span class="dashboard__job-proposals">{{ item.hours }} hrs ${{ item.price }} </span>
            by {{ item.author }}
          </p>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="dashboard__actions-block">
      <a class="dashboard__link">All Jobs in Progress</a>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'JobsInProgress',
  props: {
    jobsInProgressList: {
      type: Object,
      default: () => ({
        inProgress: 0,
        currentHours: 0,
        jobs: null
      })
    }
  }
};
</script>

<style scoped>

</style>
