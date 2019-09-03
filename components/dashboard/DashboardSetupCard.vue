<template>
  <v-card class="base-card-shadow base-card-style">
    <v-card-text>
      <v-layout class="dashboard__container" row wrap align-center>
        <v-flex xs12>
          <slot name="client" :clientScope="clientScope" />
          <slot name="freelancer" :freelancerScope="freelancerScope" />
        </v-flex>
        <v-spacer />
        <v-flex xs1 class="dashboard__close dashboard__close_positioned text-xs-right">
          <v-icon @click="closeCard">
            close
          </v-icon>
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
