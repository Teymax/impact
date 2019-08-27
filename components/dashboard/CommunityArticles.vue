<template>
  <v-card class="base-card-style base-card-shadow">
    <v-card-title class="base-card-title">
      <h4 class="base-card-header primary--text text-no-wrap">
        {{ t('communityArticles.communityArticlesHeader') }}
      </h4>
    </v-card-title>
    <v-card-text class="base-card-content">
      <v-layout row wrap>
        <v-flex v-for="item in communityArticlesList" :key="item.title" xs12 class="dashboard__articles-row">
          <p>
            <span class="dashboard__article-title">{{ item.title }}</span>
            <span class="dashboard__job-new-proposals">{{ item.comments }} + {{ item.new }} </span>
          </p>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="base-card-action">
      <nuxt-link to="#" class="base-card-link">
        {{ t('communityArticles.seeAllArticles') }}
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'CommunityArticles',
  mixins: [textTranslations],
  props: {
    communityArticlesList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      translationScope: 'dashboard'
    };
  }
};
</script>
