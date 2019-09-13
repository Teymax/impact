<template>
  <v-flex class="freelancer__card-box">
    <v-layout

      class="freelancer__card"
    >
      <v-flex
        shrink
        class="freelancer__card-column hidden-xs-only"
      >
        <div class="freelancer__img-box font-size--h5 font-weight-bold">
          {{ offer.fullName | initials }}
        </div>
      </v-flex>

      <v-flex grow class="freelancer__card-column">
        <v-layout align-center>
          <v-flex
            shrink
            class="freelancer__card-column hidden-sm-and-up"
          >
            <div class="freelancer__img-box font-size--h5 font-weight-bold">
              {{ offer.fullName | initials }}
            </div>
          </v-flex>
          <v-flex shrink sm12>
            <h4 class="font-size--h5 mb-2">
              {{ offer.fullName }}
            </h4>
            <p class="ma-0 font-size--h6">
              {{ offer.proffesion }}
            </p>
          </v-flex>
        </v-layout>
        <v-layout
          class="freelancer__detail-box"
          column
        >
          <v-flex
            class="freelancer__tags-box"
          >
            <span
              v-for="tag in offer.tags"
              :key="tag"
              class="freelancer__tag"
            >
              {{ `#${tag}` }}
            </span>
          </v-flex>
          <v-flex mt-1>
            <v-layout align-end>
              <v-icon class="primary--text freelancer--translated mr-2">
                location_on
              </v-icon>
              <p class="ma-0 mr-2 freelancer__info-item freelancer--translated">
                {{ offer.location }}
              </p>
              <v-icon class="primary--text mr-2">
                star_border
              </v-icon>
              <p class="ma-0 freelancer__info-item no-wrap">
                {{ t('rating', { number: offer.rating }) }}
              </p>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex
        shrink
        class="freelancer__card-column"
      >
        <v-layout wrap column align-center justify-end text-xs-center>
          <v-flex xs12 class="freelancer__price text-xs-center no-wrap">
            {{ t('fee', { number: offer.fee }) }}
          </v-flex>
          <v-btn
            round
            class="azure white--text text-capitalize font-size--p font-weight-bold px-4 ma-0 mt-2"
          >
            {{ t('viewProfile') }}
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'HomepageFreelancerOfferComponent',
  filters: {
    initials(text) {
      const splitedText = text.split(' ');
      return splitedText.map(word => word[0]).join('').toUpperCase();
    }
  },
  mixins: [textTranslations],
  props: {
    offer: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      translationScope: 'homepage'
    };
  }
};
</script>
