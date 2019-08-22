<template>
  <v-card class="dashboard__card">
    <v-card-title>
      <h4 class="dashboard__subheaders primary--text text-no-wrap">
        My Freelancers
      </h4>
    </v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <template
          v-for="item in myFreelancersList"
        >
          <v-flex :key="item.name" xs12>
            <v-layout row wrap align-center>
              <v-flex xs>
                <avatar size="xs" :img="item.img" />
              </v-flex>
              <v-flex md8 xs9>
                <p class="dashboard__freelancer-name mb-0">
                  {{ item.name }}
                </p>
                <p class="dashboard__freelancer-spec mb-0">
                  {{ item.speciality }} <span class="dashboard__job-proposals">({{ item.hours }})</span>
                </p>
              </v-flex>
              <v-flex xs>
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
        </template>
      </v-layout>
      <v-layout row wrap>
        <a class="dashboard__link">Hired Freelancers (15)</a>
        <v-spacer />
        <a class="dashboard__link">Find New Freelancers</a>
      </v-layout>
    </v-card-text>
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
      default: () => null
    }
  }
};
</script>

<style scoped>

</style>
