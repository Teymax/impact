<template>
  <v-layout class="base-card freelancer-card">
    <v-flex xl6 md5 class="freelancer-card__left-side">
      <v-img
        :src="img"
        contain
        :max-width="112"
      />
    </v-flex>
    <v-layout xl6 column md7 xs12 class="freelancer-card__right-side">
      <v-layout class="freelancer-card__row mb-2">
        <v-flex class="mr-4" xs4>
          <p class="home-info__percentage freelancer-card__percentage">
            {{ freelancerData.value1 }}
          </p>
        </v-flex>
        <v-layout xs8 column justify-between>
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
        </v-layout>
      </v-layout>
      <v-layout class="freelancer-card__row">
        <v-flex class="mr-4" xs4>
          <p class="home-info__percentage freelancer-card__percentage">
            {{ freelancerData.value2 }}
          </p>
        </v-flex>
        <v-layout xs8 column justify-between>
          <p class="freelancers__freelancer-name base-card__subheader">
            {{ localization.headline2 }}
          </p>
          <p class="base-card__regular-text">
            {{ localization.description2 }}
          </p>
        </v-layout>
      </v-layout>
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
