<template>
  <v-toolbar
    prominent
    app
    flat
    :height="110"
    class="main-navbar px-2"
  >
    <DesktopResolution
      class="hidden-md-and-down"
    />
    <MobileResolution
      class="hidden-lg-and-up"
    />
  </v-toolbar>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';
import DesktopResolution from './desktop/DesktopMain';
import MobileResolution from './mobile/MobileMain';

export default {
  components: {
    DesktopResolution, MobileResolution
  },
  mixins: [textTranslations],
  data() {
    return {
      translationScope: 'navigation'
    };
  }
};
</script>
