<template>
  <v-card class="base-card base-card_default base-card-shadow">
    <v-card-title class="base-card__title">
      <h4 class="base-card__header primary--text text-no-wrap">
        {{ localization.sectionHeader }}
      </h4>
    </v-card-title>
    <v-card-text class="base-card__content">
      <v-layout row wrap>
        <v-layout v-for="item in communityArticlesList" :key="item.title" xs12 class="dashboard__articles-row">
          <v-flex v-if="showFreelancersPhoto" xs2 pr-2>
            <v-img
              :src="require('@/assets/images/dashboard/freelancer/' + item.photo)"
              contain
              :max-width="42"
            />
          </v-flex>
          <v-flex :class="showFreelancersPhoto ? 'xs10' : 'xs12'">
            <p>
              <span class="dashboard__article-title">{{ item.title }}</span>
              <span class="dashboard__job-new-proposals">{{ item.comments }} + {{ item.new }} </span>
            </p>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-card-text>
    <v-card-actions v-if="localization.seeAll" class="base-card__action">
      <nuxt-link to="#" class="base-card__link">
        {{ localization.seeAll }}
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'DashboardCommunityArticles',
  mixins: [textTranslations],
  props: {
    communityArticlesList: {
      type: Array,
      default: () => []
    },
    showFreelancersPhoto: {
      type: Boolean,
      default: false
    },
    localization: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      translationScope: 'dashboard'
    };
  }
};
</script>
