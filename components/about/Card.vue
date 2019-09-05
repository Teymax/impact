<template>
  <div class="base-card base-card_default base-card-shadow">
    <v-layout justify-center align-center>
      <v-flex xs10>
        <h2 v-if="header" class="about__header">
          {{ header }}
        </h2>
        <h3 v-if="title">
          {{ title }}
        </h3>
        <div v-if="content" class="about__content">
          <p v-for="contentTxt in content" :key="contentTxt.id" class="about__content--txt">
            {{ contentTxt }}
          </p>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    header: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>

</style>
