<template>
  <v-flex
    v-resize="onResize"
    xs10
    sm12
    md10
    lg8
    mt-5
  >
    <v-layout
      v-if="filteredCategories.length"
      wrap
      :justify-space-between="breakpoint.lgAndUp"
      :justify-center="breakpoint.mdAndDown"
    >
      <v-btn
        v-for="category in filteredCategories"
        :key="category"
        small
        flat
        class="baseGrey--text homepage__category-btn"
        :class="{
          'active': activeCategory === category
        }"
        @click="activeCategory = category"
      >
        {{ category }}
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
      type: Array,
      required: true
    }
  },
  data() {
    return {
      translationScope: 'homepage',
      activeCategory: 'all categories',
      categoriesLength: null
    };
  },
  computed: {
    filteredCategories() {
      if (!this.categoriesLength && this.categoriesLength !== 0) return this.categories;
      return this.categories.slice(0, this.categoriesLength);
    }
  },
  methods: {
    onResize() {
      if (window.outerWidth > 960) this.categoriesLength = this.categories.length;
      if (window.outerWidth < 960 && window.outerWidth > 600) this.categoriesLength = 4;
      if (window.outerWidth < 600) this.categoriesLength = 0;
    }
  }
};
</script>
