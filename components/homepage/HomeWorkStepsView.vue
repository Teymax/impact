<template>
  <v-layout
    xs12
    class="work-steps__container"
    justify-center
    wrap
  >
    <v-flex xs12>
      <h2 class="text-xs-center work-steps__header">
        {{ t('howItWorks') }}
      </h2>
    </v-flex>
    <v-flex lg8 mt-5>
      <v-layout wrap justify-center align-end>
        <v-flex
          v-for="step in workSteps"
          :key="step.id"
          xs12
          md6
          pa-4
        >
          <v-layout wrap justify-center>
            <v-flex xs12>
              <v-layout justify-center>
                <v-img
                  :src="require(`@/assets/images/home/${step.img}.svg`)"
                  contains
                  :max-width="380"
                />
              </v-layout>
            </v-flex>
            <v-flex>
              <v-layout align-center justify-center>
                <small
                  class="font-weight-light
                work-steps__iteration primary--text mr-3 hidden-xs-only"
                >
                  {{ `${step.id}.` }}
                </small>
                <v-layout
                  justify-start
                  column
                  mt-1
                  class="work-steps__description"
                >
                  <h3>
                    {{ step.title }}
                  </h3>
                  <p class="mb-0">
                    {{ step.description }}
                  </p>
                </v-layout>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'HomepageWorkSteps',
  components: {
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'homepage'
    };
  },
  computed: {
    workSteps() {
      return [
        {
          id: 1,
          title: this.t('clientsCreate'),
          description: this.t('describeProject'),
          img: 'createJobs'
        },
        {
          id: 2,
          title: this.t('freelancerHired'),
          description: this.t('connectWithQuality'),
          img: 'getHired'
        },
        {
          id: 3,
          title: this.t('getToWork'),
          description: this.t('useOurCustom'),
          img: 'getToWork'
        },
        {
          id: 4,
          title: this.t('recivePayments'),
          description: this.t('projectCanBePaid'),
          img: 'recivePayments'
        }
      ];
    }
  }
};
</script>
