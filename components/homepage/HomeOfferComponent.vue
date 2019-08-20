<template>
  <v-layout
    pa-4
    mb-5
    align-center
    class="base-card-shadow offer-card"
    wrap
  >
    <v-flex
      xs4
    >
      <v-img
        :src="require(`@/assets/images/home/${offer.img}`)"
        contain
        round
        :max-height="130"
        :position="breakpoint.xs ? 'left center' : 'center center'"
      />
    </v-flex>
    <v-flex xs7 sm8>
      <h3 class="offer-card__header hidden-xs-only mb-3">
        {{ offer.header }}
      </h3>
      <v-layout wrap mb-2>
        <v-flex
          xs12
          sm5
          md3
          class="offer-card__icon-box"
        >
          <p
            class="ma-0 primary--text font-weight-bold mr-2"
          >
            {{ offer.payForm === 'fixed'? t('fixedPrice') : t('perHour') }}
          </p>
          <p class="ma-0">
            {{ offer.ammount }}
          </p>
        </v-flex>
        <v-flex xs12 sm5 md3 class="offer-card__icon-box">
          <p class="ma-0 primary--text font-weight-bold mr-2">
            {{ t('clientRating') }}
          </p>
          <p class="ma-0">
            {{ offer.review }}
          </p>
        </v-flex>
      </v-layout>
      <p class="font-weight-light offer-card__description hidden-xs-only">
        {{ truncateText(offer.description, 20) }}
      </p>
    </v-flex>
    <h3 class="offer-card__header hidden-sm-and-up mt-3">
      {{ offer.header }}
    </h3>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import watchBreakPoints from '@/mixins/watchBreakPoints';
import truncateWords from '@/mixins/truncateWholeWords';

export default {
  mixins: [textTranslations, watchBreakPoints, truncateWords],
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
