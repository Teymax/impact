<template>
  <v-card class="dashboard__card">
    <v-card-title>
      <h4 class="dashboard__subheaders primary--text text-no-wrap">
        Jobs in Progress
      </h4>
    </v-card-title>
    <v-card-text>
      <v-layout row wrap justify-center text-xs-center class="dashboard__first-row">
        <v-flex xs6>
          <p class="dashboard__jobs-count">
            {{ jobsInProgressList.inProgress }}
          </p>
          <p>Jobs in Progress</p>
        </v-flex>
        <v-flex xs6>
          <v-flex>
            <p class="dashboard__jobs-count">
              {{ jobsInProgressList.currentHours }}
            </p>
            <p>Hours Logged This Week</p>
          </v-flex>
        </v-flex>
      </v-layout>
      <v-divider />
      <v-layout row wrap>
        <v-flex v-for="item in jobsInProgressList.jobs" :key="item.title" xs12>
          <v-layout row wrap>
            <v-flex>
              <p>
                <span class="dashboard__job-title">{{ item.title }}</span>
                <span class="dashboard__job-proposals">{{ item.hours }} hrs ${{ item.price }} </span>
                by {{ item.author }}
              </p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex>
          <a class="dashboard__link">All Jobs in Progress</a>
        </v-flex>
      </v-layout>
    </v-card-text>
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
