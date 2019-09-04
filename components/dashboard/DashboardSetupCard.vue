<template>
  <v-card class="base-card-shadow">
    <v-card-text>
      <v-layout row wrap align-center class="dashboard__container">
        <v-flex xs12>
          <slot name="client" :clientScope="clientScope" />
          <slot name="freelancer" :freelancerScope="freelancerScope" />
        </v-flex>
        <v-spacer />
        <v-flex xs1 class="dashboard--close-positioned text-xs-right">
          <v-btn flat small fab>
            <v-icon @click="closeCard">
              close
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import textTranslations from '@/mixins/textTranslations';

export default {
  name: 'DashboardSetupCard',
  mixins: [textTranslations],
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      clientScope: {
        translationScope: 'dashboard',
        currentProgress: 75
      },
      freelancerScope: {}
    };
  },
  methods: {
    closeCard() {
      this.$emit('closeSetup');
    }
  }
};
</script>
