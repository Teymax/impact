<template>
  <v-layout row wrap align-center>
    <v-flex>
      <avatar size="xs" :img="item.img" />
    </v-flex>
    <v-flex md8 xs9>
      <p class="freelancers__freelancer-name mb-0">
        {{ item.name }}
      </p>
      <p class="freelancers__freelancer-spec mb-0">
        {{ item.speciality }}
        <span class="freelancers__hours">({{ item.hours }} {{ t('myFreelancers.hours') }})</span>
      </p>
    </v-flex>
    <v-flex>
      <v-btn
        flat
        round
        block
        class="text-none azure base homepage__btn white--text ml-0"
      >
        {{ t('myFreelancers.hire') }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Avatar from '../shared/AvatarComponent';
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'DashboardFreelancerCard',
  components: {
    Avatar
  },
  mixins: [textTranslations],
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      translationScope: 'dashboard'
    };
  }
};
</script>
