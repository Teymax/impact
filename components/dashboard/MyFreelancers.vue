<template>
  <v-card class="base-card-style base-card-shadow">
    <v-card-title class="base-card-title">
      <h4 class="base-card-header primary--text text-no-wrap">
        {{ t('myFreelancers.myFreelancersHeader') }}
      </h4>
    </v-card-title>
    <v-card-text class="base-card-content">
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
                {{ item.speciality }}
                <span class="dashboard__job-proposals">({{ item.hours }} {{ t('myFreelancers.hours') }})</span>
              </p>
            </v-flex>
            <v-flex>
              <v-btn
                flat
                round
                block
                class="text-none azure base homepage__btn white--text ml-0"
              >
                {{ t('myFreelancers.hire') }}
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="base-card-action">
      <nuxt-link to="#" class="base-card-link">
        {{ t('myFreelancers.hiredFreelancers') }} (15)
      </nuxt-link>
      <v-spacer />
      <nuxt-link to="#" class="base-card-link text-sm-right">
        <v-icon>search</v-icon>
        {{ t('myFreelancers.findNewFreelancers') }}
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import Avatar from '../shared/AvatarComponent';
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'MyFreelancers',
  components: {
    Avatar
  },
  mixins: [textTranslations],
  props: {
    myFreelancersList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      translationScope: 'dashboard'
    };
  }
};
</script>
