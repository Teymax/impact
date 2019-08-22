<template>
  <v-card class="dashboard__card">
    <v-card-title>
      <h4 class="dashboard__subheaders primary--text text-no-wrap">
        Community Articles
      </h4>
    </v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <template
          v-for="item in communityArticlesList"
        >
          <v-flex :key="item.title" xs12>
            <v-layout row wrap>
              <p>
                <span class="dashboard__article-title">{{ item.title }}</span>
                <span class="dashboard__job-new-proposals">{{ item.comments }} + {{ item.new }} </span>
              </p>
            </v-layout>
          </v-flex>
        </template>
      </v-layout>
      <v-layout row wrap>
        <a class="dashboard__link">See All Articles</a>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CommunityArticles',
  props: {
    communityArticlesList: {
      type: Array,
      default: () => null
    }
  }
};
</script>

<style scoped>

</style>
