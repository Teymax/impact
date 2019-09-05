<template>
  <div>
    <HomePageHeader />
    <HomeIntro />
    <HomeOfferSection />
    <HomeWorkStepsView />
    <HomeInfoSection />
  </div>
</template>

<script>
import HomePageHeader from '@/components/homepage/HomeHeader';
import HomeOfferSection from '@/components/homepage/HomeOfferSection';
import HomeWorkStepsView from '@/components/homepage/HomeWorkStepsView';
import HomeInfoSection from '@/components/homepage/HomeInfoSection';
import HomeIntro from '@/components/homepage/HomeIntro';
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'HomePage',
  components: {
    HomePageHeader, HomeOfferSection, HomeWorkStepsView, HomeInfoSection, HomeIntro
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'homepage'
    };
  },
  async asyncData({ store }) {
    await store.dispatch('homepage/fetchCategories', { length: 6 });
    await store.dispatch('homepage/fetchJobsPerCategory');
    await store.dispatch('homepage/fetchFreelancerPerCategory');
  },
  mounted() {
    this.$store.dispatch('homepage/fetchJobsPerCategory');
  }
};
</script>
