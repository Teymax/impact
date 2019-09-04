<template>
  <v-layout class="base-card freelancer-card freelancer-card__base">
    <v-flex md5 xl6 class="freelancer-card__first-section">
      <v-img
        :src="img"
        contain
        :max-width="112"
      />
    </v-flex>
    <v-layout row wrap xs12 md7 xl6>
      <v-flex xs12 class="freelancer-card__row mb-2">
        <v-layout row wrap align-center justify-space-between>
          <v-flex xs4 class="freelancer-card--flex-basis_auto">
            <p class="home-info__percentage freelancer-card__percentage my-0">
              {{ freelancerData.value1 }}
            </p>
          </v-flex>
          <v-flex xs7>
            <p class="freelancers__freelancer-name base-card__subheader">
              {{ localization.headline1 }}
            </p>
            <p class="base-card__regular-text">
              <template v-if="targetComponent === 'freelancerCardRightSide'">
                (<span class="azure--text">{{ localization.percentage }}</span>
                {{ localization.description1 }})
              </template>
              <template v-else>
                {{ localization.description1 }}
              </template>
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap align-center justify-space-between>
          <v-flex xs4 class="freelancer-card--flex-basis_auto">
            <p class="home-info__percentage freelancer-card__percentage my-0">
              {{ freelancerData.value2 }}
            </p>
          </v-flex>
          <v-flex xs7>
            <p class="freelancers__freelancer-name base-card__subheader">
              {{ localization.headline2 }}
            </p>
            <p class="base-card__regular-text">
              {{ localization.description2 }}
            </p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'FreelancerBaseCard',
  mixins: [textTranslations],
  props: {
    freelancerData: {
      type: Object,
      default: () => ({
        value1: 0,
        value2: 0
      })
    },
    img: {
      type: String,
      default: ''
    },
    localization: {
      type: Object,
      default: () => ({
        headline1: '',
        description1: '',
        headline2: '',
        description2: ''
      })
    },
    targetComponent: {
      type: String,
      default: 'freelancerCardLeftSide'
    }
  },
  data() {
    return {
      translationScope: 'freelancerDashboard',
      needSetup: true
    };
  },
  computed: {
    newProposals() {
      return 3;
    }
  }
};
</script>
