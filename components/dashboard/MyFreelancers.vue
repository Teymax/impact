<template>
  <v-card class="dashboard__card">
    <v-card-title class="dashboard__card-title">
      <h4 class="dashboard__subheaders primary--text text-no-wrap">
        My Freelancers
      </h4>
    </v-card-title>
    <v-card-text class="dashboard__card-content">
      <v-layout row wrap>
        <v-flex v-for="item in myFreelancersList" :key="item.name" xs12 class="dashboard__freelancer-row">
          <v-layout row wrap align-center>
            <v-flex>
              <avatar size="xs" :img="item.img" />
            </v-flex>
            <v-flex md8 xs9>
              <p class="dashboard__freelancer-name mb-0">
                {{ item.name }}
              </p>
              <p class="dashboard__freelancer-spec mb-0">
                {{ item.speciality }} <span class="dashboard__job-proposals">({{ item.hours }} hrs)</span>
              </p>
            </v-flex>
            <v-flex>
              <v-btn
                flat
                round
                block
                class="text-none azure base homepage__btn white--text ml-0"
              >
                Hire
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="dashboard__actions-block">
      <a class="dashboard__link">Hired Freelancers (15)</a>
      <v-spacer />
      <a class="dashboard__link">
        <v-icon>search</v-icon>
        Find New Freelancers</a>
    </v-card-actions>
  </v-card>
</template>

<script>
import Avatar from '../shared/AvatarComponent';

export default {
  name: 'MyFreelancers',
  components: {
    Avatar
  },
  props: {
    myFreelancersList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>

</style>
