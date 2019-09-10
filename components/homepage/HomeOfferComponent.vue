<template>
  <v-layout
    pa-4
    mb-5
    align-center
    class="base-card-shadow offer-card"
    wrap
  >
    <v-flex
      shrink
    >
      <v-layout class="offer-card__avatar-box">
        <Avatar
          :img="offer.client.logo"
          :name="offer.client.name"
          size="xl"
          mobile-size="lg"
        />
      </v-layout>
    </v-flex>
    <v-flex
      xs8
      lg9
    >
      <h3 class="offer-card__header hidden-xs-only mb-3">
        {{ offer.title }}
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
            {{ offer.jobType === 'per_hour'? t('perHour') : t('fixedPrice') }}
          </p>
          <p class="ma-0">
            {{ `$${offer.budget}` }}
          </p>
        </v-flex>
        <!-- TODO: Insert when rating is ready -->
        <!-- <v-flex xs12 sm5 md3 class="offer-card__icon-box">
          <p class="ma-0 primary--text font-weight-bold mr-2">
            {{ t('clientRating') }}
          </p>
          <p class="ma-0">
            {{ offer.review }}
          </p>
        </v-flex> -->
      </v-layout>
      <p class="font-weight-light offer-card__description hidden-xs-only">
        {{ truncateText(offer.description, 30) }}
      </p>
    </v-flex>
    <h3 class="font-size-h3 hidden-sm-and-up mt-3">
      {{ offer.title }}
    </h3>
  </v-layout>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import watchBreakPoints from '@/mixins/watchBreakPoints';
import truncateWords from '@/mixins/truncateWholeWords';
import Avatar from '@/components/shared/AvatarComponent';

export default {
  components: { Avatar },
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
