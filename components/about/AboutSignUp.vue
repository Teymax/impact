<template>
  <div class="about-sign-up">
    <v-layout>
      <v-flex xs12>
        <h2>{{ title }}</h2>
      </v-flex>
      <v-flex xs12>
        <v-btn
          v-for="btn in switchBtns"
          :key="btn.id"
          flat
          :outline="btn.value !== activeTab"
          class="mx-0 base toggle mt-5 homepage__btn homepage__toggle-btn text-capitalize azure--text"
        >
          Sign Up
        </v-btn>
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
    }
  }
};
</script>
