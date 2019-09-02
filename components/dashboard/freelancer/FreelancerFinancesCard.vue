<template>
  <v-layout column class="base-card base-card_default base-card-shadow freelancer-card">
    <v-flex class="base-card__title" mb-4>
      <h4 class="base-card__header primary--text text-no-wrap">
        {{ localization.header }}
      </h4>
    </v-flex>
    <v-layout
      class="base-card__content base-card__info-row"
      row
      wrap
      justify-center
      align-space-between
      text-xs-center
    >
      <v-flex md6 xs12>
        <v-layout row wrap align-center class="text-md-center text-xs-left">
          <v-flex md12 xs3 class="freelancer-card__number-primary">
            {{ freelancerFinances.value1 }}
          </v-flex>
          <v-flex class="base-card__subheader">
            {{ localization.description1 }}
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md6 xs12>
        <v-layout row wrap align-center class="text-md-center text-xs-left">
          <div md12 xs3 class="freelancer-card__number-primary freelancer-card__finances-number_fixed-height">
            {{ freelancerFinances.value2 }}
            <span class="font-weight-regular subheading">
              (<span class="azure--text font-weight-regular subheading">{{ freelancerFinances.profit }}</span>)
            </span>
          </div>
          <v-flex md12 class="base-card__subheader">
            {{ localization.description2 }}
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

<!--    <v-layout column wrap class="dashboard__jobs-list">-->
<!--      <v-layout-->
<!--        v-for="(item, index) in freelancerFinances.items"-->
<!--        :key="index"-->
<!--        mb-4-->
<!--        row-->
<!--        justify-start-->
<!--      >-->
<!--        <v-flex-->
<!--          mr-4-->
<!--          xs2-->
<!--          class="freelancer-card__affair-type"-->
<!--          :class="'freelancer-card__affair-type_' + item.type.toLowerCase()"-->
<!--        >-->
<!--          {{ item.type }}-->
<!--        </v-flex>-->
<!--        <v-flex class="d-inline-block">-->
<!--          <span class="d-inline-block mr-3">-->
<!--            {{ item.title }}-->
<!--          </span>-->
<!--          <span>{{ item.status }}</span>-->
<!--        </v-flex>-->
<!--      </v-layout>-->
<!--    </v-layout>-->
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'FreelancerFinancesCard',
  mixins: [textTranslations],
  props: {
    freelancerFinances: {
      type: Object,
      default: () => ({
        value1: 0,
        value2: 0,
        items: [
          {
            value1: '$0',
            value2: '$0',
            profit: '',
            point1: '',
            interval1: ''
          }
        ]
      })
    },
    localization: {
      type: Object,
      default: () => ({
        header: 'Finances',
        description1: '',
        description2: '',
        button1: '',
        button2: '',
        button3: ''
      })
    }
  },
  data() {
    return {
      translationScope: 'freelancerDashboard'
    };
  },
  computed: {
    newProposals() {
      return 3;
    }
  }
};
</script>
