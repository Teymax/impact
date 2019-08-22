<template>
  <v-card class="dashboard__card base-card-shadow">
    <v-card-text class="base-card-shadow">
      <v-layout row wrap align-start>
        <v-flex xs11>
          <v-layout row wrap align-center>
            <v-flex xs3 sm1 lg1>
              <v-icon class="dashboard__setup-avatar" large dark>
                person
              </v-icon>
            </v-flex>
            <v-flex sm5 md4 lg3>
              Set-Up in Progress
            </v-flex>
            <v-flex sm4 md3 class="dashboard__progress-container">
              <v-progress-linear v-model="currentProgress" class="dashboard__progress-bar" />
            </v-flex>
            <v-flex xs12 sm12 md3 class="text-sm-center">
              <v-btn
                flat
                round
                class="text-none azure base homepage__btn white--text ml-0"
              >
                Continue Set-Up
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-spacer />
        <v-flex xs1 class="text-xs-right">
          <v-icon @click="closeCard">
            close
          </v-icon>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SetupCard',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentProgress: 75
    };
  },
  methods: {
    closeCard() {
      this.$emit('closeSetup');
    }
  }
};
</script>

<style scoped>

</style>
