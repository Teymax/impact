<template>
  <v-card class="dashboard__card base-card-shadow">
    <v-card-text class="base-card-shadow">
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm12 md1 lg1 text-sm-center>
           <v-img
             :src="starImg"
             :height="24"
             :width="24"
           />
        </v-flex>
        <v-flex xs12 sm12 md6 lg6 text-sm-center>
          Set Up your Profile Today and Get +10 Impacts
        </v-flex>
        <v-flex xs12 sm12 md3 text-sm-center>
          <v-btn
            flat
            round
            class="text-none azure base homepage__btn white--text ml-0"
          >
            Start Set-Up
          </v-btn>
        </v-flex>
        <div class="setup-profile__close-btn">
          <v-icon @click="closeCard">
            close
          </v-icon>
        </div>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import starImg from '../../assets/images/dashboard/star.png';

export default {
  name: 'SetUpProfile',
  data() {
    return {
      starImg
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
