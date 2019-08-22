<template>
  <v-card class="dashboard__card base-card-shadow">
    <v-card-title class="dashboard__card-title">
      <h4 class="dashboard__subheaders primary--text text-no-wrap">
        Community Articles
      </h4>
    </v-card-title>
    <v-card-text class="dashboard__card-content">
      <v-layout row wrap>
        <v-flex v-for="item in communityArticlesList" :key="item.title" xs12 class="dashboard__articles-row">
          <p>
            <span class="dashboard__article-title">{{ item.title }}</span>
            <span class="dashboard__job-new-proposals">{{ item.comments }} + {{ item.new }} </span>
          </p>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="dashboard__actions-block">
      <a class="dashboard__link">See All Articles</a>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CommunityArticles',
  props: {
    communityArticlesList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>

</style>
