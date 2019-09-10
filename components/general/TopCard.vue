<template>
  <div class="top-card base-card base-card_default base-card-shadow">
    <v-layout row wrap justify-center align-center>
      <v-flex v-if="header" xs10>
        <h2 class="top-card__header">
          {{ header }}
        </h2>
      </v-flex>
      <v-flex xs12>
        <div v-if="content" class="top-card__content">
          <p v-for="contentTxt in content" :key="contentTxt.id" class="top-card__content--txt">
            {{ contentTxt }}
          </p>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'TopCard',
  props: {
    header: {
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
