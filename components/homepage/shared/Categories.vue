<template>
  <v-flex
    xs10
    sm12
    md10
    lg8
  >
    <v-layout
      v-if="categories"
      wrap
      class="homepage__category-box"
    >
      <v-btn
        small
        flat
        class="baseGrey--text homepage__category-btn"
        :class="{
          'active': !activeCategory
        }"
        @click="fetchPerCategory(null)"
      >
        {{ t('allCategory') }}
      </v-btn>
      <v-btn
        v-for="category in categories"
        :key="category.id"
        small
        flat
        round
        class="baseGrey--text homepage__category-btn"
        :class="{
          'active': activeCategory === category.name
        }"
        @click="fetchPerCategory(category.name)"
      >
        {{ category.name }}
      </v-btn>
      <v-btn
        small
        flat
        left
        class="azure--text text-none font-weight-black mr-0 hidden-md-and-down"
      >
        {{ t('more') }}
      </v-btn>
    </v-layout>
  </v-flex>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import textTranslations from '@/mixins/textTranslations';
import watchBreakPoints from '@/mixins/watchBreakPoints';

export default {
  name: 'HomepageCategories',
  mixins: [textTranslations, watchBreakPoints],
  props: {
    scope: {
      type: String,
      required: true
    },
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      translationScope: 'homepage',
      activeCategory: null,
      categoriesLength: null
    };
  },
  methods: {
    ...mapActions('homepage', ['fetchJobsPerCategory', 'fetchFreelancerPerCategory']),
    ...mapMutations('homepage', ['TOGGLE_CATEGORY']),
    fetchPerCategory(category) {
      this.activeCategory = category;
      this.TOGGLE_CATEGORY(category);
      if (this.scope === 'jobs') {
        this.fetchJobsPerCategory(category);
      } else {
        this.fetchFreelancerPerCategory(category);
      }
    }
  }
};
</script>
