<template>
  <div class="about-sign-up">
    <v-layout column wrap justify-center align-center>
      <v-flex xs12>
        <h2 class="about-sign-up__title text-xs-center">
          {{ title }}
        </h2>
      </v-flex>
      <v-flex xs12>
        <div class="about-sign-up__btn">
          <v-btn
            class="azure base white--text mt-4 font-weight-bold text-capitalize"
            round
          >
            <span class="about-sign-up__btn-txt">
              {{ btnText }}
            </span>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'AboutSignUp',
  props: {
    title: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    }
  }
};
</script>
