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
  asyncData({ store }) {
    store.dispatch('homepage/fetchTestimonials');
    store.dispatch('homepage/fetchCategories');
    store.dispatch('homepage/fetchFreelancersCategories');
    store.dispatch('homepage/fetchJobsPerCategory', 'all');
    store.dispatch('homepage/fetchFreelancerPerCategory', 'all');
  }
};
</script>
