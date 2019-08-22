<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap align-center>
        <v-flex sm1>
          <v-icon class="dashboard__setup-avatar" large dark>
            person
          </v-icon>
        </v-flex>
        <v-flex sm2>
          Set-Up in Progress
        </v-flex>
        <div class="dashboard__progress-container">
          <v-progress-linear v-model="currentProgress" class="dashboard__progress-bar" />
        </div>
        <v-flex sm2>
          <v-btn
            flat
            round
            class="text-none azure base homepage__btn white--text ml-0"
          >
            Continue Set-Up
          </v-btn>
        </v-flex>
        <v-spacer />
        <v-icon @click="closeCard">
          close
        </v-icon>
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
