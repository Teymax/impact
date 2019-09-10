<template>
  <v-container pb-5 fluid class="homepage__main">
    <v-layout
      class="homepage__container"
      row
      wrap
      justify-center
      align-center
    >
      <v-flex
        xs12
        lg5
        xl5
        shrink
      >
        <v-layout
          row
          wrap
          class="homepage__head-box"
        >
          <v-flex xs12 text-xs-center text-lg-left>
            <h1 class="homepage__header baseGrey--text text-no-wrap">
              {{ t('dontWork') }}
            </h1>
            <h1 class="homepage__header primary--text text-no-wrap">
              {{ t('makeImpact') }}
            </h1>
            <h2
              class="homepage__subheader baseGrey--text font-weight-light"
            >
              {{ t('subheader') }}
            </h2>
          </v-flex>
          <v-flex
            xs10
            sm12
            align-self-center
            text-xs-center
            text-lg-left
          >
            <v-btn
              flat
              round
              class="text-none azure base homepage__btn white--text ml-0"
            >
              {{ t('findJob') }}
            </v-btn>
            <v-btn
              flat
              round
              outline
              class="text-none base azure homepage__btn azure--text ml-0"
            >
              {{ t('findFreelancer') }}
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex shrink class="homepage__img-box">
        <v-img
          :src="require('@/assets/images/home/worldImage.png')"
          :min-width="imageWidth"
          contain
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import watchBreakPoints from '@/mixins/watchBreakPoints';

export default {
  name: 'HomePageHeader',
  mixins: [textTranslations, watchBreakPoints],
  data() {
    return {
      translationScope: 'homepage',
      counter: 0
    };
  },
  computed: {
    imageWidth() {
      if (this.breakpoint.xs) {
        return 188;
      }
      if (this.breakpoint.smAndUp && !this.breakpoint.mdAndUp) {
        return 350;
      }
      return 450;
    }
  }
};
</script>
