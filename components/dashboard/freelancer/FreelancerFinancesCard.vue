<template>
  <v-layout column class="base-card base-card_default base-card-shadow freelancer-card">
    <v-flex class="base-card__title" mb-4>
      <h4 class="base-card__header primary--text text-no-wrap">
        {{ localization.header }}
      </h4>
    </v-flex>
    <v-layout
      class="base-card__content"
      row
      wrap
      justify-center
      align-space-between
      text-xs-center
    >
      <v-flex lg6 xs12>
        <v-layout row wrap align-center justify-center class="text-xs-left text-sm-center">
          <v-flex sm12 xs5 class="freelancer-card__number-primary">
            {{ freelancerFinances.value1 }}
          </v-flex>
          <v-flex sm12 xs7 class="freelancers__freelancer-name base-card__subheader">
            {{ localization.description1 }}
          </v-flex>
          <v-flex mt-3>
            <v-btn
              flat
              round
              class="text-none azure base homepage__btn white--text ml-0 hidden-xs-only"
            >
              {{ localization.button1 }}
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex lg6 xs12>
        <v-layout row wrap align-center justify-center class="text-xs-left text-sm-center">
          <v-flex
            class="flex wrap md12 xs5 freelancer-card__number-primary freelancer-card__finances-number_fixed-height
              freelancer-card_line-height-fix-xs freelancer-card_padding-top-xs_1"
          >
            <span>
              {{ freelancerFinances.value2 }}
            </span>
            <span class="font-weight-regular subheading">
              (<span class="azure--text font-weight-regular subheading">{{ freelancerFinances.profit }}</span>)
            </span>
          </v-flex>
          <v-flex sm12 xs7 class="freelancers__freelancer-name base-card__subheader freelancer-card_line-height-fix-xs">
            {{ localization.description2 }}
          </v-flex>
          <v-layout
            flex
            xs12
            mt-4
            pt-2
            row
            justify-between
            class="hidden-xs-only"
          >
            <v-flex>
              <nuxt-link to="#" class="base-card__link d-inline-block">
                {{ localization.button2 }}
              </nuxt-link>
            </v-flex>
            <v-flex justify-between>
              <nuxt-link to="#" class="base-card__link d-inline-block">
                {{ localization.button3 }}
              </nuxt-link>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-btn
              flat
              round
              class="text-none azure base homepage__btn white--text mt-4 hidden-sm-and-up"
            >
              {{ localization.button1 }}
            </v-btn>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="#fff"
          max-width="100%"
        >
          <v-sparkline
            padding="20"
            class="sparkline"
            fill
            :value="value"
            :line-width="2"
            :show-labels="false"
            :color="'#0a91ff'"
          />
        </v-sheet>
      </v-flex>
    </v-layout>
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
      translationScope: 'freelancerDashboard',
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm'
      ],
      value: [
        335,
        328,
        345,
        329,
        331,
        326,
        348
      ]
    };
  },
  computed: {
    newProposals() {
      return 3;
    }
  }
};
</script>
