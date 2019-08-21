<template>
  <v-card class="dashboard__card">
    <v-card-title>
      <h1 class="dashboard__subheaders primary--text text-no-wrap">
        Open Jobs and Proposals
      </h1>
    </v-card-title>
    <v-card-text>
      <v-layout
        row
        wrap
        justify-center
        align-space-between
        text-xs-center
        class="dashboard__first-row"
      >
        <v-flex>
          <p class="dashboard__jobs-count">
            {{ openJobsList.currentJobs }}
          </p>
          <p>Current Jobs</p>
        </v-flex>
        <v-flex>
          <v-flex>
            <p class="dashboard__jobs-count">
              {{ openJobsList.activeProposals }}
            </p>
            <p>Active Proposals</p>
            <p>(<span class="dashboard__job-new-proposals">{{ newProposals }} new</span>)</p>
          </v-flex>
        </v-flex>
        <v-flex>
          <v-flex>
            <p class="dashboard__jobs-count">
              {{ openJobsList.impactsLeft }}
            </p>
            <p>Impacts Left</p>
          </v-flex>
        </v-flex>
      </v-layout>
      <v-divider />
      <v-layout row wrap>
        <v-list>
          <v-list-tile
            v-for="item in openJobsList.jobs"
            :key="item.title"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                <span class="dashboard__job-title">{{ item.title }}</span>
                <span class="dashboard__job-proposals">{{ item.proposals }}</span>
                <template v-if="item.new > 0">
                  (<span class="dashboard__job-new-proposals">{{ `${item.new} new` }}</span>)
                </template>
                Proposals
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-layout>
      <v-layout row wrap>
        <a class="dashboard__link">All Open Jobs</a>
      </v-layout>
    </v-card-text>
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
